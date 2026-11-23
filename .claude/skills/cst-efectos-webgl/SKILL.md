---
name: cst-efectos-webgl
description: Úsala solo si se decide agregar un efecto WebGL al sitio de CST (ej. shader suave en el CTA final o partículas que forman el logo); define cómo cargarlo después del LCP, solo en equipos potentes, pausado fuera de pantalla, con fallback estático y medición de impacto.
---

# Efectos WebGL · CST

## Objetivo
Un único efecto que sume de verdad a la sensación feliz del sitio, sin costar velocidad.

## Cuándo NO usarlo
- Si un degradado CSS, un SVG animado o un video corto logran lo mismo.
- Si el Lighthouse móvil ya está cerca de 90.
- Si es solo "porque se ve tech" (ver `cst-anti-ia`).

## Reglas
- **Un solo efecto** en todo el sitio (ej. gradiente animado con shader suave en el CTA final, o partículas que forman el logo).
- Preferir **shader propio** o librerías livianas (OGL, ~25 KB) antes que Three.js completo.
- Cargar **después del LCP** con import dinámico y solo cuando la sección se acerca.
- Solo en escritorio o equipos potentes: `(min-width: 1024px)`, `navigator.hardwareConcurrency >= 4`, sin `saveData`, sin reduced motion.
- **Pausado fuera de pantalla** (IntersectionObserver detiene el `requestAnimationFrame`) y cuando la pestaña está oculta (`visibilitychange`).
- **Fallback estático** (imagen o degradado CSS con los colores de marca) visible desde el primer render; el canvas aparece encima cuando está listo.
- `devicePixelRatio` con tope de 1.5–2. Liberar el contexto WebGL al desmontar.
- Colores del shader desde los tokens de marca.

## Pasos
1. Justificar por escrito qué aporta y por qué CSS no alcanza.
2. Medir Lighthouse y KB de JS **antes**.
3. Implementar con fallback primero, efecto después.
4. Medir **después**: si el rendimiento baja de 90 o el JS sube más de ~30 KB, simplificar o quitar.

## Checklist antes de dar por terminado
- [ ] Justificación escrita y aprobada por Nico.
- [ ] Un solo efecto en el sitio.
- [ ] Carga después del LCP, solo en equipos capaces.
- [ ] Pausa fuera de pantalla y en pestaña oculta.
- [ ] Fallback estático visible sin JS.
- [ ] Tabla antes/después de Lighthouse y KB de JS.
