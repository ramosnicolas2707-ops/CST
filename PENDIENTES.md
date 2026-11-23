# Pendientes · CST

Todo dato o decisión que falta. Cada `[PENDIENTE: …]` del código debe estar aquí.

## Decisiones de Nico (bloquean fases)

| # | Pendiente | Bloquea | Desde |
|---|---|---|---|
| 1 | Comprar el dominio nuevo. **Nico decidió esperar** (23-nov-2026): el sitio sigue en `estudionovaweb.com` y la Fase 1 queda en pausa | Fase 1 | 23-nov-2026 |
| 3 | ¿Se conserva la versión en inglés (`/en`)? | Fase 4 | 23-nov-2026 |
| 4 | Logo: Nico propuso **una sola línea continua que une C → S → T** (la C conecta abajo con la S, la S conecta arriba con la T), pensada para animarse dibujándose. Reemplaza al logo «Señal». Definir si la Fase 3B explora solo variaciones de esta idea | Fase 3 | 23-nov-2026 |
| 7 | Borrar el logo «Señal» (`Logo.tsx`, `icon.svg`, `Marketing/cst/logo/`): se hace al reemplazarlo por el logo nuevo, no antes, porque el sitio lo usa | Fase 3C | 23-nov-2026 |
| 8 | Favicon: a 16 px ninguna variación se lee entera. Hará falta una versión compacta (pista: 03 Gruesa o 09 Monograma) | Fase 3C | 23-nov-2026 |
| 5 | Servicios definitivos: hoy el sitio tiene "Rediseño" y no tiene "Automatizaciones y CRM" ni "Software a medida" | Fase 4 | 23-nov-2026 |
| 6 | Nombre del repo renombrado (propuesta `cst-web`) | Fase 2 | 23-nov-2026 |

## Datos que me tienes que dar

- [ ] Videos originales de clientes con autorización escrita (Eclipse Perfumería, Sexta Rueda, resto)
- [ ] Lista de clientes y qué se hizo para cada uno
- [ ] Fotos tuyas y del equipo
- [ ] Link del perfil de Google Business
- [ ] Tiempo de respuesta real por WhatsApp
- [ ] Rangos de precios para la FAQ
- [ ] Correo oficial de CST (el de NovaWeb se quitó del sitio; mientras tanto el contacto es solo WhatsApp). Va en `src/data/site.ts` → `contact.email`
- [ ] NIT o cédula del responsable de datos (política de datos personales)
- [ ] Confirmar: ¿el dominio y el código son del cliente? (sección "Por qué CST")

## Recordatorios

- `estudionovaweb.com` vence el **21-sep-2027**: mantenerlo renovado y redirigiendo mínimo 1 año después de la migración.
- `estudionovaweb.com` tiene **reenvío de correo** (MX de Namecheap): no tocar esos registros.
- Textos legales: `[REVISAR CON ABOGADO]` antes de publicar.
