---
name: cst-identidad-visual
description: Úsala para definir la identidad visual de CST a partir del logo elegido: 3 paletas con contraste AA verificado, pareja tipográfica con next/font, escala fluida, espaciado, radios y tokens CSS/Tailwind, más el brand board en /lab/marca.
---

# Identidad visual · CST

## Objetivo
Convertir el logo en un sistema: colores, letras y medidas que se usan igual en todo el sitio.

## Reglas
- **Paleta:** base sobria (blanco roto, negro cálido, 3–5 grises cálidos) + **un** acento feliz + **uno** de apoyo. Nada de morado-azul neón.
- 3 propuestas de paleta, cada una con su tabla de contraste **WCAG AA** verificada (4.5:1 texto normal, 3:1 texto grande y elementos de interfaz). Calcularlo, no estimarlo.
- **Tipografía:** máximo 2 familias, preferir variables, servidas con `next/font`, con tildes, ñ, ¿ y ¡. Nada de Inter o Poppins por defecto sin jerarquía.
- Escala tipográfica fluida con `clamp()` (ej. `--text-hero: clamp(3rem, 8vw + 1rem, 9rem)`).
- Espaciado en escala 4/8 (4, 8, 12, 16, 24, 32, 48, 64, 96, 128).
- Radios: 2–3 valores. Sombras: mínimas (1 o 2) o ninguna.
- Todo como tokens en `src/app/globals.css` con `@theme` de Tailwind 4; cero valores sueltos en componentes.
- Tener en cuenta el brief anterior (`brief-cst.md`, Ruta A «Señal») como punto de partida si Nico lo quiere conservar.

## Pasos
1. Partir del logo elegido: color, peso y geometría.
2. Armar 3 paletas → tabla de contraste por par (texto/fondo, acento/fondo, botón).
3. Proponer pareja tipográfica (display + texto) con ejemplo de titular, párrafo y botón.
4. Definir tokens: color, tipo, espaciado, radios, sombras, movimiento (de `cst-motion-base`).
5. Brand board en `/lab/marca` (`noindex`): logo, paletas, tipografía, escala, ejemplos de botones y tarjetas, en claro y oscuro.

## Checklist antes de dar por terminado
- [ ] 3 paletas con contraste AA calculado.
- [ ] Un solo acento feliz por paleta.
- [ ] Máximo 2 familias, con `next/font`, con tildes y ñ probadas.
- [ ] Escala fluida con `clamp()`.
- [ ] Tokens en `globals.css`; ningún color o medida suelta.
- [ ] `/lab/marca` con `noindex` y preview enviado.
