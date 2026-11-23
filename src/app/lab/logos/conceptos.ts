/**
 * Las 10 variaciones del logo de una sola línea: C → S → T.
 *
 * La idea es de Nico (23-nov-2026): la C se une abajo con la S y la S se une
 * arriba con la T, todo en un solo trazo, para que el logo se pueda animar
 * "dibujándose".
 *
 * Cómo leer la geometría: las letras van de y=20 (arriba) a y=120 (abajo).
 * Cada `d` es UN solo path. La T se dibuja llegando por el techo hasta el
 * extremo derecho y volviendo por encima de sí misma hasta el centro para
 * bajar: estático no se nota, y animado parece un gesto de mano.
 */

export type Concepto = {
  id: string;
  numero: string;
  nombre: string;
  /** La idea en dos líneas. */
  idea: string;
  confianza: string;
  alegria: string;
  /** Lo que hay que saber antes de elegirla. */
  ojo: string;
  animacion: string;
  viewBox: string;
  d: string;
  grosor: number;
  remate?: "round" | "square" | "butt";
  union?: "round" | "miter";
  transform?: string;
  /** Punto aparte (solo en «CST.»): x, y, radio. */
  punto?: [number, number, number];
  /** Variante de animación (ver logos.module.css). */
  movimiento: "dibujo" | "pasos" | "rebote" | "punto" | "lento";
  duracion: number;
};

const BASE_C_S =
  "M98.3 37.9 A50 50 0 1 0 60 120 H165 A32 25 0 0 0 165 70 A32 25 0 0 1 165 20";

export const conceptos: Concepto[] = [
  {
    id: "geometrica",
    numero: "01",
    nombre: "Geométrica",
    idea: "Círculos y rectas. La C se apoya en la línea de abajo, la S la recoge y sube hasta el techo de la T.",
    confianza: "Geometría exacta: se ve ordenada y bien hecha.",
    alegria: "Todo es redondo, hasta las puntas de la línea.",
    ojo: "Es la versión más directa de tu idea. Base segura para iterar.",
    animacion: "La línea se dibuja de la C a la T en 0,9 s.",
    viewBox: "0 0 310 140",
    d: `${BASE_C_S} H290 H250 V120`,
    grosor: 14,
    movimiento: "dibujo",
    duracion: 0.9,
  },
  {
    id: "angular",
    numero: "02",
    nombre: "Angular",
    idea: "Sin una sola curva: todo es ángulo recto, como un plano de ingeniero.",
    confianza: "Rigor y precisión. Se siente técnica.",
    alegria: "Es la más seria de las 10: la alegría tendría que venir del color.",
    ojo: "La S puede leerse como un 5 si se ve muy pequeña.",
    animacion: "El trazo avanza a saltos, como un plotter que dibuja.",
    viewBox: "0 0 310 140",
    d: "M100 20 H12 V120 H192 V70 H132 V20 H292 H250 V120",
    grosor: 14,
    remate: "square",
    union: "miter",
    movimiento: "pasos",
    duracion: 0.9,
  },
  {
    id: "gruesa",
    numero: "03",
    nombre: "Gruesa",
    idea: "La misma línea con casi el doble de peso. Hecha para stickers, camisetas y la fachada.",
    confianza: "Sólida: se lee de lejos y no se rompe.",
    alegria: "Tiene la actitud de una marca de ropa, gordita y con fuerza.",
    ojo: "Es la que mejor aguanta tamaños pequeños.",
    animacion: "Se dibuja rápido y da un pequeño rebote al terminar.",
    viewBox: "-6 0 316 140",
    d: `${BASE_C_S} H290 H250 V120`,
    grosor: 24,
    remate: "butt",
    movimiento: "rebote",
    duracion: 0.7,
  },
  {
    id: "fina",
    numero: "04",
    nombre: "Fina",
    idea: "Trazo de pluma y letras más abiertas, con mucho aire entre ellas.",
    confianza: "Calma y elegancia, como una marca de diseño.",
    alegria: "Ligera: se siente como respirar.",
    ojo: "En tamaños pequeños se pierde. Necesitaría una versión gruesa para el favicon.",
    animacion: "Dibujo lento y suave, casi 1 s.",
    viewBox: "0 0 350 140",
    d: "M105.3 48.9 A50 50 0 1 0 60 120 H185 A30 25 0 0 0 185 70 A30 25 0 0 1 185 20 H330 H285 V120",
    grosor: 5,
    movimiento: "lento",
    duracion: 0.95,
  },
  {
    id: "firma",
    numero: "05",
    nombre: "Firma",
    idea: "Inclinada como letra escrita a mano y con la T rematada en una colita, como una firma.",
    confianza: "Dice que detrás hay una persona que responde.",
    alegria: "Va inclinada hacia adelante, con movimiento.",
    ojo: "La T se parece a una l si el brazo derecho queda muy corto.",
    animacion: "Se escribe con ritmo de mano: arranca lento, acelera y frena.",
    viewBox: "-10 0 330 140",
    d: `${BASE_C_S} H305 H252 V106 Q252 122 270 114`,
    grosor: 10,
    transform: "skewX(-12) translate(22 0)",
    movimiento: "dibujo",
    duracion: 0.9,
  },
  {
    id: "sonrisa",
    numero: "06",
    nombre: "Sonrisa",
    idea: "La unión entre la C y la S baja en curva: una sonrisa escondida en la base.",
    confianza: "La parte de arriba sigue recta y firme.",
    alegria: "Literalmente sonríe, sin ser un emoji.",
    ojo: "Es la menos limpia de las 10: la base puede verse como una nube.",
    animacion: "Se dibuja y la sonrisa se estira al final.",
    viewBox: "0 0 310 145",
    d: "M98.3 37.9 A50 50 0 1 0 60 120 Q112.5 140 165 120 A32 25 0 0 0 165 70 A32 25 0 0 1 165 20 H290 H250 V120",
    grosor: 14,
    movimiento: "rebote",
    duracion: 0.9,
  },
  {
    id: "punto",
    numero: "07",
    nombre: "CST.",
    idea: "La línea termina y aparece un punto amarillo: CST, punto. Problema resuelto.",
    confianza: "El punto final es cierre: lo que empezamos, lo terminamos.",
    alegria: "Un punto de color feliz, heredero del punto amarillo de «Señal».",
    ojo: "Es la única con un segundo elemento. A una tinta el punto toma el mismo color.",
    animacion: "La línea se dibuja y el punto cae y rebota.",
    viewBox: "0 0 310 140",
    d: `${BASE_C_S} H290 H250 V120`,
    grosor: 14,
    punto: [286, 116, 10],
    movimiento: "punto",
    duracion: 0.9,
  },
  {
    id: "techo",
    numero: "08",
    nombre: "Techo",
    idea: "El brazo de la T se estira hasta cubrir la S: un techo que protege.",
    confianza: "Es «tranquilo, nosotros lo resolvemos» hecho forma.",
    alegria: "Abierta y amplia, mira hacia la derecha, hacia adelante.",
    ojo: "Ocupa más ancho: en espacios angostos queda pequeña.",
    animacion: "Se dibuja y el techo se extiende de último.",
    viewBox: "0 0 355 140",
    d: `${BASE_C_S} H340 H252 V120`,
    grosor: 14,
    movimiento: "dibujo",
    duracion: 0.9,
  },
  {
    id: "monograma",
    numero: "09",
    nombre: "Monograma",
    idea: "Las tres letras apretadas en un cuadrado, con la misma regla de la línea.",
    confianza: "Compacta, como un sello.",
    alegria: "Letras gorditas y juntas, como amigos en una foto.",
    ojo: "Pensada para el favicon y la foto de perfil, no para el menú.",
    animacion: "Dibujo corto, 0,7 s.",
    viewBox: "0 0 150 140",
    d: "M51.1 31.7 A25 50 0 1 0 35 120 H76 A19 25 0 0 0 76 70 A19 25 0 0 1 76 20 H136 H110 V120",
    grosor: 14,
    movimiento: "dibujo",
    duracion: 0.7,
  },
  {
    id: "suave",
    numero: "10",
    nombre: "Suave",
    idea: "Rectángulos de esquinas redondas en vez de círculos, como las esquinas de un celular.",
    confianza: "Estructura firme, todo bien cuadrado.",
    alegria: "Ninguna esquina pica.",
    ojo: "Es la que más se parece a la tipografía actual del sitio.",
    animacion: "La línea se dibuja de la C a la T en 0,9 s.",
    viewBox: "0 0 310 140",
    d: "M100 20 H48 Q12 20 12 56 V84 Q12 120 48 120 H168 Q194 120 194 95 Q194 70 168 70 H158 Q132 70 132 45 Q132 20 158 20 H290 H250 V120",
    grosor: 14,
    movimiento: "dibujo",
    duracion: 0.9,
  },
];

/**
 * Versión compacta del 10 · Suave, elegida por Nico el 23-nov-2026.
 * Misma regla (una sola línea C → S → T) apretada en un cuadrado, para el
 * favicon y la foto de perfil, donde el logo largo no se lee.
 */
export const suaveCompacto: Concepto = {
  id: "suave-compacto",
  numero: "10c",
  nombre: "Suave compacto",
  idea: "El logo 10 apretado en un cuadrado.",
  confianza: "",
  alegria: "",
  ojo: "Solo para favicon y foto de perfil.",
  animacion: "La línea se dibuja en 0,7 s.",
  viewBox: "0 0 140 140",
  d: "M44 22 H32 Q14 22 14 40 V100 Q14 118 32 118 H80 Q94 118 94 104 V84 Q94 70 80 70 H74 Q60 70 60 56 V36 Q60 22 74 22 H128 H111 V118",
  grosor: 12,
  movimiento: "dibujo",
  duracion: 0.7,
};
