"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { conceptos, suaveCompacto } from "../logos/conceptos";
import LogoTrazo from "../logos/LogoTrazo";
import { paletas, contraste, type Paleta } from "./paletas";
import { site, whatsapp } from "@/data/site";

const suave = conceptos.find((c) => c.id === "suave")!;

/** Las dos parejas tipográficas. Las variables las pone page.tsx. */
const parejas = [
  {
    id: "bricolage",
    nombre: "1 · Bricolage Grotesque + Instrument Sans",
    nota: "Recomendada. Bricolage tiene curvas cálidas y un punto travieso que combina con las esquinas suaves del logo. Instrument, la del texto, ya está en el sitio.",
    titulo: "var(--fuente-bricolage)",
  },
  {
    id: "unbounded",
    nombre: "2 · Unbounded + Instrument Sans",
    nota: "La actual. Ancha y geométrica: se ve más técnica y ocupa mucho espacio en el celular.",
    titulo: "var(--fuente-titulo)",
  },
] as const;

/** Escala tipográfica fluida: crece con la pantalla sin saltos. */
const escala = [
  { token: "--text-hero", valor: "clamp(2.75rem, 1.6rem + 5.5vw, 6.5rem)", ejemplo: "¿Qué resolvemos hoy?" },
  { token: "--text-h2", valor: "clamp(2rem, 1.4rem + 2.6vw, 3.5rem)", ejemplo: "Tu web no vende. Eso tiene arreglo." },
  { token: "--text-h3", valor: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)", ejemplo: "Páginas web y tiendas online" },
  { token: "--text-cuerpo", valor: "1.0625rem", ejemplo: "Nos cuentas qué te frena y nosotros lo resolvemos." },
  { token: "--text-pequeno", valor: "0.875rem", ejemplo: "Bogotá, Colombia · lunes a viernes" },
];

const espacios = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];
const radios = [
  { token: "--radio-s", px: 8 },
  { token: "--radio-m", px: 16 },
  { token: "--radio-l", px: 28 },
  { token: "--radio-pildora", px: 999 },
];

function Seccion({ titulo, children, id }: { titulo: string; children: ReactNode; id: string }) {
  return (
    <section aria-labelledby={id} className="border-t border-[var(--p-linea)] py-14 sm:py-20">
      <h2 id={id} className="mb-8 text-xs font-bold uppercase tracking-[0.14em] text-[var(--p-gris)]">
        {titulo}
      </h2>
      {children}
    </section>
  );
}

function Favicon({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center bg-[var(--p-tinta)] text-[var(--p-fondo)]"
      style={{ width: size, height: size, borderRadius: size * 0.22 }}
    >
      <LogoTrazo c={suaveCompacto} unaTinta style={{ width: "80%", height: "80%" }} />
    </span>
  );
}

function tokensCss(p: Paleta) {
  const c = p.colores;
  return `@theme {
  /* Paleta ${p.nombre} */
  --color-fondo: ${c.fondo};
  --color-papel: ${c.papel};
  --color-tinta: ${c.tinta};
  --color-gris: ${c.gris};
  --color-acento: ${c.acento};
  --color-acento-texto: ${c.acentoTexto};
  --color-sobre-acento: ${c.sobreAcento};
  --color-apoyo: ${c.apoyo};

  /* Tipografía */
${escala.map((e) => `  ${e.token}: ${e.valor};`).join("\n")}

  /* Espaciado (escala 4/8) */
${espacios.map((n) => `  --espacio-${n}: ${n / 16}rem;`).join("\n")}

  /* Radios: los mismos de las esquinas del logo */
${radios.map((r) => `  ${r.token}: ${r.px}px;`).join("\n")}

  /* Movimiento */
  --ease-salida: cubic-bezier(0.16, 1, 0.3, 1); /* expo.out */
  --ease-ida-vuelta: cubic-bezier(0.65, 0, 0.35, 1); /* power3.inOut */
  --dur-rapida: 0.4s;
  --dur-media: 0.8s;
  --dur-lenta: 1.2s;
}`;
}

export default function Tablero() {
  const [pid, setPid] = useState<Paleta["id"]>("a");
  const [fid, setFid] = useState<(typeof parejas)[number]["id"]>("bricolage");
  const [vuelta, setVuelta] = useState(0);

  const p = paletas.find((x) => x.id === pid)!;
  const pareja = parejas.find((x) => x.id === fid)!;
  const c = p.colores;

  const vars = {
    "--p-fondo": c.fondo,
    "--p-papel": c.papel,
    "--p-tinta": c.tinta,
    "--p-gris": c.gris,
    "--p-acento": c.acento,
    "--p-acento-texto": c.acentoTexto,
    "--p-sobre-acento": c.sobreAcento,
    "--p-apoyo": c.apoyo,
    "--p-linea": "rgb(28 26 23 / 0.12)",
    "--p-titulo": pareja.titulo,
  } as CSSProperties;

  const boton = "inline-flex min-h-11 items-center rounded-full px-6 font-bold transition-transform duration-200 active:scale-[0.97]";

  return (
    <div style={vars} className="bg-[var(--p-fondo)] text-[var(--p-tinta)]">
      {/* Selectores */}
      <div className="sticky top-0 z-10 border-b border-[var(--p-linea)] bg-[var(--p-fondo)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[var(--ancho)] flex-wrap items-center gap-x-6 gap-y-3 px-5 py-3 text-sm">
          <fieldset className="flex flex-wrap items-center gap-2">
            <legend className="sr-only">Paleta</legend>
            <span className="font-bold">Paleta</span>
            {paletas.map((x) => (
              <button
                key={x.id}
                type="button"
                aria-pressed={pid === x.id}
                onClick={() => setPid(x.id)}
                className="flex min-h-11 items-center gap-2 rounded-full border border-[var(--p-linea)] px-4 aria-pressed:border-[var(--p-tinta)] aria-pressed:font-bold"
              >
                <span className="size-3 rounded-full" style={{ background: x.colores.acento }} aria-hidden="true" />
                {x.id.toUpperCase()}
              </button>
            ))}
          </fieldset>
          <fieldset className="flex flex-wrap items-center gap-2">
            <legend className="sr-only">Tipografía</legend>
            <span className="font-bold">Letra</span>
            {parejas.map((x, i) => (
              <button
                key={x.id}
                type="button"
                aria-pressed={fid === x.id}
                onClick={() => setFid(x.id)}
                className="min-h-11 rounded-full border border-[var(--p-linea)] px-4 aria-pressed:border-[var(--p-tinta)] aria-pressed:font-bold"
              >
                {i + 1}
              </button>
            ))}
          </fieldset>
        </div>
      </div>

      <div className="mx-auto max-w-[var(--ancho)] px-5">
        {/* Muestra principal: así se vería el sitio */}
        <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-[var(--p-acento-texto)]">Así se sentiría el sitio</p>
            <h1
              className="mt-4 leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--p-titulo)", fontSize: "clamp(2.75rem, 1.6rem + 5.5vw, 6.5rem)", fontWeight: 700 }}
            >
              ¿Qué resolvemos hoy?
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--p-gris)]">
              Tu web no vende, se te pierden clientes en WhatsApp o haces a mano
              lo que debería hacerse solo. Cuéntanos y lo resolvemos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsapp("Hola CST, vi su web y quiero contarles un problema de mi negocio.")}
                target="_blank"
                rel="noopener noreferrer"
                className={`${boton} bg-[var(--p-acento)] text-[var(--p-sobre-acento)]`}
              >
                Cuéntanos tu problema
              </a>
              <span className={`${boton} border-2 border-[var(--p-tinta)]`}>Ver casos</span>
            </div>
          </div>
          <div className="rounded-[28px] bg-[var(--p-tinta)] p-8 text-[var(--p-fondo)]">
            <p className="text-sm text-[var(--p-apoyo)]">Bloque oscuro</p>
            <p className="mt-3 text-2xl leading-tight" style={{ fontFamily: "var(--p-titulo)", fontWeight: 600 }}>
              Pago único. Sin mensualidades.
            </p>
            <p className="mt-3 text-sm opacity-80">[PENDIENTE: confirmar a qué servicios aplica]</p>
          </div>
        </div>

        <Seccion titulo="Logo · 10 Suave" id="t-logo">
          <div className="grid gap-6 lg:grid-cols-2">
            <button
              type="button"
              onClick={() => setVuelta((v) => v + 1)}
              className="flex aspect-[16/9] items-center justify-center rounded-[28px] bg-[var(--p-papel)] p-10"
              aria-label="Repetir la animación del logo"
            >
              <LogoTrazo key={vuelta} c={suave} animar style={{ width: "100%", height: "100%" }} />
            </button>
            <div className="flex aspect-[16/9] items-center justify-center rounded-[28px] bg-[var(--p-tinta)] p-10 text-[var(--p-fondo)]">
              <LogoTrazo c={suave} style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
          <p className="mt-3 text-sm text-[var(--p-gris)]">Toca el logo claro para ver la animación otra vez.</p>

          <h3 className="mt-12 mb-4 font-bold [font-family:var(--p-titulo)]">Con el nombre completo</h3>
          <div className="flex flex-wrap items-center gap-5 rounded-[28px] border border-[var(--p-linea)] p-8">
            <LogoTrazo c={suave} style={{ height: 56 }} />
            <span className="hidden h-12 w-px bg-[var(--p-linea)] sm:block" aria-hidden="true" />
            <span className="text-[15px] font-semibold leading-tight">
              Centro de Soluciones
              <br />
              Tecnológicas
            </span>
          </div>

          <h3 className="mt-12 mb-4 font-bold [font-family:var(--p-titulo)]">Favicon y foto de perfil (versión compacta)</h3>
          <div className="flex flex-wrap items-end gap-6">
            <Favicon size={16} />
            <Favicon size={32} />
            <Favicon size={64} />
            <Favicon size={128} />
            <span className="inline-flex size-32 items-center justify-center rounded-full bg-[var(--p-tinta)] text-[var(--p-fondo)]">
              <LogoTrazo c={suave} style={{ width: "66%" }} />
            </span>
          </div>
        </Seccion>

        <Seccion titulo={`Paleta ${p.nombre}`} id="t-paleta">
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed">{p.idea}</p>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {p.muestras.map((m) => (
              <li key={m.hex + m.nombre} className="overflow-hidden rounded-[16px] border border-[var(--p-linea)]">
                <div className="h-24" style={{ background: m.hex }} />
                <div className="p-3 text-sm">
                  <p className="font-bold">{m.nombre}</p>
                  <p className="font-mono text-xs">{m.hex}</p>
                  <p className="mt-1 text-[var(--p-gris)]">{m.uso}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 mb-4 font-bold [font-family:var(--p-titulo)]">Contraste calculado (WCAG 2.2 AA)</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--p-linea)]">
                  <th scope="col" className="py-2 pr-4">Muestra</th>
                  <th scope="col" className="py-2 pr-4">Uso</th>
                  <th scope="col" className="py-2 pr-4">Contraste</th>
                  <th scope="col" className="py-2">Mínimo · Resultado</th>
                </tr>
              </thead>
              <tbody>
                {p.pares.map((par) => {
                  const r = contraste(par.frente, par.fondo);
                  const ok = r >= par.minimo;
                  return (
                    <tr key={par.uso} className="border-b border-[var(--p-linea)]">
                      <td className="py-2 pr-4">
                        <span className="inline-block rounded-md px-3 py-1 font-bold" style={{ color: par.frente, background: par.fondo }}>
                          Aa
                        </span>
                      </td>
                      <td className="py-2 pr-4">{par.uso}</td>
                      <td className="py-2 pr-4 font-mono">{r.toFixed(2)}:1</td>
                      <td className="py-2 font-bold">
                        {par.minimo}:1 · {ok ? "✓ Pasa" : "✗ No pasa"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Seccion>

        <Seccion titulo={`Tipografía · ${pareja.nombre}`} id="t-tipo">
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed">{pareja.nota}</p>
          <div className="mt-10 space-y-8">
            {escala.map((e, i) => (
              <div key={e.token} className="grid gap-2 border-b border-[var(--p-linea)] pb-6 md:grid-cols-[12rem_1fr]">
                <p className="font-mono text-xs text-[var(--p-gris)]">
                  {e.token}
                  <br />
                  {e.valor}
                </p>
                <p
                  className="leading-tight"
                  style={{
                    fontSize: e.valor,
                    fontFamily: i < 3 ? "var(--p-titulo)" : undefined,
                    fontWeight: i < 3 ? 700 : 400,
                  }}
                >
                  {e.ejemplo}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--p-gris)]">
            Prueba de caracteres: ÁÉÍÓÚ áéíóú Ññ ¿? ¡! 0123456789 $ COP
          </p>
        </Seccion>

        <Seccion titulo="Espacio y esquinas" id="t-espacio">
          <div className="flex flex-wrap items-end gap-3">
            {espacios.map((n) => (
              <div key={n} className="text-center text-xs">
                <div className="bg-[var(--p-acento)]" style={{ width: n, height: n }} />
                <p className="mt-2 font-mono">{n}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            {radios.map((r) => (
              <div key={r.token} className="text-center text-xs">
                <div className="h-20 w-28 border-2 border-[var(--p-tinta)]" style={{ borderRadius: Math.min(r.px, 40) }} />
                <p className="mt-2 font-mono">{r.token}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-[var(--p-gris)]">
            Sin sombras: las secciones se separan con aire y cambio de fondo. El
            radio grande (28 px) es el mismo de las esquinas del logo.
          </p>
        </Seccion>

        <Seccion titulo="Piezas" id="t-piezas">
          <div className="flex flex-wrap gap-3">
            <span className={`${boton} bg-[var(--p-acento)] text-[var(--p-sobre-acento)]`}>Primario</span>
            <span className={`${boton} border-2 border-[var(--p-tinta)]`}>Secundario</span>
            <span className={`${boton} bg-[var(--p-tinta)] text-[var(--p-fondo)]`}>
              WhatsApp · {site.contact.whatsappDisplay}
            </span>
            <a href="#t-piezas" className="inline-flex min-h-11 items-center font-bold text-[var(--p-acento-texto)] underline decoration-2 underline-offset-4">
              Enlace de texto
            </a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <article className="rounded-[28px] bg-[var(--p-papel)] p-8">
              <p className="text-sm font-bold text-[var(--p-acento-texto)]">Caso · [PENDIENTE: cliente]</p>
              <h3 className="mt-3 text-2xl leading-tight" style={{ fontFamily: "var(--p-titulo)", fontWeight: 700 }}>
                El problema, lo que hicimos y lo que cambió.
              </h3>
              <p className="mt-3 text-[var(--p-gris)]">Ejemplo de tarjeta de caso. El texto real sale de cada cliente.</p>
            </article>
            <article className="rounded-[28px] border-2 border-[var(--p-tinta)] p-8">
              <p className="text-sm font-bold">Con el apoyo</p>
              <p className="mt-3 inline-block rounded-full px-4 py-1 text-sm font-bold text-[var(--p-tinta)]" style={{ background: c.apoyo }}>
                Etiqueta
              </p>
            </article>
          </div>
        </Seccion>

        <Seccion titulo="Tokens (para copiar a globals.css cuando elijas)" id="t-tokens">
          <pre className="overflow-x-auto rounded-[16px] bg-[var(--p-tinta)] p-6 text-xs leading-relaxed text-[var(--p-fondo)]">
            <code>{tokensCss(p)}</code>
          </pre>
        </Seccion>
      </div>
    </div>
  );
}
