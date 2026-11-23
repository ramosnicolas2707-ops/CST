---
name: cst-scroll-storytelling
description: Úsala al crear secciones con animación ligada al scroll (pin, scrub, reveal, scroll horizontal, clip-path, parallax, cambio de color de fondo) en el sitio de CST; es el corazón de la experiencia y debe sentirse fluida y legible sin JavaScript.
---

# Scroll storytelling · CST

## Objetivo
Que bajar por la página se sienta como pasar páginas de una historia, sin que el scroll se trabe.

## Técnicas disponibles
1. **Hero que se encoge a tarjeta:** pin + `scale` y `border-radius` con scrub.
2. **Manifiesto palabra por palabra:** cada palabra pasa de opacidad 0.2 a 1 con scrub.
3. **Scroll horizontal fijo:** pin de la sección + `x` del carril (servicios).
4. **Antes/después con el scroll:** elementos desordenados que se acomodan.
5. **Línea SVG que se dibuja:** `stroke-dashoffset` ligado al scroll (proceso).
6. **Revelados por capas:** `clip-path: inset()` que se abre.
7. **Parallax sutil:** máximo **10–15 %** de desplazamiento.
8. **Cambio de color de fondo** entre secciones (variable CSS animada en el `<body>` o contenedor).

## Reglas
- Requiere `cst-motion-base` montado.
- **Una idea por pantalla.** **Máximo 2 pins seguidos.** El scroll nunca debe sentirse trabado: pins de máximo ~150–200 % de alto de pantalla.
- Animar **solo** `transform`, `opacity` y `clip-path`. Nada de `top`, `width`, `height`, `filter: blur` grandes.
- **Todo el contenido se ve y se lee sin JavaScript**: el estado final es el estado del HTML; la animación parte de un estado inicial que se aplica solo cuando JS cargó (clase `js-motion` en `<html>`).
- Revelados simples: CSS nativo `animation-timeline: view()` dentro de `@supports (animation-timeline: view())`, con fallback a visible.
- En móvil: versión simplificada (ver `cst-responsive-movil`); el scroll horizontal se vuelve carrusel táctil.
- Reduced motion: sin pins ni scrub; contenido estático o fade.
- `will-change` solo durante la animación, no permanente.

## Pasos
1. Escribir la idea de la sección en una frase y elegir **una** técnica.
2. Maquetar el estado final en HTML/CSS (sin animación).
3. Agregar la animación dentro de `gsap.matchMedia()`.
4. Probar en 390 y 1440 px, con y sin reduced motion, con JS desactivado.
5. Medir rendimiento (ver `cst-performance`); si baja de 90, simplificar.

## Checklist antes de dar por terminado
- [ ] Una técnica principal por sección.
- [ ] Máximo 2 pins seguidos; el scroll no se traba.
- [ ] Solo `transform`, `opacity`, `clip-path`.
- [ ] Legible con JS desactivado.
- [ ] Reduced motion respetado.
- [ ] Versión móvil simplificada probada.
- [ ] Lighthouse móvil ≥ 90 tras el efecto.
