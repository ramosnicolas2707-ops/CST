---
name: cst-qa
description: Úsala antes de cerrar cualquier fase o bloque del proyecto CST: build, lint y tipos, pruebas Playwright (rutas, capturas 390/1440, links rotos, número de WhatsApp, consola limpia), Lighthouse móvil, repaso de checklists de las skills usadas, /code-review y /simplify, y reporte en QA.md.
---

# QA · CST

## Objetivo
No mostrarle nada a Nico que no haya pasado por una revisión completa y repetible.

## Pasos
1. **Compilación:** `npm run build:check` sin errores ni warnings nuevos. `npm run typecheck` ok. Lint ok (configurar ESLint si aún no existe; `next lint` está deprecado en Next 15.5 → usar `eslint` directo).
2. **Playwright** (`@playwright/test`, pruebas en `tests/`):
   - Smoke test: cada ruta del sitemap responde 200 y tiene un H1.
   - Capturas en **390** y **1440 px** de cada página (guardar en `tests/capturas/`, fuera de git si pesan).
   - **Links rotos:** recorrer todos los `<a href>` internos y comprobar 200.
   - **WhatsApp:** todos los enlaces `wa.me` usan `573123445330` y tienen `text=`.
   - **Consola limpia:** sin errores ni warnings de React/Next en la consola del navegador.
   - Sin scroll horizontal en 360 y 390 px.
3. **Lighthouse móvil** contra el preview de Vercel (ver `cst-performance`); tabla antes/después.
4. **Checklists:** repasar el checklist de cada skill usada en la fase y marcar ✅/❌.
5. **Revisiones automáticas:** correr `/code-review` y `/simplify` sobre el diff de la rama; aplicar lo que tenga sentido y anotar lo que no.
6. **Datos:** buscar `[PENDIENTE` en el código y confirmar que cada uno está en `PENDIENTES.md`.
7. Escribir el reporte.

## Formato de `QA.md` (una sección por fase, la más reciente arriba)
```
## Fase N · <nombre> · <fecha>
| Prueba | Resultado |
|---|---|
| build / tipos / lint | ✅ / ❌ |
| Playwright (rutas, links, WhatsApp, consola) | x/y |
| Capturas 390 / 1440 | ruta |
| Lighthouse móvil (R/A/BP/SEO) | 00/00/00/00 |
| Checklists de skills | lista |
| /code-review, /simplify | hallazgos y decisión |
| Pendientes nuevos | lista |
```

## Checklist antes de dar por terminado
- [ ] Build, tipos y lint sin errores.
- [ ] Playwright en verde (o fallos explicados).
- [ ] Capturas en 390 y 1440 px.
- [ ] Número de WhatsApp correcto en todos los enlaces.
- [ ] Consola limpia.
- [ ] Lighthouse móvil medido.
- [ ] Checklists de skills repasados.
- [ ] `/code-review` y `/simplify` corridos.
- [ ] `QA.md` actualizado.
