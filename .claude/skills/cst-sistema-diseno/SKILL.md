---
name: cst-sistema-diseno
description: Úsala al crear o modificar componentes del sitio de CST (Section, Container, Heading, Button, VideoCard, CaseCard, Marquee, Accordion, StickySection, HorizontalScroller, Reveal) para que usen solo tokens, sean Server Components por defecto y queden documentados en /lab/componentes.
---

# Sistema de diseño · CST

## Objetivo
Construir con piezas reutilizables y consistentes, para que el sitio crezca sin desordenarse.

## Componentes base
| Componente | Tipo | Notas |
|---|---|---|
| `Section` | Server | Espaciado vertical por token, `id` para anclas, `aria-labelledby` |
| `Container` | Server | Ancho máximo y márgenes laterales por token |
| `Heading` | Server | Prop `as` (h1–h4) separada del tamaño visual |
| `Button` | Server | Variantes `primario`, `secundario`, `whatsapp`; `<a>` si navega, `<button>` si actúa |
| `VideoCard` | Client | Video 9:16, play al entrar en pantalla, sonido al tocar |
| `CaseCard` | Server | Problema → solución → resultado |
| `Marquee` | Server + CSS | CSS puro, pausa al hover, `prefers-reduced-motion` |
| `Accordion` | Server | `<details>/<summary>` nativo + animación progresiva |
| `StickySection` | Client | Pin con GSAP, fallback estático |
| `HorizontalScroller` | Client | Scroll horizontal fijo en escritorio, carrusel táctil en móvil |
| `Reveal` | Client | Revelado al entrar; contenido visible sin JS |

## Reglas
- **Solo tokens** de `cst-identidad-visual` (`globals.css` / `@theme`). Cero colores, tamaños o sombras sueltas (`#fff`, `13px`, `shadow-[…]`).
- **Server Components por defecto.** `"use client"` solo donde hay interacción o animación, y lo más abajo posible en el árbol.
- Props tipadas con TypeScript; variantes con un mapa de clases, no con 10 booleanos.
- Accesibles de fábrica: foco visible, roles correctos, zonas táctiles ≥ 44 px.
- Nombres de archivo en PascalCase dentro de `src/components/`; los componentes del sistema en `src/components/ui/`.
- Reutilizar lo que ya existe (`ui.tsx`, `Revelar.tsx`) antes de crear duplicados.

## Pasos
1. Revisar si ya existe algo parecido.
2. Definir props y variantes.
3. Implementar con tokens.
4. Documentar en `/lab/componentes` (`noindex`): cada variante, estados (hover, foco, deshabilitado) en claro y oscuro.

## Checklist antes de dar por terminado
- [ ] Sin valores sueltos (buscar `#`, `px]`, `rgb(` en el diff).
- [ ] `"use client"` solo donde hace falta.
- [ ] Variantes documentadas en `/lab/componentes`.
- [ ] Foco visible y navegación con teclado.
- [ ] `npm run typecheck` ok.
