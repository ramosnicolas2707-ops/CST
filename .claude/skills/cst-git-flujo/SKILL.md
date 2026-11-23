---
name: cst-git-flujo
description: Úsala para cualquier cambio de código en el repo de CST: crear rama, hacer commits en español con formato convencional, abrir PR con preview de Vercel y, al lanzar, poner el tag v1.0-cst.
---

# Flujo de git · CST

## Objetivo
Que cada cambio quede en una rama, se pueda revisar en un preview y se pueda deshacer sin drama.

## Reglas
- **Nunca** se trabaja ni se hace push directo a `main`. Nunca `git push --force` a `main`. Nunca se reescribe historial publicado.
- Una rama por fase o tarea: `fase-1-dominio`, `fase-2-rebrand`, `fase-4-hero`, `fix/whatsapp-numero`.
- Commits pequeños (una idea por commit) en español con prefijo convencional:
  - `feat:` algo nuevo · `fix:` arreglo · `chore:` mantenimiento · `style:` solo estética
  - `docs:` documentación · `refactor:` mismo resultado, mejor código · `perf:` velocidad · `test:` pruebas
- Mensaje: `tipo: qué cambia, en presente` (ej. `feat: agrega botón flotante de WhatsApp`).
- Solo se agregan archivos por nombre (`git add ruta`), nunca `git add -A` a ciegas: así no se cuelan `.env`, videos o builds.
- Antes de cada commit: `git status` y `git diff --staged` para ver qué entra.
- Cambios sin commit que no son de la tarea actual no se tocan ni se incluyen.

## Pasos
1. `git switch main` → `git pull` → `git switch -c <rama>`.
2. Trabajar en commits pequeños.
3. `npm run build:check` y `npm run typecheck` antes de subir.
4. `git push -u origin <rama>`.
5. `gh pr create --base main --title "…" --body-file <archivo>` con la plantilla de abajo.
6. Esperar el comentario/estado de Vercel con la URL de preview (`gh pr checks`) y pasársela a Nico.
7. Merge **solo con el OK de Nico** (`gh pr merge --squash` o `--merge`, lo que él diga).
8. Al lanzar: `git tag -a v1.0-cst -m "Lanzamiento CST"` y `git push origin v1.0-cst`, con OK.

## Plantilla de PR
```
## Qué cambia
- …
## Por qué
…
## Preview
<URL de Vercel>
## Revisión
* build y typecheck ok
* skills revisadas: …
* sin datos inventados / pendientes anotados
```

## Checklist antes de dar por terminado
- [ ] Rama con nombre claro, no `main`.
- [ ] Commits en español con prefijo convencional.
- [ ] Nada sensible ni pesado en el diff.
- [ ] PR abierto con descripción, preview y checklist.
- [ ] Nada mergeado sin OK.
