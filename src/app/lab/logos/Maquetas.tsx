import type { Concepto } from "./conceptos";
import LogoTrazo from "./LogoTrazo";
import { site } from "@/data/site";

/**
 * Cinco lugares reales donde va a vivir el logo, dibujados con CSS y SVG
 * simples (nada de fotos de stock). Sirven para ver tamaño y contraste en
 * contexto, no para presentar a clientes.
 */

function Rotulo({ children }: { children: string }) {
  return (
    <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-gris">
      {children}
    </p>
  );
}

export function Pestana({ c }: { c: Concepto }) {
  return (
    <div>
      <Rotulo>Pestaña del navegador · 16 px</Rotulo>
      <div className="flex items-center gap-2 rounded-t-lg bg-niebla px-3 py-2 text-[13px] text-tinta">
        <span className="flex size-4 shrink-0 items-center justify-center">
          <LogoTrazo c={c} style={{ width: 16, height: 16 }} />
        </span>
        <span className="truncate">CST · Centro de Soluciones Tecnológicas</span>
      </div>
      <div className="h-3 rounded-b-lg border border-t-0 border-filete" />
    </div>
  );
}

export function PerfilInstagram({ c }: { c: Concepto }) {
  return (
    <div>
      <Rotulo>Foto de perfil</Rotulo>
      <div className="flex items-center gap-4">
        <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-tinta text-blanco">
          <LogoTrazo c={c} style={{ width: "62%" }} />
        </div>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-tinta text-blanco">
          <LogoTrazo c={c} style={{ width: "62%" }} />
        </div>
      </div>
    </div>
  );
}

export function Tarjeta({ c }: { c: Concepto }) {
  return (
    <div>
      <Rotulo>Tarjeta de presentación</Rotulo>
      <div className="flex aspect-[7/4] flex-col justify-between rounded-md border border-filete bg-blanco p-5 text-tinta shadow-[0_1px_0_var(--color-filete)]">
        <LogoTrazo c={c} style={{ width: "42%" }} />
        <div className="text-[11px] leading-snug">
          <p className="font-bold">{site.founder.name}</p>
          <p className="text-gris">Centro de Soluciones Tecnológicas</p>
          <p className="mt-1 text-gris">
            {site.contact.whatsappDisplay} · {site.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Camiseta({ c }: { c: Concepto }) {
  return (
    <div>
      <Rotulo>Camiseta</Rotulo>
      <div className="relative mx-auto w-full max-w-56 text-tinta">
        <svg viewBox="0 0 200 200" aria-hidden="true" className="w-full">
          <path
            d="M70 14 Q100 34 130 14 L176 36 L196 82 L164 96 L158 80 L158 192 L42 192 L42 80 L36 96 L4 82 L24 36 Z"
            fill="currentColor"
          />
        </svg>
        <div className="absolute left-1/2 top-[30%] w-[34%] -translate-x-1/2 text-blanco">
          <LogoTrazo c={c} unaTinta style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export function Fachada({ c }: { c: Concepto }) {
  return (
    <div>
      <Rotulo>Fachada</Rotulo>
      <div className="overflow-hidden rounded-md border border-filete bg-niebla">
        <div className="flex h-16 items-center justify-center bg-tinta px-6 text-blanco">
          <LogoTrazo c={c} style={{ height: "60%" }} />
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-3 p-4">
          <div className="h-24 rounded-sm border-4 border-blanco bg-[color-mix(in_oklab,var(--color-azul)_14%,white)]" />
          <div className="h-24 rounded-t-sm border-4 border-b-0 border-blanco bg-[color-mix(in_oklab,var(--color-tinta)_25%,white)]" />
        </div>
      </div>
    </div>
  );
}
