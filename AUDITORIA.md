# Auditoría del repo · Fase 0

Fecha: 23 de noviembre de 2026 · Rama base: `main` (commit `9a37d23`) · Solo lectura: no se cambió código.

---

## 1. Stack y versiones (instaladas en `node_modules`)

| Pieza | Versión | Nota |
|---|---|---|
| Next.js | 15.5.23 | **App Router** (`src/app`), sin carpeta `pages/` |
| React / React DOM | 19.2.8 | |
| Tailwind CSS | 4.3.3 | v4 con `@tailwindcss/postcss`, sin `tailwind.config` (tokens en `globals.css`) |
| TypeScript | 5.9.3 | |
| `@next/third-parties` | ^15.5.25 | Solo para cargar Google Analytics |
| Node local | 24.20.0 | |
| Fuentes | `next/font/google`: Unbounded + Instrument Sans | |
| Hosting | Vercel (proyecto `cst`, según el brief) | No hay `vercel.json` ni carpeta `.vercel` local; Vercel CLI no está instalada |

El sitio es **100 % estático** y **bilingüe** (`/es` y `/en`). `/` redirige a `/es` con 307 (temporal, a propósito; ver `next.config.ts`).

## 2. Estructura de carpetas

```
src/
  app/            rutas (App Router), robots.ts, sitemap.ts, icon.svg, globals.css
    [lang]/       layout, inicio, contacto, proyectos, servicios/[slug], not-found, imágenes OG
  components/     17 componentes (Nav, Hero, Precios, Faq, Footer, Logo, …)
  data/           textos y datos del negocio por idioma (site.ts, servicios.*, faq.*, proyectos.*)
  i18n/           idiomas y textos de interfaz
  lib/            seo.ts (metadatos y JSON-LD), og.tsx, format.ts, tasa.ts
public/           llms.txt + 7 capturas de proyectos (jpg)
scripts/          build-check.mjs (build en carpeta aparte para no romper el dev)
Marketing/        logos y videos de NovaWeb (en git) + Marketing/cst/ (logo CST, SIN commit)
.agents/skills/   skill frontend-design (en git)
.claude/skills/   carpeta frontend-design VACÍA (enlace roto, no está en git)
```

## 3. Páginas y rutas

| Ruta | Archivo |
|---|---|
| `/` → `/es` | `next.config.ts` (redirect 307) |
| `/es`, `/en` | `src/app/[lang]/page.tsx` |
| `/[lang]/servicios/paginas-web · tiendas-online · rediseno · mantenimiento` | `servicios/[slug]/page.tsx` |
| `/[lang]/proyectos` | `proyectos/page.tsx` |
| `/[lang]/contacto` | `contacto/page.tsx` |
| 404 | `[lang]/not-found.tsx` |
| `/robots.txt`, `/sitemap.xml`, `/icon.svg`, imágenes OG por página | generados por Next |

**Diferencia con el brief nuevo:** el sitio tiene "Rediseño" como servicio y **no** tiene "Automatizaciones y CRM" ni "Software a medida". Tampoco existen Casos, Nosotros ni Legal.

## 4. Componentes

`CtaFinal`, `Faq`, `Footer`, `Hero`, `JsonLd`, `Logo`, `Migas` (breadcrumbs), `Nav`*, `PaginaServicio`, `Precio`, `Precios`, `Proyectos`, `Revelar`*, `SelectorIdioma`*, `SelectorMoneda`*, `ui`.
(* = `"use client"`; el resto son Server Components.) No hay librería de animación: `Revelar` usa IntersectionObserver.

## 5. Dependencias

Todas se usan; **no sobra ninguna**. Faltan (para fases futuras): `gsap`, `lenis`, `zod`, `@vercel/analytics`, `@vercel/speed-insights`, `@playwright/test`. No hay ESLint configurado aunque existe el script `lint` (`next lint` está deprecado en Next 15.5).

## 6. Assets y peso

| Grupo | Peso | En git |
|---|---|---|
| `public/proyectos/*.jpg` (7 capturas Eclipse y Sexta Rueda) | 64–112 KB c/u, ~630 KB total | Sí |
| `Marketing/novaweb-*.png` (3) | ~92 KB c/u | Sí |
| `Marketing/novaweb-*.mp4` (4) | 88–200 KB c/u | Sí |
| `Marketing/cst/logo/` (19 SVG + 20 PNG + index.html) | 4–88 KB c/u | **No (sin commit)** |
| `preview.html` (36 KB), `brief-cst.md` (16 KB) | | **No (sin commit)** |

Las imágenes de `public/` son JPG; `next/image` ya las sirve en AVIF/WebP.

## 7. Variables de entorno (solo nombres)

- `NEXT_DIST_DIR` (opcional, la usa `build:check`)
- `NODE_ENV` (automática)

**No existe `NEXT_PUBLIC_SITE_URL`.** La URL del sitio está escrita a mano en `src/data/site.ts` (`site.url`, `site.domain`). El ID de Google Analytics también está en `site.ts` (no es secreto). No se pudo revisar qué variables tiene Vercel porque la CLI no está instalada.

## 8. Marca vieja (`nova`, `novaweb`, `estudionovaweb`, `Estudio Nova`)

Contando los cambios **sin commit**:

| Archivo | Qué dice |
|---|---|
| `src/data/site.ts:57-58` | `url` y `domain` = `estudionovaweb.com` |
| `src/data/site.ts:69` | correo `this.isnovaweb@gmail.com` |
| `src/data/site.ts:11,20-23,67` | comentarios sobre NovaWeb y el dominio |
| `public/llms.txt:3,56` | "Antes se llamaba NovaWeb" + correo |
| `README.md:5,12,58,84` | historia del cambio y dominio |
| `brief-cst.md:21,62,67,441` | menciones históricas (es un documento) |
| `Marketing/novaweb-*` (7 archivos) | logos y videos viejos |
| Remote de git | `github.com/ramosnicolas2707-ops/novaweb` |
| Falsos positivos | `noVaIncluido` en `textos.ts` y `PaginaServicio.tsx` (no es la marca) |

**Lo que está en producción hoy (commit `9a37d23`) todavía dice NovaWeb**: título "NovaWeb · Páginas web y tiendas online en Colombia". El cambio a CST existe solo en 33 archivos modificados sin commit en `main`.

## 9. Configuración de Next y Vercel

- `next.config.ts`: `reactStrictMode`, imágenes AVIF/WebP, `distDir` configurable, redirect `/`→`/es`.
- **Sin headers de seguridad propios.** En producción solo aparece `Strict-Transport-Security: max-age=63072000` (lo pone Vercel). Faltan CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors.
- Sin `middleware.ts`, sin API routes, sin formularios (contacto = WhatsApp).

## 10. Dominios y DNS (consultado hoy)

| Dominio | Estado |
|---|---|
| `estudionovaweb.com` | Registrado 21-sep-2026, vence **21-sep-2027**. Responde en Vercel con HTTPS. Registros MX de **Namecheap Email Forwarding** (`eforward2…5.registrar-servers.com`) → hay correo configurado |
| `www.estudionovaweb.com` | **No resuelve** (no tiene registro DNS) |
| `centrodesolucionestecnologicas.com` | **El registro oficial .com (Verisign RDAP) responde 404: el dominio NO está registrado** |

## 11. SEO actual

- Metadata API con título, descripción y canonical por página y por idioma; `hreflang` es-CO/en + `x-default`.
- `metadataBase` = `site.url`. `<html lang="es-CO">` en español.
- `sitemap.ts` (con alternates de idioma) y `robots.ts` controlados por `INDEXAR = true`.
- JSON-LD: `ProfessionalService` (con `Person`, `PostalAddress`), `WebSite`, `Service` + `Offer`, `FAQPage`, `BreadcrumbList`. No hay `LocalBusiness` explícito (ProfessionalService es un subtipo de LocalBusiness, así que cuenta).
- Imágenes OG generadas con `next/og`. `public/llms.txt` para buscadores con IA.
- Google Search Console: verificado para `estudionovaweb.com` (según el brief).

## 12. Lighthouse móvil · línea base

Medido hoy desde este PC contra `https://estudionovaweb.com/es` (Lighthouse CLI, perfil móvil, simulación 4G lenta).

| Categoría | Puntaje |
|---|---|
| Rendimiento | **55** |
| Accesibilidad | 100 |
| Buenas prácticas | 100 |
| SEO | 100 |

| Métrica | Valor | Meta (skill 24) |
|---|---|---|
| FCP | 3.0 s | — |
| LCP | 3.0 s | < 2.0 s |
| CLS | 0.024 | < 0.05 ✅ |
| TBT (aprox. de INP) | 1 660 ms | < 200 ms |
| Speed Index | 8.3 s | — |
| Peso total | 429 KB | — |
| JS transferido | 299 KB | — |

**Ojo:** las mediciones desde un portátil con Windows suelen salir peores que las reales porque Lighthouse simula un celular lento sobre la CPU local. Hay que confirmar con PageSpeed Insights (pagespeed.web.dev) antes de sacar conclusiones. Aun así, el TBT alto apunta al JavaScript: Google Analytics por `@next/third-parties` y el runtime de React.

---

## Semáforo

| Área | Estado | Por qué |
|---|---|---|
| Código y estructura | 🟢 | Ordenado, comentado, tipado, Server Components por defecto |
| Accesibilidad / SEO / buenas prácticas | 🟢 | 100 / 100 / 100 |
| Rendimiento móvil | 🟡 | 55 en laboratorio local; hay que confirmarlo en PageSpeed |
| Rebrand a CST | 🟡 | Hecho a medias y **sin commit** en `main`; producción dice NovaWeb |
| Seguridad (headers) | 🟡 | Solo HSTS; nada de CSP y compañía |
| Dominio nuevo | 🔴 | `centrodesolucionestecnologicas.com` no está registrado |
| Calidad automatizada | 🔴 | Sin ESLint, sin tests, sin Playwright |

## Los 5 riesgos principales

1. **El dominio nuevo no existe todavía.** La Fase 1 no puede arrancar hasta que lo compres tú (yo no compro nada). Mientras tanto, nadie más debería poder quitártelo: entre más rápido, mejor.
2. **Trabajo sin commit en `main`.** 33 archivos con el rebrand a CST y la carpeta `Marketing/cst/` existen solo en tu disco. Si el PC falla, se pierden. Hay que decidir si los guardamos en una rama (`fase-2-rebrand`) o los descartamos.
3. **Correo en el dominio viejo.** `estudionovaweb.com` tiene reenvío de correo de Namecheap. Al tocar DNS hay que conservar los MX o se rompe el correo.
4. **El brief nuevo choca con decisiones anteriores.** Ya hay un logo CST terminado ("Ruta A · Señal": azul #2F5BFF, amarillo #FFC21A) y la Fase 3B pide borrar todos los logos y empezar 10 conceptos nuevos. También: el sitio es bilingüe y el brief solo habla de español; los servicios no coinciden (Rediseño vs. Automatizaciones/CRM y Software a medida).
5. **Rendimiento antes de animar.** La Fase 4 suma GSAP, Lenis, video y quizás WebGL sobre una base que ya marca 55 en laboratorio. Sin presupuesto de JS desde el principio, la meta de ≥ 90 se vuelve muy difícil.
