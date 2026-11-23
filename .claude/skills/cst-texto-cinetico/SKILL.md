---
name: cst-texto-cinetico
description: Úsala para titulares y texto animado en el sitio de CST: titulares gigantes divididos por líneas o palabras con SplitText, marquee infinito en CSS, contadores solo con datos reales y el momento wow de video dentro de las letras, siempre con el texto real accesible.
---

# Texto cinético · CST

## Objetivo
Que la tipografía sea protagonista y tenga vida, sin sacrificar lectura ni accesibilidad.

## Reglas
- **Titulares gigantes estilo Apple:** divididos por líneas o palabras con **SplitText** de GSAP (gratis desde 2025). Usar `autoSplit` / re-split al cambiar el ancho para que las líneas no se rompan.
- El texto real **siempre en el DOM y accesible**: SplitText agrega `aria-label` en el padre y oculta los fragmentos a lectores de pantalla; verificarlo. Nunca texto solo en `<canvas>` o imagen.
- **Marquee infinito:** CSS puro (`@keyframes` con `translateX(-50%)` sobre contenido duplicado con `aria-hidden` en la copia), pausa con `:hover` y `:focus-within`, detenido con reduced motion. Solo servicios o clientes **reales**.
- **Contadores animados solo con datos reales** ("Más de 10 negocios atendidos"). El número final está en el HTML; la animación solo cuenta hasta él.
- **Momento wow (uno solo en el sitio):** video dentro de las letras con `background-clip: text` + video detrás con `mix-blend-mode`, o máscara SVG (`<mask>` con `<text>`). Fallback: texto sólido en el color de acento.
- Tamaños desde los tokens fluidos (`clamp()`) de `cst-identidad-visual`.
- Evitar animar letra por letra en párrafos largos (cansa y pesa).

## Pasos
1. Definir el titular con `cst-voz-y-copy` (corto).
2. Maquetar el estado final legible.
3. Animar entrada por líneas o palabras (`yPercent`, `opacity`, `ease: expo.out`, stagger 0.05–0.1 s).
4. Probar con lector de pantalla (NVDA): debe leer la frase completa una sola vez.
5. Probar reduced motion.

## Checklist antes de dar por terminado
- [ ] El texto se lee completo sin JS.
- [ ] El lector de pantalla lee la frase una sola vez.
- [ ] Marquee en CSS, con pausa al hover/foco y detenido con reduced motion.
- [ ] Contadores solo con datos reales.
- [ ] Máximo un momento wow, con fallback.
- [ ] Líneas no se rompen al cambiar el ancho.
