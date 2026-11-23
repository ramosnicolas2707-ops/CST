"use client";

import { useState } from "react";
import { conceptos, type Concepto } from "./conceptos";
import LogoTrazo from "./LogoTrazo";
import { Pestana, PerfilInstagram, Tarjeta, Camiseta, Fachada } from "./Maquetas";

const MAX_COMPARAR = 3;

export default function Galeria() {
  const [oscuro, setOscuro] = useState(false);
  const [elegidos, setElegidos] = useState<string[]>(["geometrica", "gruesa", "punto"]);
  /** Cambiar la `key` vuelve a montar el SVG y así repite la animación. */
  const [vueltas, setVueltas] = useState<Record<string, number>>({});

  const repetir = (id: string) =>
    setVueltas((v) => ({ ...v, [id]: (v[id] ?? 0) + 1 }));

  const alternar = (id: string) =>
    setElegidos((e) =>
      e.includes(id)
        ? e.filter((x) => x !== id)
        : e.length < MAX_COMPARAR
          ? [...e, id]
          : [...e.slice(1), id],
    );

  const fondo = oscuro ? "bg-tinta text-blanco" : "bg-blanco text-tinta";
  const comparados = elegidos
    .map((id) => conceptos.find((c) => c.id === id))
    .filter((c): c is Concepto => Boolean(c));

  return (
    <>
      <div className="sticky top-0 z-10 border-b border-filete bg-blanco/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[var(--ancho)] flex-wrap items-center gap-3 px-5 py-3 text-sm">
          <span className="font-bold">Fondo</span>
          <button
            type="button"
            aria-pressed={!oscuro}
            onClick={() => setOscuro(false)}
            className="min-h-11 rounded-full border border-filete-fuerte px-4 aria-pressed:bg-tinta aria-pressed:text-blanco"
          >
            Claro
          </button>
          <button
            type="button"
            aria-pressed={oscuro}
            onClick={() => setOscuro(true)}
            className="min-h-11 rounded-full border border-filete-fuerte px-4 aria-pressed:bg-tinta aria-pressed:text-blanco"
          >
            Oscuro
          </button>
          <a href="#comparar" className="ml-auto min-h-11 content-center font-bold underline underline-offset-4">
            Comparar ({elegidos.length})
          </a>
        </div>
      </div>

      <ol className="mx-auto grid max-w-[var(--ancho)] gap-px bg-filete px-0 sm:grid-cols-2">
        {conceptos.map((c) => {
          const enComparador = elegidos.includes(c.id);
          return (
            <li key={c.id} className="flex flex-col bg-blanco">
              <div className={`flex aspect-[16/9] items-center justify-center p-8 sm:p-12 ${fondo}`}>
                <LogoTrazo
                  key={vueltas[c.id] ?? 0}
                  c={c}
                  animar
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-titulo text-sm text-gris">{c.numero}</span>
                  <h2 className="font-titulo text-xl">{c.nombre}</h2>
                </div>
                <p className="text-[0.9375rem] leading-relaxed">{c.idea}</p>

                <dl className="grid gap-2 text-sm leading-relaxed">
                  <div>
                    <dt className="inline font-bold">Confianza: </dt>
                    <dd className="inline">{c.confianza}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">Alegría: </dt>
                    <dd className="inline">{c.alegria}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">Ojo: </dt>
                    <dd className="inline">{c.ojo}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">Animación: </dt>
                    <dd className="inline">{c.animacion}</dd>
                  </div>
                </dl>

                {/* Tamaños reales + negativo a una tinta. */}
                <div className="flex flex-wrap items-end gap-4 border-t border-filete pt-4 text-tinta">
                  <LogoTrazo c={c} style={{ height: 16 }} />
                  <LogoTrazo c={c} style={{ height: 32 }} />
                  <LogoTrazo c={c} style={{ height: 64 }} />
                  <span className="inline-flex bg-tinta p-2 text-blanco">
                    <LogoTrazo c={c} unaTinta style={{ height: 48 }} />
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => repetir(c.id)}
                    className="min-h-11 rounded-full border border-filete-fuerte px-5 text-sm font-bold"
                  >
                    Repetir animación
                  </button>
                  <button
                    type="button"
                    aria-pressed={enComparador}
                    onClick={() => alternar(c.id)}
                    className="min-h-11 rounded-full border border-filete-fuerte px-5 text-sm font-bold aria-pressed:border-azul aria-pressed:bg-azul aria-pressed:text-blanco"
                  >
                    {enComparador ? "En el comparador" : "Comparar"}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <section
        id="comparar"
        aria-labelledby="titulo-comparar"
        className="mx-auto max-w-[var(--ancho)] scroll-mt-20 px-5 py-16"
      >
        <h2 id="titulo-comparar" className="font-titulo text-2xl sm:text-3xl">
          Lado a lado
        </h2>
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-gris">
          Elige hasta {MAX_COMPARAR} con el botón «Comparar» de cada tarjeta. Si
          eliges una cuarta, sale la primera que elegiste.
        </p>

        {comparados.length === 0 ? (
          <p className="mt-8">Todavía no hay ninguno elegido.</p>
        ) : (
          <div
            className="mt-10 grid gap-10 md:grid-cols-[repeat(var(--n),minmax(0,1fr))]"
            style={{ ["--n" as string]: comparados.length }}
          >
            {comparados.map((c) => (
              <article key={c.id} className="flex flex-col gap-8">
                <h3 className="font-titulo text-lg">
                  {c.numero} · {c.nombre}
                </h3>
                <div className={`flex aspect-[16/9] items-center justify-center p-6 ${fondo}`}>
                  <LogoTrazo c={c} style={{ width: "100%", height: "100%" }} />
                </div>
                <Pestana c={c} />
                <PerfilInstagram c={c} />
                <Tarjeta c={c} />
                <Camiseta c={c} />
                <Fachada c={c} />
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
