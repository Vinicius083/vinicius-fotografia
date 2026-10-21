"use client";

import { useCallback, useEffect, useState } from "react";

type Item = { src: string; alt: string };

/**
 * Abre em modal qualquer foto marcada com `data-zoom` (ver ImageSlot).
 * A lista de navegação é montada no clique, com as fotos visíveis na página.
 */
export default function Lightbox() {
  const [itens, setItens] = useState<Item[]>([]);
  const [indice, setIndice] = useState(0);
  const aberto = itens.length > 0;

  const fechar = useCallback(() => setItens([]), []);
  const ir = useCallback(
    (d: number) =>
      setIndice((i) => (itens.length ? (i + d + itens.length) % itens.length : 0)),
    [itens.length],
  );

  useEffect(() => {
    function aoClicar(e: MouseEvent) {
      const alvo = (e.target as Element).closest<HTMLElement>("[data-zoom]");
      if (!alvo) return;
      const todos = Array.from(
        document.querySelectorAll<HTMLElement>("[data-zoom]"),
      ).filter((el) => el.offsetParent !== null);
      const lista = todos.map((el) => ({
        src: el.dataset.zoom as string,
        alt: el.dataset.alt || "",
      }));
      setItens(lista);
      setIndice(Math.max(0, todos.indexOf(alvo)));
    }
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    function aoTecla(e: KeyboardEvent) {
      if (e.key === "Escape") fechar();
      else if (e.key === "ArrowRight") ir(1);
      else if (e.key === "ArrowLeft") ir(-1);
    }
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", aoTecla);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", aoTecla);
    };
  }, [aberto, fechar, ir]);

  if (!aberto) return null;
  const atual = itens[indice];
  const varias = itens.length > 1;
  let toqueX = 0;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={atual.alt || "Foto ampliada"}
      onClick={fechar}
      onTouchStart={(e) => (toqueX = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - toqueX;
        if (varias && Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1);
      }}
    >
      <button type="button" className="lightbox-btn lightbox-fechar" onClick={fechar} aria-label="Fechar">
        ×
      </button>
      {varias && (
        <button
          type="button"
          className="lightbox-btn lightbox-ant"
          onClick={(e) => {
            e.stopPropagation();
            ir(-1);
          }}
          aria-label="Foto anterior"
        >
          ‹
        </button>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={atual.src}
        className="lightbox-img"
        src={atual.src}
        alt={atual.alt}
        onClick={(e) => e.stopPropagation()}
      />
      {varias && (
        <button
          type="button"
          className="lightbox-btn lightbox-prox"
          onClick={(e) => {
            e.stopPropagation();
            ir(1);
          }}
          aria-label="Próxima foto"
        >
          ›
        </button>
      )}
      {varias && (
        <div className="lightbox-contador">
          {indice + 1} / {itens.length}
        </div>
      )}
    </div>
  );
}
