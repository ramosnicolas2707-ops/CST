/**
 * Las 3 paletas propuestas para CST (Fase 3C).
 *
 * Todas comparten la misma base sobria y cálida (blanco roto, papel, negro
 * cálido, gris cálido) y cambian solo el acento feliz y el color de apoyo.
 *
 * El contraste NO está escrito a mano: lo calcula `contraste()` con la
 * fórmula de WCAG 2.x, así que si alguien cambia un color, la tabla del
 * tablero se actualiza sola y muestra si la pareja sigue pasando.
 */

export type Color = { nombre: string; hex: string; uso: string };

export type Pareja = {
  frente: string;
  fondo: string;
  uso: string;
  /** 4.5 = texto normal (AA). 3 = texto grande o piezas de interfaz (AA). */
  minimo: 4.5 | 3;
};

export type Paleta = {
  id: "a" | "b" | "c";
  nombre: string;
  idea: string;
  colores: {
    fondo: string;
    papel: string;
    tinta: string;
    gris: string;
    acento: string;
    /** El acento oscurecido, para cuando el acento va como TEXTO sobre claro. */
    acentoTexto: string;
    /** Color del texto encima de un botón con fondo de acento. */
    sobreAcento: string;
    apoyo: string;
  };
  muestras: Color[];
  pares: Pareja[];
};

export const BASE = {
  fondo: "#FAF7F2",
  papel: "#F1ECE3",
  tinta: "#1C1A17",
  gris: "#6B645A",
};

const muestrasBase: Color[] = [
  { nombre: "Blanco roto", hex: BASE.fondo, uso: "Fondo principal" },
  { nombre: "Papel", hex: BASE.papel, uso: "Secciones alternas" },
  { nombre: "Negro cálido", hex: BASE.tinta, uso: "Texto y bloques oscuros" },
  { nombre: "Gris cálido", hex: BASE.gris, uso: "Texto secundario" },
];

const paresBase: Pareja[] = [
  { frente: BASE.tinta, fondo: BASE.fondo, uso: "Texto sobre fondo", minimo: 4.5 },
  { frente: BASE.gris, fondo: BASE.fondo, uso: "Texto secundario sobre fondo", minimo: 4.5 },
  { frente: BASE.gris, fondo: BASE.papel, uso: "Texto secundario sobre papel", minimo: 4.5 },
  { frente: BASE.fondo, fondo: BASE.tinta, uso: "Texto claro sobre bloque oscuro", minimo: 4.5 },
];

export const paletas: Paleta[] = [
  {
    id: "a",
    nombre: "A · Azul Señal",
    idea: "Continuidad: el azul y el amarillo que ya conoce tu gente, ahora sobre una base cálida en vez de blanco frío.",
    colores: {
      ...BASE,
      acento: "#2F5BFF",
      acentoTexto: "#2F5BFF",
      sobreAcento: "#FFFFFF",
      apoyo: "#FFC21A",
    },
    muestras: [
      ...muestrasBase,
      { nombre: "Azul", hex: "#2F5BFF", uso: "Acento: botones, enlaces, detalles" },
      { nombre: "Amarillo", hex: "#FFC21A", uso: "Apoyo: solo sobre oscuro o como gráfico" },
    ],
    pares: [
      ...paresBase,
      { frente: "#FFFFFF", fondo: "#2F5BFF", uso: "Texto de botón (blanco sobre azul)", minimo: 4.5 },
      { frente: "#2F5BFF", fondo: BASE.fondo, uso: "Enlace azul sobre fondo", minimo: 4.5 },
      { frente: "#FFC21A", fondo: BASE.tinta, uso: "Amarillo sobre bloque oscuro", minimo: 4.5 },
    ],
  },
  {
    id: "b",
    nombre: "B · Mandarina",
    idea: "La más alegre y cálida: un naranja que se siente a sol de mediodía. Muy distinta a la competencia, que casi toda es azul.",
    colores: {
      ...BASE,
      acento: "#FF6B2C",
      acentoTexto: "#C2410C",
      sobreAcento: BASE.tinta,
      apoyo: "#FFD9C2",
    },
    muestras: [
      ...muestrasBase,
      { nombre: "Mandarina", hex: "#FF6B2C", uso: "Acento: botones y bloques (texto oscuro encima)" },
      { nombre: "Mandarina oscura", hex: "#C2410C", uso: "Cuando el acento va como texto sobre claro" },
      { nombre: "Durazno", hex: "#FFD9C2", uso: "Apoyo: superficies suaves" },
    ],
    pares: [
      ...paresBase,
      { frente: BASE.tinta, fondo: "#FF6B2C", uso: "Texto de botón (oscuro sobre mandarina)", minimo: 4.5 },
      { frente: "#C2410C", fondo: BASE.fondo, uso: "Enlace mandarina oscura sobre fondo", minimo: 4.5 },
      { frente: BASE.tinta, fondo: "#FFD9C2", uso: "Texto sobre durazno", minimo: 4.5 },
      { frente: "#FF6B2C", fondo: BASE.tinta, uso: "Mandarina sobre bloque oscuro", minimo: 4.5 },
    ],
  },
  {
    id: "c",
    nombre: "C · Verde resuelto",
    idea: "El verde del «listo, funcionando»: calma y buena noticia. El amarillo de apoyo le pone la chispa.",
    colores: {
      ...BASE,
      acento: "#12A16B",
      acentoTexto: "#0B7A50",
      sobreAcento: BASE.tinta,
      apoyo: "#FFC21A",
    },
    muestras: [
      ...muestrasBase,
      { nombre: "Verde", hex: "#12A16B", uso: "Acento: botones y bloques (texto oscuro encima)" },
      { nombre: "Verde oscuro", hex: "#0B7A50", uso: "Cuando el acento va como texto sobre claro" },
      { nombre: "Amarillo", hex: "#FFC21A", uso: "Apoyo: solo sobre oscuro o como gráfico" },
    ],
    pares: [
      ...paresBase,
      { frente: BASE.tinta, fondo: "#12A16B", uso: "Texto de botón (oscuro sobre verde)", minimo: 4.5 },
      { frente: "#0B7A50", fondo: BASE.fondo, uso: "Enlace verde oscuro sobre fondo", minimo: 4.5 },
      { frente: "#12A16B", fondo: BASE.fondo, uso: "Verde como borde o ícono sobre fondo", minimo: 3 },
      { frente: "#FFC21A", fondo: BASE.tinta, uso: "Amarillo sobre bloque oscuro", minimo: 4.5 },
    ],
  },
];

/** Luminancia relativa (WCAG 2.x). */
function luminancia(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Relación de contraste entre dos colores, de 1 a 21. */
export function contraste(a: string, b: string) {
  const [x, y] = [luminancia(a), luminancia(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}
