---
name: cst-seguridad-web
description: Úsala para la seguridad del sitio de CST: headers en next.config (CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors) explicados uno por uno, formularios validados en servidor con zod, rate limit y honeypot, secretos solo en Vercel, npm audit y Dependabot.
---

# Seguridad web · CST

## Objetivo
Cerrar las puertas comunes de ataque y que Nico entienda para qué sirve cada candado.

## Headers (en `next.config.ts` → `async headers()`), con su explicación en una línea
| Header | Para qué sirve | Valor inicial sugerido |
|---|---|---|
| `Content-Security-Policy` | Lista blanca de dónde puede cargar scripts, estilos, imágenes y videos; frena inyecciones de código | Empezar en `Content-Security-Policy-Report-Only`, luego activar |
| `Strict-Transport-Security` | Obliga al navegador a usar siempre HTTPS | `max-age=63072000; includeSubDomains; preload` (Vercel ya pone `max-age`) |
| `X-Content-Type-Options` | Impide que el navegador "adivine" el tipo de un archivo y lo ejecute | `nosniff` |
| `Referrer-Policy` | Controla cuánta info de la URL se manda a otros sitios al hacer clic | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Apaga funciones del navegador que no usamos (cámara, micrófono, ubicación) | `camera=(), microphone=(), geolocation=()` |
| `frame-ancestors` (dentro de la CSP) | Impide que otro sitio meta el nuestro en un iframe para engañar clics | `frame-ancestors 'none'` |

- La CSP debe permitir lo que realmente se usa (Google Analytics, Vercel Analytics, hosting de video, `wa.me` como enlace). Probar en Report-Only antes de activarla; revisar la consola.
- Next inyecta scripts inline: usar nonce (middleware) o `'unsafe-inline'` solo en `style-src` si no hay alternativa, y documentar la decisión.

## Formularios
- Validación en **servidor** con **zod** (Server Action o Route Handler), además de la del cliente.
- **Honeypot**: campo oculto que los humanos no llenan; si viene lleno, se descarta en silencio.
- **Rate limit** por IP (ej. 5 envíos por 10 min) con un almacén compatible con Vercel; si requiere servicio externo, proponerlo y esperar OK.
- Nunca devolver errores internos al usuario.

## Secretos y dependencias
- Secretos **solo** en variables de entorno de Vercel; `.env*.local` en `.gitignore` (ya está). Nunca `NEXT_PUBLIC_` para algo secreto.
- `npm audit` en cada fase; corregir altas y críticas.
- Activar **Dependabot** (`.github/dependabot.yml`, npm semanal) con OK de Nico.

## Checklist antes de dar por terminado
- [ ] Los 6 headers presentes (`curl -sI <url>`).
- [ ] CSP probada sin errores en consola.
- [ ] Cada header explicado a Nico en una línea.
- [ ] Formularios: zod en servidor, honeypot, rate limit.
- [ ] Ningún secreto en el repo (`git grep -i "key\|token\|secret"` revisado).
- [ ] `npm audit` sin altas/críticas; Dependabot activo.
