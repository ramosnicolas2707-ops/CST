import type { Metadata } from "next";
import Galeria from "./Galeria";

export const metadata: Metadata = {
  title: "Logos · Laboratorio CST",
};

export default function LogosPage() {
  return (
    <main id="contenido">
      <header className="mx-auto max-w-[var(--ancho)] px-5 pb-10 pt-14 sm:pt-20">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gris">
          Laboratorio · Fase 3B · no se muestra en Google
        </p>
        <h1 className="mt-4 max-w-3xl font-titulo text-3xl leading-tight sm:text-5xl">
          Una sola línea. Tres letras.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          Diez maneras de dibujar la idea de Nico: la C se une abajo con la S, la
          S se une arriba con la T, todo sin levantar el lápiz. Elige de 1 a 3
          para seguir trabajando.
        </p>
      </header>
      <Galeria />
    </main>
  );
}
