---
name: cst-github-vercel
description: Úsala para operar GitHub y Vercel en el proyecto CST: renombrar el repo con gh, actualizar el remote, revisar la integración y variables de entorno de Vercel, descripción y topics del repo, y escribir el README.
---

# GitHub y Vercel · CST

## Objetivo
Que el repo y el proyecto de Vercel tengan nombres coherentes con CST y que el despliegue automático siga vivo.

## Reglas
- Renombrar repo o proyecto **solo con OK explícito** del nombre final (propuesta: `cst-web`).
- Nunca se imprimen valores de variables de entorno; solo nombres y en qué entornos existen.
- Nada se compra ni se cambia de plan en Vercel.

## Pasos
1. Estado: `gh auth status` y `gh repo view --json name,description,repositoryTopics,url`.
2. Renombrar (con OK): `gh repo rename cst-web` → `git remote set-url origin https://github.com/ramosnicolas2707-ops/cst-web.git` → `git remote -v`. GitHub deja redirección desde el nombre viejo, pero se actualiza igual.
3. Descripción y topics: `gh repo edit --description "Sitio web de CST — Centro de Soluciones Tecnológicas (Bogotá)" --add-topic nextjs --add-topic vercel --add-topic bogota`.
4. Vercel: sin CLI, darle a Nico la ruta del panel (proyecto `cst` → Settings → Git) para confirmar que el repo conectado es el renombrado. Con CLI: `npx vercel link` y `npx vercel env ls` (solo nombres).
5. Push de prueba en una rama → confirmar que aparece un deploy de preview (`gh pr checks` o panel de Vercel).
6. README nuevo: qué es, requisitos (Node LTS), cómo correrlo en Windows, scripts, estructura, cómo desplegar (push → preview, merge → producción) y dónde están los datos del negocio.

## Comandos para Nico (PowerShell)
```powershell
git clone https://github.com/ramosnicolas2707-ops/cst-web.git
cd cst-web
npm install
npm run dev
```

## Checklist antes de dar por terminado
- [ ] Nombre del repo aprobado y remote actualizado.
- [ ] Descripción y topics puestos.
- [ ] Vercel sigue conectado: el push de prueba generó deploy.
- [ ] Variables de entorno revisadas por entorno (solo nombres).
- [ ] README nuevo con pasos para Windows.
