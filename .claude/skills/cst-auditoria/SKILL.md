---
name: cst-auditoria
description: Úsala al iniciar el proyecto o antes de cualquier cambio grande (migración, rebrand, rediseño) para inventariar el repo de CST en modo solo lectura y dejar el resultado en AUDITORIA.md con semáforo y riesgos.
---

# Auditoría · CST

## Objetivo
Saber exactamente qué hay antes de tocar nada, y dejarlo por escrito para comparar después.

## Reglas
- **Solo lectura.** No se edita, borra ni instala nada en el repo. Las herramientas temporales (Lighthouse, scripts) se corren desde el scratchpad o con `npx -y`.
- Nunca se imprimen valores de variables de entorno: solo sus nombres.
- Todo dato va con su fuente (archivo:línea, comando o URL consultada) y fecha.
- Si algo no se pudo revisar (falta una CLI, un permiso), se dice explícitamente; no se supone.

## Pasos
1. `git status`, `git branch -a`, `git remote -v`, últimos commits. Anotar cambios sin commit y ramas extra.
2. Stack: leer versiones reales en `node_modules/<pkg>/package.json` (no solo los rangos de `package.json`). Router (app/pages), Tailwind (versión y dónde están los tokens), fuentes.
3. Estructura: árbol de `src/`, `public/`, `scripts/` y carpetas raras de la raíz.
4. Rutas: listar cada `page.tsx`, rutas dinámicas con sus slugs, `robots`, `sitemap`, OG, redirects de `next.config`.
5. Componentes: cuáles son `"use client"` y por qué.
6. Dependencias: usadas, sobrantes (buscar imports), faltantes para el plan.
7. Assets: peso (`du -h`), formato, si están en git.
8. Variables de entorno: `grep -rnoE "process\.env\.[A-Z_]+"`.
9. Marca vieja: `grep -rniE "nova|novaweb|estudionovaweb|estudio nova"` excluyendo `node_modules`, `.next`, `.git`, lockfile. Separar falsos positivos.
10. Config: `next.config`, `vercel.json`, headers reales de producción con `curl -sI`.
11. Dominios: `curl -sI` (HTTP/HTTPS, www), `nslookup` (A, CNAME, MX), RDAP (`https://rdap.verisign.com/com/v1/domain/<dominio>`) para saber si está registrado y cuándo vence.
12. SEO: metadata, canonical, hreflang, JSON-LD (`@type`), `lang`, robots.
13. Lighthouse móvil: `npx -y lighthouse <url> --form-factor=mobile --output=json` y resumir puntajes, LCP, CLS, TBT, peso y KB de JS. Aclarar que el lab local es más pesimista que PageSpeed.

## Salida: `AUDITORIA.md`
Secciones numeradas con lo anterior + **semáforo** (🟢🟡🔴 por área, con el porqué) + **5 riesgos principales** ordenados por gravedad, cada uno con qué hacer.

## Checklist antes de dar por terminado
- [ ] No hay cambios en archivos del repo salvo `AUDITORIA.md`.
- [ ] Versiones sacadas de `node_modules`, no supuestas.
- [ ] Ningún valor secreto en el documento.
- [ ] Búsqueda de marca vieja con tabla archivo:línea.
- [ ] Estado de cada dominio comprobado hoy (registro, DNS, MX, HTTPS).
- [ ] Lighthouse con puntajes y métricas.
- [ ] Semáforo y 5 riesgos al final.
