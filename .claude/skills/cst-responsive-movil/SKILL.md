---
name: cst-responsive-movil
description: Úsala en todo trabajo visual del sitio de CST para garantizar diseño mobile first, pruebas en 360/390/768/1024/1440 px, animaciones simplificadas en móvil, zonas táctiles de 44 px, videos 9:16 y cero scroll horizontal accidental.
---

# Responsive y móvil · CST

## Objetivo
Que el sitio se sienta hecho para el celular, porque de ahí llega la mayoría (Instagram, WhatsApp).

## Reglas
- **Mobile first:** los estilos base son para celular; `sm:`, `md:`, `lg:` agregan para pantallas grandes.
- Anchos de prueba obligatorios: **360, 390, 768, 1024 y 1440 px**.
- En móvil:
  - Animaciones más simples: menos pins (máximo 1 por página), sin cursor personalizado, sin efectos magnéticos.
  - Zonas táctiles de **al menos 44×44 px** con separación entre ellas.
  - Videos verticales **9:16**.
  - **Cero scroll horizontal accidental** (revisar `overflow-x` y elementos con ancho fijo).
  - Menú cómodo para el pulgar: botón abajo o a la derecha, opciones grandes.
  - El hero se lee **sin esperar al video** (texto y poster primero).
- Texto base ≥ 16 px para que iOS no haga zoom en los formularios.
- Usar `dvh`/`svh` en vez de `vh` para alturas de pantalla completa (la barra del navegador móvil cambia de tamaño).
- Imágenes con `sizes` correctos para no bajar archivos de escritorio en el celular.

## Pasos
1. Diseñar y construir primero a 390 px.
2. Ampliar a 768, 1024, 1440.
3. Probar 360 (el más estrecho común).
4. Capturas con Playwright en cada ancho; buscar desbordes con `document.documentElement.scrollWidth > innerWidth`.
5. Probar en el celular real con el preview de Vercel.

## Checklist antes de dar por terminado
- [ ] Probado en 360, 390, 768, 1024 y 1440 px.
- [ ] Sin scroll horizontal en ningún ancho.
- [ ] Zonas táctiles ≥ 44 px.
- [ ] Animaciones de móvil simplificadas (sin cursor ni magnetismo).
- [ ] Hero legible sin video.
- [ ] Videos 9:16 en móvil.
- [ ] Revisado en un celular real.
