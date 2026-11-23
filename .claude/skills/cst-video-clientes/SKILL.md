---
name: cst-video-clientes
description: Úsala para procesar y mostrar videos de clientes de CST: convertir originales con ffmpeg (loop corto, versión completa, MP4/WebM, poster, subtítulos .vtt), reproducirlos solo en pantalla, proponer hosting con costos verificados y llevar la ficha de autorización de cada video.
---

# Video de clientes · CST

## Objetivo
Mostrar a clientes reales en video, livianos y con permiso, como la prueba de confianza más fuerte del sitio.

## Reglas
- Originales en `contenido/videos-originales/` (carpeta en `.gitignore`). **Nunca videos pesados dentro del repo.**
- **Solo se publica un video con autorización escrita ✅** del cliente (plantilla en `docs/`, ver `cst-legal-colombia`).
- Hosting: proponer 2–3 opciones (ej. Vercel Blob, Cloudinary, Mux) con **costos actuales verificados en su web oficial ese día** y esperar la decisión de Nico. No crear cuentas ni aceptar planes.
- Reproducción de loops: `muted playsinline loop preload="none"` + `poster`. Play al entrar en pantalla (IntersectionObserver), pausa al salir. Sonido **solo al tocar** (cambia a la versión completa o quita `muted`).
- Controles accesibles y subtítulos en la versión con audio.

## Salidas por video (ffmpeg)
| Archivo | Especificación |
|---|---|
| Loop de tarjeta | 6–10 s, sin audio, 9:16, 720 px de ancho, **máx. ~2 MB** |
| Versión completa | Con audio, H.264 + AAC, `-movflags +faststart` |
| WebM (opcional) | VP9 o AV1 para navegadores que lo soporten |
| Poster | AVIF + WebP del mejor frame |
| Subtítulos | `.vtt` en español, revisados a mano |

Comandos de referencia:
```
ffmpeg -ss 00:00:05 -t 8 -i in.mp4 -an -vf "scale=720:-2,fps=30" -c:v libx264 -crf 28 -preset slow -movflags +faststart loop.mp4
ffmpeg -i in.mp4 -vf "scale=1080:-2" -c:v libx264 -crf 23 -c:a aac -b:a 128k -movflags +faststart completo.mp4
ffmpeg -ss 00:00:03 -i in.mp4 -frames:v 1 -vf "scale=720:-2" poster.webp
```

## Ficha por video (en `contenido/videos.md` o `PENDIENTES.md`)
| Negocio | Rubro | Qué hicimos | Autorización ✅/❌ | Archivo original | URL publicada |

## Checklist antes de dar por terminado
- [ ] Autorización ✅ por cada video publicado.
- [ ] Originales fuera de git (`.gitignore` revisado).
- [ ] Loop ≤ ~2 MB, poster y `.vtt` por video.
- [ ] `preload="none"`, play solo en pantalla, sonido solo al tocar.
- [ ] Hosting elegido por Nico con costos verificados.
- [ ] Ficha completa por video.
