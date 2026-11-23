---
name: cst-legal-colombia
description: Úsala para los textos legales del sitio de CST según Colombia: Política de Tratamiento de Datos Personales (Ley 1581 de 2012) con autorización en el formulario, Términos y condiciones, aviso de cookies si aplica, y la plantilla de autorización de uso de video y marca de clientes en docs/. Todo marcado para revisión de abogado.
---

# Legal Colombia · CST

## Objetivo
Tener la base legal mínima para recoger datos y mostrar clientes, sabiendo que un abogado debe revisarla.

## Regla principal
**Esto no es asesoría legal.** Todo documento lleva al inicio `[REVISAR CON ABOGADO]` y se anota en `PENDIENTES.md`.

## Documentos
1. **Política de Tratamiento de Datos Personales** (Ley 1581 de 2012 y Decreto 1377 de 2013, compilado en el Decreto 1074 de 2015):
   - Responsable: CST — Centro de Soluciones Tecnológicas, `[PENDIENTE: NIT o cédula]`, Bogotá, correo `[PENDIENTE]`, WhatsApp.
   - Qué datos se recogen (nombre, negocio, WhatsApp, mensaje), finalidad (responder la solicitud y dar seguimiento comercial), tiempo de conservación.
   - Derechos del titular (conocer, actualizar, rectificar, suprimir, revocar la autorización, quejarse ante la SIC) y cómo ejercerlos (canal y plazos legales: consultas 10 días hábiles, reclamos 15 días hábiles).
   - Fecha de vigencia.
   - Página: `/legal/datos`.
2. **Autorización en el formulario:** checkbox **sin marcar por defecto**, obligatorio, con texto corto y enlace a la política. Se guarda la fecha de la autorización junto con el envío.
3. **Términos y condiciones** (`/legal/terminos`): uso del sitio, propiedad intelectual, alcance de servicios y precios publicados, limitación de responsabilidad, ley aplicable (Colombia).
4. **Aviso de cookies:** solo si se usan cookies no esenciales (ej. GA4). Si solo hay Vercel Analytics, no hace falta banner; documentar la decisión.
5. **Plantilla de autorización de uso de imagen, video y marca del cliente** en `docs/autorizacion-uso-imagen-cliente.md`: quién autoriza, qué material, para qué medios (sitio, redes, presentaciones), duración, gratuidad, posibilidad de revocar, firma y fecha.

## Pasos
1. Pedir a Nico los datos faltantes (NIT/cédula, correo oficial) y anotarlos como pendientes.
2. Redactar en lenguaje claro (ver `cst-voz-y-copy`, pero sin humor).
3. Enlazar la política desde el formulario y el footer.
4. Marcar todo con `[REVISAR CON ABOGADO]`.

## Checklist antes de dar por terminado
- [ ] Política de datos con responsable, finalidad, derechos y canal.
- [ ] Checkbox de autorización sin marcar por defecto y obligatorio.
- [ ] Términos publicados.
- [ ] Decisión sobre cookies documentada.
- [ ] Plantilla de autorización de clientes en `docs/`.
- [ ] `[REVISAR CON ABOGADO]` en cada documento y en `PENDIENTES.md`.
