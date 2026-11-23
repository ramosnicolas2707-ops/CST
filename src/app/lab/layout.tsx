import type { Metadata } from "next";
import { Instrument_Sans, Unbounded } from "next/font/google";
import "../globals.css";

/**
 * Layout raíz del laboratorio (/lab/…): páginas de trabajo para revisar
 * logos, marca y componentes en el celular. No llevan menú ni pie del sitio
 * y NUNCA se indexan: `robots` va en noindex y /lab no está en el sitemap.
 *
 * Es un segundo layout raíz (el del sitio es app/[lang]/layout.tsx), por eso
 * repite <html>, <body> y las fuentes.
 */

const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente-titulo",
});

export const metadata: Metadata = {
  title: "Laboratorio CST",
  robots: { index: false, follow: false },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${instrument.variable} ${unbounded.variable}`}>
      <body className="bg-blanco font-sans text-tinta antialiased">{children}</body>
    </html>
  );
}
