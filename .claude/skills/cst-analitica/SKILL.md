---
name: cst-analitica
description: Úsala para medir el sitio de CST: Vercel Analytics y Speed Insights (GA4 opcional, ya existe), eventos de clic en WhatsApp por sección, envío de formulario, reproducción de video y scroll al 50 y 90 %, sin cookies de terceros innecesarias.
---

# Analítica · CST

## Objetivo
Saber de qué sección vienen los mensajes de WhatsApp y si la gente ve los videos, sin llenar el sitio de rastreadores.

## Estado actual
Google Analytics 4 ya está instalado con `@next/third-parties` (`ANALYTICS_ID` en `src/data/site.ts`, solo en producción).

## Reglas
- **Vercel Analytics** (`@vercel/analytics`) + **Speed Insights** (`@vercel/speed-insights`). Antes de activarlos, revisar con Nico qué incluye su plan de Vercel (no aceptar planes pagos).
- GA4 opcional: decidir con Nico si se mantiene (pesa en el JS inicial; ver `cst-performance`).
- Eventos mínimos:
  | Evento | Propiedades |
  |---|---|
  | `whatsapp_click` | `seccion` (hero, servicios, casos, cta, flotante…) |
  | `form_submit` | `resultado` (ok, error) |
  | `video_play` | `cliente`, `tipo` (loop, completo) |
  | `scroll_depth` | `porcentaje` (50, 90) |
- Un solo helper `track(evento, props)` en `src/lib/analitica.ts` que envía a las herramientas activas; los componentes no llaman a cada proveedor directo.
- Nada de datos personales en los eventos (ni nombre, ni teléfono, ni texto del formulario).
- Sin cookies de terceros innecesarias. **Banner de cookies solo si la analítica lo exige** (GA4 usa cookies → evaluar con `cst-legal-colombia`; Vercel Analytics no usa cookies).
- No contar visitas en desarrollo ni en previews.

## Pasos
1. Decidir herramientas con Nico.
2. Instalar y montar en el layout.
3. Crear `track()` y conectar los eventos con `data-seccion`.
4. Verificar en el panel (Vercel o GA4 tiempo real) desde el preview/producción.

## Checklist antes de dar por terminado
- [ ] Herramientas aprobadas por Nico.
- [ ] Los 4 eventos llegan con sus propiedades.
- [ ] Sin datos personales en eventos.
- [ ] Sin conteo en desarrollo.
- [ ] Decisión sobre banner de cookies documentada.
