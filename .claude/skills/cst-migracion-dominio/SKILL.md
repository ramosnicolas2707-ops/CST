---
name: cst-migracion-dominio
description: Úsala para cambiar o configurar dominios del sitio de CST (centrodesolucionestecnologicas.com, estudionovaweb.com): verificar compra, DNS y correo, agregar dominio en Vercel, redirecciones 301/308 con ruta conservada, URL del sitio, canonical/sitemap y cambio de dirección en Search Console.
---

# Migración de dominio · CST

## Objetivo
Pasar el sitio a `centrodesolucionestecnologicas.com` sin perder posiciones en Google, correo ni enlaces viejos.

## Reglas
- **Nunca** se compra, renueva ni acepta términos. Nunca se cambia un DNS sin mostrarle a Nico el cambio exacto y recibir su OK.
- **Nunca** se escriben IPs o CNAME de memoria: se usan los valores que muestre Vercel en ese momento.
- Si hay registros **MX** (correo), se avisa antes y se conservan intactos. `estudionovaweb.com` tiene reenvío de correo de Namecheap.
- Dominio principal: **sin `www`** (apex). `www` redirige al apex.
- El dominio viejo se mantiene renovado y redirigiendo **mínimo 1 año** (vence el 21-sep-2027; anotarlo en `PENDIENTES.md`).

## Pasos
1. **¿Está comprado?** RDAP: `curl -s -o /dev/null -w "%{http_code}" https://rdap.verisign.com/com/v1/domain/centrodesolucionestecnologicas.com`. `404` = no registrado → **detenerse** y decírselo a Nico. Si existe: confirmar con él que está a su nombre y en qué proveedor.
2. **DNS actuales** de ambos dominios: `nslookup -type=A`, `-type=CNAME`, `-type=MX`, `-type=TXT`. Tabla de lo encontrado. MX y TXT (SPF, verificaciones de Google) = "no tocar".
3. **Vercel → proyecto `cst` → Settings → Domains**: agregar `centrodesolucionestecnologicas.com` y `www.centrodesolucionestecnologicas.com`. Apex como principal; `www` → redirect 308 al apex.
4. Copiar los registros que muestre Vercel (A del apex y CNAME de `www`, o nameservers) y darle a Nico el paso a paso con la ruta de menú de su proveedor.
5. **Dominio viejo**: en Vercel, editar `estudionovaweb.com` → "Redirect to" `centrodesolucionestecnologicas.com` (308 permanente; Vercel conserva la ruta). Agregar también `www.estudionovaweb.com` con el mismo redirect (hoy no tiene DNS: necesita su CNAME).
6. **URL del sitio en el código**: hoy vive en `src/data/site.ts` (`url`, `domain`). Cambiarla ahí, o migrarla a `NEXT_PUBLIC_SITE_URL` en Production/Preview/Development si se decide. Eso alimenta canonical, `metadataBase`, sitemap, robots, OG, JSON-LD y `public/llms.txt`.
7. Deploy en preview → revisar → con OK, producción.
8. **Search Console**: agregar propiedad de dominio nuevo (verificación por TXT), enviar `sitemap.xml` y, en la propiedad vieja, **Configuración → Cambio de dirección** hacia la nueva.

## Verificación con `curl -I`
| Prueba | Esperado |
|---|---|
| `curl -I https://centrodesolucionestecnologicas.com/es` | `200` |
| `curl -I http://centrodesolucionestecnologicas.com` | `308` → `https://…` |
| `curl -I https://www.centrodesolucionestecnologicas.com/es` | `308` → apex `/es` |
| `curl -I https://estudionovaweb.com/es/servicios/paginas-web` | `308` → dominio nuevo, **misma ruta** |
| `curl -I https://www.estudionovaweb.com/es` | `308` → dominio nuevo |
| `curl -sIL <url vieja>` | Máximo 2 saltos, sin bucles |

## Checklist antes de dar por terminado
- [ ] Dominio comprado y confirmado por Nico (proveedor y titular).
- [ ] MX y TXT existentes intactos; correo probado.
- [ ] HTTPS válido en apex y `www`.
- [ ] `www` → apex con 308.
- [ ] Rutas viejas redirigen a la misma ruta nueva.
- [ ] Sin cadenas de más de 2 saltos.
- [ ] Canonical, sitemap, robots, OG y JSON-LD con el dominio nuevo.
- [ ] Lista para Nico: proveedor de dominio + Search Console (cambio de dirección).
- [ ] Vencimiento de `estudionovaweb.com` anotado en `PENDIENTES.md`.
