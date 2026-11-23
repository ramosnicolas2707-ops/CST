import type { CSSProperties } from "react";
import type { Concepto } from "./conceptos";
import s from "./logos.module.css";

/**
 * Dibuja un concepto. Toma el color del texto (currentColor), así que el
 * mismo SVG sirve en positivo y en negativo cambiando solo `color`.
 *
 * `unaTinta`: el punto de «CST.» deja de ser amarillo y toma el color del
 * trazo, para probar que el logo funciona con una sola tinta.
 */
export default function LogoTrazo({
  c,
  animar = false,
  unaTinta = false,
  className,
  style,
}: {
  c: Concepto;
  animar?: boolean;
  unaTinta?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const clases = [animar && s.animar, animar && s[c.movimiento], className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      viewBox={c.viewBox}
      role="img"
      aria-label={`CST, concepto ${c.nombre}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={c.grosor}
      strokeLinecap={c.remate ?? "round"}
      strokeLinejoin={c.union ?? "round"}
      className={clases}
      style={{ ...style, ["--dur" as string]: `${c.duracion}s` }}
    >
      <path className={s.trazo} d={c.d} pathLength={1} transform={c.transform} />
      {c.punto && (
        <circle
          className={s.punto}
          cx={c.punto[0]}
          cy={c.punto[1]}
          r={c.punto[2]}
          fill={unaTinta ? "currentColor" : "var(--color-amarillo)"}
          stroke="none"
        />
      )}
    </svg>
  );
}
