---
name: cst-motion-base
description: Úsala antes de crear cualquier animación en el sitio de CST para montar (una sola vez) la base de GSAP + ScrollTrigger + Lenis con carga diferida, matchMedia para escritorio/móvil/reduced motion, limpieza con useGSAP y tokens de movimiento.
---

# Motion base · CST

## Objetivo
Una sola configuración de animación, liviana y ordenada, sobre la que se montan todos los efectos.

## Reglas
- Librerías: **GSAP + ScrollTrigger** (GSAP y todos sus plugins, incluido SplitText, son gratis desde 2025) y **Lenis** (`lenis`) para scroll suave. Verificar versiones actuales con `npm view gsap version` y `npm view lenis version` antes de instalar.
- `@gsap/react` para el hook `useGSAP` (limpia solo al desmontar).
- Registrar plugins **una sola vez** en un módulo `src/lib/motion.ts`.
- Cargar GSAP y Lenis con **import dinámico después de que la página pinta** (ej. dentro de `useEffect` o con `requestIdleCallback`). Nunca en el bundle inicial.
- Sincronizar Lenis con ScrollTrigger:
  ```ts
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  ```
- `gsap.matchMedia()` con tres contextos:
  - `(min-width: 1024px) and (prefers-reduced-motion: no-preference)` → todo.
  - `(max-width: 1023px) and (prefers-reduced-motion: no-preference)` → versión simple (sin pins largos, sin cursor).
  - `(prefers-reduced-motion: reduce)` → **sin Lenis, sin pins, sin scrub**: solo fades cortos.
- Limpieza: `useGSAP(() => {…}, { scope })` o `gsap.context()` con `revert()`; al cambiar de página no queda ninguna animación ni ScrollTrigger vivo.
- Animar solo `transform`, `opacity` y `clip-path`.

## Tokens de movimiento (en `src/lib/motion.ts` y como variables CSS)
| Token | Valor |
|---|---|
| `ease.out` | `expo.out` |
| `ease.inOut` | `power3.inOut` |
| `dur.rapida` | 0.4 s |
| `dur.media` | 0.8 s |
| `dur.lenta` | 1.2 s |

## Pasos
1. Instalar `gsap`, `@gsap/react`, `lenis`.
2. Crear `src/lib/motion.ts` (registro + tokens) y un `MotionProvider` client que hace el import dinámico e inicia Lenis según matchMedia.
3. Montar el provider en el layout sin bloquear el render.
4. Medir KB de JS inicial antes y después (debe ser ~0 KB extra en el bundle inicial).

## Checklist antes de dar por terminado
- [ ] GSAP/Lenis fuera del bundle inicial (revisar el reporte de build).
- [ ] Plugins registrados en un solo lugar.
- [ ] Lenis sincronizado con ScrollTrigger.
- [ ] Reduced motion: sin scroll suave ni pins.
- [ ] Al navegar entre páginas no quedan ScrollTriggers (`ScrollTrigger.getAll().length`).
- [ ] Tokens de movimiento usados, no duraciones sueltas.
