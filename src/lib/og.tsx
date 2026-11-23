import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { SIMBOLO_PUNTO, SIMBOLO_TRAZO } from "@/components/Logo";

/**
 * La imagen que aparece cuando alguien pega un enlace del sitio en WhatsApp,
 * en Instagram o en un chat. Se genera al compilar, una por página.
 *
 * Mismo lenguaje que el sitio: blanco, un bloque azul y el texto en tinta.
 * No se cargan fuentes externas a propósito — traer un binario de tipografía
 * en tiempo de build hace que el deploy dependa de que Google esté arriba.
 */

export const tamanoOg = { width: 1200, height: 630 };
export const tipoOg = "image/png";

export function imagenOg({
  titulo,
  precio,
  etiqueta,
}: {
  titulo: string;
  /** El "desde $X", si la página tiene precio. */
  precio?: string;
  /** El renglón chico de arriba. */
  etiqueta?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* El isotipo, el mismo símbolo de Logo.tsx: un trazo y un
              círculo, que Satori dibuja sin problema. */}
          <svg width="64" height="64" viewBox="3.5 3.5 41 41">
            <path
              d={SIMBOLO_TRAZO}
              fill="none"
              stroke="#2f5bff"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle {...SIMBOLO_PUNTO} fill="#ffc21a" />
          </svg>
          {/* La sigla. Sin fuente propia, Satori cae en la sans del sistema:
              el peso y el aire entre letras se acercan a Unbounded sin
              necesitarla. */}
          <div
            style={{
              display: "flex",
              fontSize: "38px",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#0b1b3f",
            }}
          >
            CST
          </div>
        </div>

        {/* Título */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {etiqueta && (
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#2f5bff",
                marginBottom: "24px",
              }}
            >
              {etiqueta}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: titulo.length > 46 ? "72px" : "88px",
              fontWeight: 800,
              letterSpacing: "-3px",
              lineHeight: 1.02,
              color: "#0b1b3f",
              maxWidth: "1000px",
            }}
          >
            {titulo}
          </div>
        </div>

        {/* Pie: precio a la izquierda, ciudad a la derecha */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "3px solid #0b1b3f",
            paddingTop: "28px",
          }}
        >
          {precio ? (
            <div
              style={{
                display: "flex",
                backgroundColor: "#2f5bff",
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 800,
                padding: "12px 24px",
              }}
            >
              {precio}
            </div>
          ) : (
            <div style={{ display: "flex", fontSize: "28px", color: "#5b6680" }}>
              {site.domain}
            </div>
          )}

          {/* Una sola cadena, no {ciudad}, {país}: Satori cuenta cada trozo
              como un hijo y exige display:flex apenas hay más de uno. */}
          <div style={{ display: "flex", fontSize: "28px", color: "#5b6680" }}>
            {`${site.address.city}, ${site.address.country}`}
          </div>
        </div>
      </div>
    ),
    tamanoOg,
  );
}
