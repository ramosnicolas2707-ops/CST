---
name: cst-logo-lab
description: Úsala para crear y comparar conceptos de logo de CST en SVG hecho a mano (10 territorios distintos), con versión animada y una galería en /lab/logos con fondo claro/oscuro, mockups y comparador.
---

# Logo lab · CST

## Objetivo
Explorar 10 caminos de logo realmente distintos y verlos en contexto real antes de elegir.

## Reglas
- SVG escrito a mano: paths limpios, `viewBox` ajustado al dibujo, sin `<image>`, sin raster, sin fuentes externas (texto convertido a trazos o lettering propio).
- Debe funcionar **a una tinta**, en positivo y negativo, legible a **16×16 px** y en gran formato.
- **Sin** degradados, sombras, biseles ni 3D.
- Un territorio por concepto, sin repetir lenguaje visual:
  1. Wordmark puro (detalle único en una letra) · 2. Monograma · 3. "El clic" (dos formas que encajan) · 4. Sonrisa escondida · 5. Sol / luz · 6. Un solo trazo · 7. Emblema / sello (merch) · 8. Logo dinámico (sistema de estados) · 9. Espacio negativo · 10. Firma manuscrita.
- Evitar lo que prohíbe `cst-anti-ia` (nada de cerebros, circuitos, hexágonos tech, engranajes).
- Borrar logos existentes solo con lista previa y OK de Nico (quedan en el historial de git).

## Ficha por concepto
- Nombre del concepto.
- Idea en 2 líneas.
- Por qué transmite **confianza** y **alegría** a la vez.
- Versión animada simple (CSS o SVG, < 1 s, respeta `prefers-reduced-motion`).

## Galería `/lab/logos`
- `robots: { index: false }` en la metadata de toda la ruta `/lab`.
- Cada logo sobre fondo claro y oscuro, a 16, 32, 64 y 256 px.
- Mockups simples en SVG/CSS (sin fotos de stock): favicon en pestaña, perfil circular de Instagram, tarjeta de presentación, camiseta, fachada.
- Comparador lado a lado: elegir 2–3 y verlos juntos.
- Usable en celular (Nico la revisa en el preview de Vercel).

## Checklist antes de dar por terminado
- [ ] 10 conceptos, 10 territorios, ninguno repetido.
- [ ] Todos los SVG sin raster, sin fuentes externas, sin degradados.
- [ ] Legibles a 16 px (revisado en la galería).
- [ ] Positivo, negativo y una tinta.
- [ ] Ficha completa y animación < 1 s por concepto.
- [ ] `/lab/logos` con `noindex` y preview enviado.
- [ ] Revisión con `cst-anti-ia` hecha.
