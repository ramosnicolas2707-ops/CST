---
name: cst-conversion-whatsapp
description: Úsala al crear botones de contacto, el botón flotante de WhatsApp o formularios en el sitio de CST: enlaces wa.me con mensaje prellenado distinto por sección, formulario corto validado con antispam, microcopy que quita miedo y medición de clics.
---

# Conversión por WhatsApp · CST

## Objetivo
Que escribir a CST sea lo más fácil y menos intimidante del sitio.

## Reglas
- Número único: `573123445330`. Enlace: `https://wa.me/573123445330?text=<mensaje codificado>`.
- Usar siempre el helper existente `whatsapp(mensaje)` de `src/data/site.ts` (ya codifica con `encodeURIComponent`). Nunca escribir el número a mano en un componente.
- **Mensaje distinto por sección**, para saber de dónde viene el cliente:
  - Hero: "Hola CST, vi su web y quiero contarles un problema de mi negocio."
  - Servicios: "Hola CST, me interesa [servicio]."
  - Casos: "Hola CST, vi el caso de [cliente] y quiero algo parecido."
  - CTA final: "Hola CST, ¿qué necesitan saber para ayudarme?"
- Botón flotante **discreto** que aparece después del hero (IntersectionObserver), no tapa contenido ni el botón de cookies, respeta el área segura del celular.
- Formulario corto: nombre, negocio, qué problema tienes, WhatsApp. Validación en cliente y en servidor (zod), honeypot y rate limit (ver `cst-seguridad-web`), checkbox de datos personales sin marcar (ver `cst-legal-colombia`).
- Microcopy que quita miedo: "Sin compromiso", "Te respondemos nosotros, no un bot". Tiempos de respuesta **solo si son reales**: `[PENDIENTE: confirmar tiempo de respuesta]`.
- `target="_blank"` con `rel="noopener"` en enlaces externos.
- Medir: evento por clic con la sección como propiedad (ver `cst-analitica`).

## Pasos
1. Definir el mensaje de cada sección.
2. Implementar con `whatsapp()` y un `data-seccion` para la analítica.
3. Botón flotante con aparición después del hero.
4. Formulario (si se pide) con validación, honeypot y respuesta feliz.
5. Probar los enlaces: el número y el texto llegan bien en WhatsApp móvil y web.

## Checklist antes de dar por terminado
- [ ] Todos los enlaces usan `whatsapp()` y el número correcto.
- [ ] Mensaje prellenado distinto por sección y bien codificado (tildes, ñ, ¿).
- [ ] Botón flotante aparece solo después del hero.
- [ ] Formulario: validación servidor, honeypot, rate limit, checkbox legal sin marcar.
- [ ] Ningún tiempo de respuesta inventado.
- [ ] Clics medidos por sección.
