---
name: cst-microinteracciones
description: Úsala para hover, clics, foco y transiciones en el sitio de CST: botones magnéticos y cursor personalizado solo en escritorio, hover de tarjetas, View Transitions entre páginas, estados de foco, respuesta feliz del formulario y un easter egg del logo.
---

# Microinteracciones · CST

## Objetivo
Pequeñas respuestas que hacen sentir el sitio vivo y feliz, sin estorbar.

## Reglas
- **Toda respuesta visual en menos de 300 ms** (inicio inmediato; la animación puede durar más, pero arranca ya).
- **Botones magnéticos:** solo con `(hover: hover) and (pointer: fine)`; desplazamiento máximo ~6–10 px.
- **Cursor personalizado (opcional):** cambia sobre videos ("Ver") y links; apagado en pantallas táctiles y con reduced motion. Nunca se oculta el cursor real si el personalizado falla.
- **Hover en tarjetas:** leve inclinación (≤ 3°) o zoom del video (≤ 1.05). Solo `transform`.
- **Transiciones entre páginas:** View Transitions API como mejora progresiva (`@view-transition { navigation: auto; }` o la integración de React/Next si está estable). Sin soporte = navegación normal.
- **Foco bonito:** `:focus-visible` con anillo del color de acento, contraste ≥ 3:1, nunca `outline: none` sin reemplazo.
- **Respuesta feliz al enviar el formulario:** check SVG que se dibuja + mensaje con personalidad (ver `cst-voz-y-copy`), anunciado con `aria-live="polite"`.
- **Easter egg pequeño:** ej. el logo reacciona al clic (giro, guiño). No interfiere con la navegación al inicio.
- Todo respeta `prefers-reduced-motion`.
- CSS antes que JS cuando se pueda; JS de estas piezas en componentes client pequeños.

## Pasos
1. Listar qué elementos necesitan respuesta (botones, tarjetas, links, formulario, logo).
2. Implementar en CSS; pasar a JS solo lo magnético y el cursor.
3. Probar con mouse, teclado y celular.
4. Medir INP (debe seguir < 200 ms).

## Checklist antes de dar por terminado
- [ ] Respuesta visual inmediata (< 300 ms).
- [ ] Magnético y cursor solo en escritorio con mouse.
- [ ] Foco visible en todos los interactivos.
- [ ] View Transitions con fallback.
- [ ] Formulario con respuesta feliz y `aria-live`.
- [ ] Easter egg presente y discreto.
- [ ] Reduced motion respetado; INP < 200 ms.
