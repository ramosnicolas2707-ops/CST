---
name: cst-arquitectura-ux
description: Úsala para definir el mapa del sitio de CST, el orden de las secciones del inicio y la navegación, contados como historia (problema, empatía, solución, prueba, acción), y para construir el wireframe de baja fidelidad en /lab/wireframe.
---

# Arquitectura UX · CST

## Objetivo
Que cada pantalla tenga una sola idea y que el recorrido lleve al visitante a escribir por WhatsApp.

## Reglas
- Base de estructura: 365companyonline.com (hero con WhatsApp, pasos, portafolio, antes/después, testimonios en video, FAQ, reseñas, CTA final). Se toma la **estructura**, no la estética ni el contenido.
- Historia: **problema → empatía → solución → prueba → acción**.
- **Una idea por pantalla.**
- Navegación mínima: logo, 3–4 links y botón de WhatsApp. En móvil, menú cómodo para el pulgar.
- Páginas: Inicio, Servicios (y detalle por servicio), Casos, Nosotros, Contacto, Legal (datos personales, términos).
- URLs cortas en español (`/servicios`, `/casos`, `/nosotros`, `/contacto`, `/legal/datos`). Decidir con Nico qué pasa con `/en` (hoy el sitio es bilingüe).
- Wireframe **antes** de diseñar: cajas grises, texto real o `[PENDIENTE]`, sin colores ni animación.

## Orden del inicio (referencia de la Fase 4)
01 Hero · 02 Manifiesto · 03 El problema · 04 Servicios · 05 Clientes en video · 06 Casos · 07 Proceso · 08 Por qué CST · 09 Reseñas · 10 FAQ · 11 CTA final · 12 Footer.

## Pasos
1. Mapa del sitio en tabla: página, URL, objetivo, CTA principal.
2. Para cada sección del inicio: idea única, contenido, CTA (si tiene) y en qué parte de la historia está.
3. Wireframe en `/lab/wireframe` (`noindex`), responsive, navegable en celular.
4. Revisar que haya un CTA de WhatsApp visible en cada tramo de ~2 pantallas.

## Checklist antes de dar por terminado
- [ ] Mapa del sitio con URLs cortas en español.
- [ ] Cada sección tiene una sola idea escrita en una frase.
- [ ] El orden sigue problema → empatía → solución → prueba → acción.
- [ ] Navegación de máximo 4 links + WhatsApp.
- [ ] Wireframe en `/lab/wireframe` con `noindex` y preview enviado.
- [ ] Decisión sobre `/en` tomada con Nico.
