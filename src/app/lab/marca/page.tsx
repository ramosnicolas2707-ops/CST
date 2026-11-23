import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Tablero from "./Tablero";

/**
 * Brand board de CST (Fase 3C). La fuente candidata se carga SOLO en esta
 * página de laboratorio: el sitio no la descarga hasta que Nico la elija.
 */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente-bricolage",
});

export const metadata: Metadata = {
  title: "Marca · Laboratorio CST",
};

export default function MarcaPage() {
  return (
    <main id="contenido" className={`${bricolage.variable} bg-[#FAF7F2]`}>
      <header className="mx-auto max-w-[var(--ancho)] px-5 pb-6 pt-14 sm:pt-20">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gris">
          Laboratorio · Fase 3C · no se muestra en Google
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">
          La identidad de CST a partir del logo 10. Cambia la paleta y la letra
          arriba: todo el tablero se repinta. Elige una paleta y una pareja de
          letras.
        </p>
      </header>
      <Tablero />
    </main>
  );
}
