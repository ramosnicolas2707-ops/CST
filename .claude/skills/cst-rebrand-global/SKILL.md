---
name: cst-rebrand-global
description: Úsala para pasar todo el repo de la marca vieja (NovaWeb, Estudio Nova, estudionovaweb) a CST — Centro de Soluciones Tecnológicas: código, metadatos, package.json, README, favicon, OG, textos legales, correos y comentarios.
---

# Rebrand global · CST

## Objetivo
Que no quede rastro de la marca vieja en el sitio ni en el repo, sin reescribir la historia.

## Reglas
- Nombre corto: **CST**. Nombre largo: **Centro de Soluciones Tecnológicas** (con tilde). Forma combinada: `CST — Centro de Soluciones Tecnológicas`.
- No se reescribe el historial de git (nada de `filter-repo` ni rebase de commits viejos).
- Antes de reemplazar se muestra una **tabla antes/después** y se espera OK.
- Cuidado con falsos positivos: `noVaIncluido`, "nueva", "innovación", "renovar". Revisar cada coincidencia; nunca reemplazo masivo a ciegas.
- Archivos que se borran (logos o videos viejos en `Marketing/novaweb-*`) se listan primero y solo se borran con OK.
- Excepciones permitidas: `AUDITORIA.md`, `PENDIENTES.md` y documentos históricos que Nico decida conservar (ej. `brief-cst.md`).

## Pasos
1. Buscar sin distinguir mayúsculas, excluyendo `node_modules`, `.next`, `.next-check`, `.git` y `package-lock.json`:
   `grep -rniE "nova|novaweb|estudionovaweb|estudio nova" .`
2. Clasificar: código · metadatos/SEO · `package.json` (`name`) · README · manifest · `src/app/icon.svg` · imágenes OG (`src/lib/og.tsx`) · `public/llms.txt` · textos legales · correos · comentarios · binarios.
3. Tabla antes/después → OK de Nico.
4. Reemplazar por grupo, un commit por grupo (ej. `chore: pasa metadatos a CST`).
5. Correos: si el correo nuevo aún no existe, `[PENDIENTE: correo de CST]` y anotarlo en `PENDIENTES.md`.
6. Revisar imágenes OG y favicon en el preview.
7. Repetir la búsqueda: debe dar **0** fuera de las excepciones.

## Checklist antes de dar por terminado
- [ ] Tabla antes/después aprobada.
- [ ] `package.json` `name` correcto.
- [ ] Favicon, OG, títulos y JSON-LD dicen CST.
- [ ] "Tecnológicas" con tilde en todas partes.
- [ ] Búsqueda final = 0 resultados (salvo excepciones).
- [ ] Historial de git intacto.
- [ ] `npm run build:check` ok.
