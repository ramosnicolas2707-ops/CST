---
name: cst-accesibilidad
description: Úsala para revisar y construir accesibilidad WCAG 2.2 AA en el sitio de CST: contraste, foco visible, navegación con teclado (incluido scroll horizontal y menú), reduced motion, subtítulos y controles en videos, landmarks, labels y prueba con NVDA.
---

# Accesibilidad · CST

## Objetivo
Que cualquier persona pueda usar el sitio: con teclado, lector de pantalla, poca visión o sensibilidad al movimiento.

## Reglas (WCAG 2.2 AA)
- **Contraste:** 4.5:1 texto normal, 3:1 texto grande (≥ 24 px o 19 px negrita) y componentes de interfaz/foco.
- **Foco visible** en todo elemento interactivo (`:focus-visible`), que no quede tapado por headers fijos (2.4.11).
- **Teclado:** todo se usa con Tab/Shift+Tab/Enter/Espacio/Esc. El **scroll horizontal** de servicios debe poder recorrerse con teclado (los paneles son enfocables o hay botones anterior/siguiente). El **menú** móvil atrapa el foco mientras está abierto y se cierra con Esc.
- **Skip link** "Saltar al contenido" al inicio.
- **`prefers-reduced-motion`** respetado en todas las animaciones (ver `cst-motion-base`).
- Nada se mueve más de 5 s sin forma de pausarlo (marquee con pausa).
- **Videos:** subtítulos `.vtt` y controles en la versión con audio; los loops decorativos sin audio llevan `aria-hidden` o descripción.
- **Nada de texto solo dentro de imágenes.**
- **Landmarks:** `<header>`, `<nav>`, `<main>`, `<footer>`; secciones con encabezado.
- **Formularios:** `<label>` visible por campo, errores asociados con `aria-describedby`, mensajes en `aria-live`.
- Zonas táctiles ≥ 24×24 px (2.5.8; el proyecto usa 44 px).
- Idioma correcto en `<html lang>`.

## Pasos
1. Lighthouse accesibilidad (≥ 95) + axe (Playwright con `@axe-core/playwright` o extensión).
2. Recorrer la página solo con teclado.
3. Prueba básica con **NVDA** (gratis, Windows): `Ctrl+Alt+N` inicia; `H` salta entre encabezados, `D` entre landmarks, `Insert+F7` lista de enlaces.
4. Activar reduced motion en Windows (Configuración → Accesibilidad → Efectos visuales → Efectos de animación: desactivado) y revisar.
5. Zoom al 200 %: nada se corta.

## Checklist antes de dar por terminado
- [ ] Contrastes AA verificados.
- [ ] Todo accesible con teclado, incluido scroll horizontal y menú.
- [ ] Foco siempre visible.
- [ ] Reduced motion respetado.
- [ ] Videos con subtítulos y controles.
- [ ] Landmarks y labels correctos.
- [ ] Prueba con NVDA hecha y anotada en `QA.md`.
