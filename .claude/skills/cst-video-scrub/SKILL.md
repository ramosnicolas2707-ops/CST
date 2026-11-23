---
name: cst-video-scrub
description: Úsala para el efecto Apple de video que avanza con el scroll en el sitio de CST, comparando secuencia de imágenes en canvas contra video con un keyframe por frame, con presupuesto de 3–5 MB, carga diferida y fallback estático.
---

# Video scrub · CST

## Objetivo
Un momento cinematográfico controlado por el scroll, sin hundir la velocidad del sitio.

## Opciones (explicarle a Nico antes de elegir)
| | A · Secuencia de imágenes en `<canvas>` | B · `<video>` con `currentTime` |
|---|---|---|
| Cómo | 60–120 WebP/AVIF dibujados según el progreso | MP4 codificado con un keyframe por frame (`ffmpeg -g 1`) |
| Pros | Muy fluido y preciso en todos los navegadores, incluido iOS | Un solo archivo, más fácil de producir |
| Contras | Muchos archivos, precarga más compleja, más peso total | Puede verse a saltos en algunos móviles/Safari; archivo grande por los keyframes |
| Peso típico | 30–60 KB por frame | 3–8 MB según duración y resolución |

## Reglas
- Usarlo **máximo 1–2 veces** en todo el sitio.
- Presupuesto **3–5 MB en total** por efecto.
- Cargar **solo cuando la sección se acerca** (IntersectionObserver con `rootMargin` ~1 pantalla). Precarga progresiva: primero 1 de cada 4 frames, luego el resto.
- **Fallback a imagen fija** (poster) con: `prefers-reduced-motion`, `navigator.connection.saveData`, conexión lenta (`effectiveType` 2g/3g), o si falla la carga.
- El canvas se ajusta a `devicePixelRatio` con tope de 2.
- Versión móvil con menos frames y menor resolución (vertical si aplica).
- Comando de referencia para B: `ffmpeg -i in.mp4 -an -vf "scale=1280:-2" -c:v libx264 -g 1 -crf 26 -movflags +faststart out.mp4`.
- Para A: `ffmpeg -i in.mp4 -vf "fps=24,scale=1280:-2" frames/%03d.webp`.

## Pasos
1. Presentar A vs. B con el material real y recomendar.
2. Procesar el video con ffmpeg y medir el peso total.
3. Implementar con ScrollTrigger (`scrub: true`) sobre la base de `cst-motion-base`.
4. Probar en un celular real y con red lenta (DevTools → Slow 4G).
5. Medir Lighthouse antes y después.

## Checklist antes de dar por terminado
- [ ] Nico eligió A o B conociendo pros y contras.
- [ ] Máximo 2 usos en el sitio.
- [ ] Peso total ≤ 5 MB por efecto.
- [ ] Carga diferida al acercarse.
- [ ] Fallback a imagen con reduced motion / ahorro de datos / red lenta.
- [ ] Lighthouse móvil sigue ≥ 90.
