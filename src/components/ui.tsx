import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Piezas sueltas que se repiten en todo el sitio.
 * Si algo se usa en dos páginas, vive aquí.
 */

/* ─────────────────────────────────────────────────────────────── Botones ── */

type BotonProps = {
  href: string;
  children: ReactNode;
  /** "azul" es el botón principal. Solo uno por pantalla. */
  tono?: "azul" | "negro" | "linea";
  /** Los enlaces a WhatsApp salen en pestaña nueva. */
  externo?: boolean;
  className?: string;
};

/**
 * El fondo del hover no aparece: entra barriendo de izquierda a derecha (ver
 * .barrido en globals.css). El color del texto cambia con él porque tiene que
 * hacerlo para seguir siendo legible, no porque el color sea el efecto.
 *
 * --color-barrido es lo que entra. El texto va BLANCO todo el tiempo: da
 * 5.2:1 sobre el azul y 16.9:1 sobre la tinta que entra barriendo.
 */
const tonos = {
  azul:
    "barrido bg-azul text-blanco [--color-barrido:var(--color-tinta)]",
  negro:
    "barrido bg-tinta text-blanco [--color-barrido:var(--color-azul)]",
  linea:
    "barrido border border-filete-fuerte text-tinta [--color-barrido:var(--color-tinta)] hover:border-tinta hover:text-blanco",
} as const;

export function Boton({
  href,
  children,
  tono = "azul",
  externo = false,
  className = "",
}: BotonProps) {
  const clases = `inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.9375rem] font-bold tracking-tight transition-colors duration-300 ${tonos[tono]} ${className}`;

  if (externo) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clases}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={clases}>
      {children}
    </Link>
  );
}

/* ───────────────────────────────────────────────────────── Encabezados ── */

/** El renglón chico en mayúsculas que va encima de un título. */
export function Antetitulo({
  children,
  sobreOscuro = false,
}: {
  children: ReactNode;
  sobreOscuro?: boolean;
}) {
  return (
    <p
      className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${
        sobreOscuro ? "text-azul-claro" : "text-azul"
      }`}
    >
      {children}
    </p>
  );
}

/** Título de sección con su antetítulo y su bajada opcional. */
export function TituloSeccion({
  antetitulo,
  titulo,
  bajada,
  sobreOscuro = false,
}: {
  antetitulo?: string;
  titulo: string;
  bajada?: string;
  sobreOscuro?: boolean;
}) {
  return (
    <header className="max-w-2xl">
      {antetitulo && (
        <Antetitulo sobreOscuro={sobreOscuro}>{antetitulo}</Antetitulo>
      )}
      <h2 className="text-[clamp(1.625rem,4.2vw,2.5rem)]">{titulo}</h2>
      {bajada && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            sobreOscuro ? "text-white/70" : "text-gris"
          }`}
        >
          {bajada}
        </p>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────── Listas ── */

/** Lista con viñeta azul. Para lo que sí está incluido. */
export function ListaSi({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-[0.4rem] h-2 w-2 shrink-0 bg-azul"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Lista con raya gris. Para lo que no está incluido. */
export function ListaNo({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[0.9375rem] leading-relaxed text-gris"
        >
          <span
            aria-hidden="true"
            className="mt-[0.72rem] h-px w-2 shrink-0 bg-gris"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
