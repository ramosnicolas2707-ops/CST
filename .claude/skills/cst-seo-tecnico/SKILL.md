---
name: cst-seo-tecnico
description: Úsala para el SEO técnico del sitio de CST: Metadata API con título y descripción únicos, canonical al dominio nuevo, sitemap y robots, imágenes OG con next/og, JSON-LD (Organization, LocalBusiness, FAQPage), lang es-CO, un H1 por página y noindex en /lab.
---

# SEO técnico · CST

## Objetivo
Que Google entienda quiénes somos, dónde estamos y qué hacemos, y que muestre bien cada página.

## Reglas
- **Metadata API** de Next.js (`generateMetadata` o `metadata`): título y descripción **únicos por página** (título ≤ 60 caracteres, descripción 140–160).
- **Canonical** absoluto al dominio principal (hoy sale de `site.url` en `src/data/site.ts`; tras la Fase 1, `centrodesolucionestecnologicas.com`).
- `sitemap.ts` y `robots.ts` generados desde los datos (ya existen; mantenerlos). `/lab` **fuera** del sitemap.
- Imágenes **OG** con `next/og` (1200×630) por página, con la marca nueva.
- **JSON-LD**: `Organization` (o `ProfessionalService`, que es un tipo de `LocalBusiness`) con dirección en Bogotá, teléfono/WhatsApp, horario y `sameAs` con redes reales; `FAQPage` donde haya FAQ; `BreadcrumbList` en páginas internas. Nunca `Review`/`AggregateRating` inventados.
- `<html lang="es-CO">` en español (y `en` en la versión en inglés, si se mantiene, con `hreflang`).
- URLs cortas en español, en minúsculas, con guiones.
- **Un solo H1 por página.** Jerarquía de encabezados sin saltos.
- `alt` descriptivo en imágenes informativas; `alt=""` en decorativas.
- Todo `/lab/*` con `robots: { index: false, follow: false }`.
- Ya existe `src/lib/seo.ts` con helpers (`meta()`, JSON-LD): reutilizarlos.

## Pasos
1. Revisar metadata de cada ruta (título, descripción, canonical, OG).
2. Validar JSON-LD con la Prueba de resultados enriquecidos de Google o validator.schema.org.
3. Revisar `sitemap.xml` y `robots.txt` en el preview.
4. Contar H1 por página (`document.querySelectorAll('h1').length === 1`).
5. Lighthouse SEO ≥ 95.

## Checklist antes de dar por terminado
- [ ] Título y descripción únicos por página.
- [ ] Canonical al dominio correcto.
- [ ] Sitemap sin `/lab`; robots apunta al sitemap.
- [ ] OG por página con la marca actual.
- [ ] JSON-LD válido, sin datos inventados.
- [ ] `lang` correcto y un H1 por página.
- [ ] `/lab` con `noindex`.
