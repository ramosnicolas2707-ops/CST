/* =============================================================================
   LA MARCA — CST · Centro de Soluciones Tecnológicas
   =============================================================================

   Dos piezas que casi siempre van juntas:

     · <Isotipo>  el símbolo: un cuadrado redondeado con la esquina de arriba
                  a la derecha abierta y un punto amarillo en ella.
     · <Marca>    el isotipo más la sigla escrita. Es lo que va en la barra de
                  navegación y en el pie.

   EL LOGOTIPO
   CST en Unbounded 700, con un poco de aire entre letras (0.04em). En el pie
   va además el nombre completo, chico y en la letra de texto.

   EL ISOTIPO
   Un trazo de 7 sobre un cuadrado de 34 (de 7 a 41) con esquinas de radio 9.
   La esquina superior derecha se abre, y el punto se centra sobre el eje del
   trazo justo en la mitad de esa curva (45°). Las dos puntas quedan a la
   misma distancia del punto, así el hueco se ve parejo arriba y a la derecha.

   El trazo va en azul sobre claro y en blanco sobre tinta. El punto es
   siempre amarillo.

   La misma geometría vive en tres lugares más. Si tocas el símbolo, tócalo
   en todos:
     · src/app/icon.svg     el favicon
     · src/lib/og.tsx       la imagen para compartir enlaces
     · Marketing/cst/logo/  los archivos del logo (SVG y PNG)
   ========================================================================== */

/** El trazo abierto. Va de la punta de arriba a la de la derecha. */
export const SIMBOLO_TRAZO = "M25 7H16a9 9 0 0 0-9 9v16a9 9 0 0 0 9 9h16a9 9 0 0 0 9-9V23";
/** El punto, centrado sobre el trazo en la mitad de la esquina. */
export const SIMBOLO_PUNTO = { cx: 38.364, cy: 9.636, r: 5.5 };

/* ─────────────────────────────────────────────────────────────── ISOTIPO ── */

export function Isotipo({
  className = "",
  sobreOscuro = false,
}: {
  className?: string;
  sobreOscuro?: boolean;
}) {
  return (
    <svg
      viewBox="3.5 3.5 41 41"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <path
        d={SIMBOLO_TRAZO}
        fill="none"
        stroke={sobreOscuro ? "var(--color-blanco)" : "var(--color-azul)"}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle {...SIMBOLO_PUNTO} fill="var(--color-amarillo)" />
    </svg>
  );
}

/* ───────────────────────────────────────────────────────────────── MARCA ── */

/**
 * El logo: isotipo y sigla, en una línea.
 *
 * La sigla va escrita como texto de verdad y no dentro del SVG. Así la lee un
 * lector de pantalla, la encuentra el buscador de la página y se ajusta al
 * tamaño de letra que tenga puesto el visitante.
 */
export function Marca({
  className = "",
  sobreOscuro = false,
  completo = false,
}: {
  className?: string;
  /** En el pie: trazo y sigla en blanco. */
  sobreOscuro?: boolean;
  /** Agrega el nombre completo debajo de la sigla. */
  completo?: boolean;
}) {
  return (
    <span
      className={`flex shrink-0 items-center gap-3 ${
        sobreOscuro ? "text-blanco" : "text-tinta"
      } ${className}`}
    >
      <Isotipo sobreOscuro={sobreOscuro} className="h-9 w-9 shrink-0" />
      <span className="flex flex-col gap-1">
        <span className="font-titulo text-[1.375rem] font-bold leading-none tracking-[0.04em]">
          CST
        </span>
        {completo && (
          <span
            className={`text-xs leading-none ${
              sobreOscuro ? "text-white/70" : "text-gris"
            }`}
          >
            Centro de Soluciones Tecnológicas
          </span>
        )}
      </span>
    </span>
  );
}
