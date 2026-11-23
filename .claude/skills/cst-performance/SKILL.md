---
name: cst-performance
description: Úsala en cada fase del proyecto CST para medir y defender la velocidad del sitio: presupuesto de LCP, CLS, INP y Lighthouse móvil, KB de JS inicial, next/image y next/font bien usados, imports dinámicos y tabla antes/después. Si una animación baja el Lighthouse de 90, se simplifica.
---

# Performance · CST

## Objetivo
Que el sitio cargue rápido en un celular de gama media con 4G. Entre un efecto y la velocidad, gana la velocidad.

## Presupuesto (móvil 4G gama media)
| Métrica | Meta |
|---|---|
| LCP | < 2.0 s |
| CLS | < 0.05 |
| INP | < 200 ms |
| Lighthouse rendimiento | ≥ 90 |
| Lighthouse accesibilidad, buenas prácticas, SEO | ≥ 95 |

Línea base (Fase 0, lab local): rendimiento 55, LCP 3.0 s, CLS 0.024, TBT 1 660 ms, JS 299 KB. Ver `AUDITORIA.md`.

## Reglas
- Reportar **KB de JavaScript inicial** en cada fase (salida de `next build`: "First Load JS").
- `next/image` con AVIF/WebP y `sizes` correctos; `priority` **solo** en la imagen LCP.
- Fuentes con `next/font` (subset `latin`, `display: swap`), máximo 2 familias.
- **Import dinámico** para GSAP, Lenis, WebGL y reproductores de video. Nada de librerías gigantes por un solo efecto.
- `content-visibility: auto` + `contain-intrinsic-size` en secciones lejanas.
- Scripts de terceros (Analytics) con estrategia `afterInteractive` o `lazyOnload`; evaluar su costo.
- Videos: `preload="none"` y poster; el LCP nunca es un video.
- Reservar espacio a imágenes, videos y embeds (ancho/alto o `aspect-ratio`) para no mover el layout.
- **Si una animación baja el Lighthouse de 90, se simplifica.**

## Cómo medir
1. Build: `npm run build:check` → anotar "First Load JS" de las rutas principales.
2. Lab: `npx -y lighthouse <url> --form-factor=mobile --output=json` (preferible contra el preview de Vercel, no `localhost` en dev).
3. Confirmar en PageSpeed Insights (pagespeed.web.dev), que es más fiel que un portátil.
4. Campo (cuando haya tráfico): Vercel Speed Insights.

## Tabla por fase
| Métrica | Antes | Después | Meta |
|---|---|---|---|
| Rendimiento | | | ≥ 90 |
| LCP | | | < 2.0 s |
| CLS | | | < 0.05 |
| TBT / INP | | | < 200 ms |
| JS inicial (KB) | | | lo menor posible |

## Checklist antes de dar por terminado
- [ ] Tabla antes/después completa.
- [ ] KB de JS inicial reportados.
- [ ] Imagen LCP con `priority`; ninguna otra.
- [ ] Librerías de animación y video con import dinámico.
- [ ] Rendimiento móvil ≥ 90 (o efecto simplificado).
- [ ] Sin saltos de layout visibles (CLS < 0.05).
