"use client";

import Link from "next/link";
import { CSSProperties, useCallback, useEffect, useState } from "react";
import ImageSlot from "./ImageSlot";

const WHATSAPP = "https://wa.me/5583996274938";

type Foto = { id: string; legenda: string; ratio: string; largo?: boolean };

type Aba = {
  slug: string;
  numero: string;
  rotulo: string;
  titulo: string;
  texto: string;
  en: string;
  fotos: Foto[];
};

const abas: Aba[] = [
  {
    slug: "documental",
    numero: "01",
    rotulo: "01 Documental",
    titulo: "Documental",
    texto:
      "Rotinas, ofícios e famílias fotografados como acontecem. Sem pose, sem interferência — o registro de um lugar no tempo em que ele existiu.",
    en: "Documentary work — single-day assignments to multi-month projects.",
    fotos: [
      { id: "gal-doc-1", legenda: "Documental — abertura, 16:9", ratio: "16 / 9", largo: true },
      { id: "gal-doc-2", legenda: "Documental 02", ratio: "4 / 5" },
      { id: "gal-doc-3", legenda: "Documental 03", ratio: "4 / 5" },
      { id: "gal-doc-4", legenda: "Documental 04", ratio: "4 / 5" },
      { id: "gal-doc-5", legenda: "Documental 05", ratio: "3 / 2" },
      { id: "gal-doc-6", legenda: "Documental 06", ratio: "3 / 2" },
    ],
  },
  {
    slug: "estudio",
    numero: "02",
    rotulo: "02 Estúdio",
    titulo: "Estúdio",
    texto:
      "Retrato, book, perfil corporativo e still de produto. Luz desenhada para cada rosto ou objeto, com fundo e direção definidos antes da sessão.",
    en: "Studio portraits, headshots and product still life.",
    fotos: [
      { id: "gal-est-1", legenda: "Estúdio 01", ratio: "4 / 5" },
      { id: "gal-est-2", legenda: "Estúdio 02", ratio: "4 / 5" },
      { id: "gal-est-3", legenda: "Estúdio — foto larga", ratio: "16 / 9", largo: true },
      { id: "gal-est-4", legenda: "Estúdio 04", ratio: "1 / 1" },
      { id: "gal-est-5", legenda: "Estúdio 05", ratio: "1 / 1" },
      { id: "gal-est-6", legenda: "Estúdio 06", ratio: "1 / 1" },
    ],
  },
  {
    slug: "externo",
    numero: "03",
    rotulo: "03 Externo",
    titulo: "Externo",
    texto:
      "Ensaios em locação — praia, centro histórico, arquitetura, sertão. Horário escolhido pela luz: primeira ou última hora do dia.",
    en: "On-location sessions across Paraíba.",
    fotos: [
      { id: "gal-ext-1", legenda: "Externo — panorâmica", ratio: "2 / 1", largo: true },
      { id: "gal-ext-2", legenda: "Externo 02", ratio: "4 / 5" },
      { id: "gal-ext-3", legenda: "Externo 03", ratio: "4 / 5" },
      { id: "gal-ext-4", legenda: "Externo 04", ratio: "3 / 2" },
      { id: "gal-ext-5", legenda: "Externo 05", ratio: "3 / 2" },
      { id: "gal-ext-6", legenda: "Externo 06", ratio: "3 / 2" },
    ],
  },
  {
    slug: "eventos",
    numero: "04",
    rotulo: "04 Eventos",
    titulo: "Eventos",
    texto:
      "Casamentos, formaturas, shows e eventos corporativos. Cobertura contínua e discreta, com entrega selecionada e tratada.",
    en: "Weddings, parties and corporate coverage.",
    fotos: [
      { id: "gal-eve-1", legenda: "Eventos 01", ratio: "3 / 2" },
      { id: "gal-eve-2", legenda: "Eventos 02", ratio: "3 / 2" },
      { id: "gal-eve-3", legenda: "Eventos — foto larga", ratio: "16 / 9", largo: true },
      { id: "gal-eve-4", legenda: "Eventos 04", ratio: "4 / 5" },
      { id: "gal-eve-5", legenda: "Eventos 05", ratio: "4 / 5" },
      { id: "gal-eve-6", legenda: "Eventos 06", ratio: "4 / 5" },
    ],
  },
];

const slugs = abas.map((a) => a.slug);

function estiloAba(ativo: boolean): CSSProperties {
  return {
    appearance: "none",
    background: "none",
    border: 0,
    padding: "16px 0",
    cursor: "pointer",
    font: "inherit",
    letterSpacing: "inherit",
    textTransform: "inherit",
    fontFeatureSettings: "'tnum'",
    color: ativo
      ? "var(--color-accent-700)"
      : "color-mix(in srgb, var(--color-text) 62%, transparent)",
    borderBottom: `2px solid ${ativo ? "var(--color-accent)" : "transparent"}`,
    marginBottom: "-1px",
    transition: "color 0.25s var(--ease), border-color 0.25s var(--ease)",
  };
}

export default function Galerias() {
  const [atual, setAtual] = useState("documental");

  useEffect(() => {
    const sync = () => {
      const h = (window.location.hash || "").replace("#", "");
      if (slugs.includes(h)) setAtual(h);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const ir = useCallback((slug: string) => {
    setAtual(slug);
    if (window.location.hash !== `#${slug}`) {
      window.history.replaceState(null, "", `#${slug}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const aba = abas.find((a) => a.slug === atual) ?? abas[0];

  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        color: "var(--color-text)",
        background: "var(--color-bg)",
        fontSize: 15,
        lineHeight: 1.6,
        minHeight: "100vh",
        textWrap: "pretty",
      }}
    >
      <div
        className="tabs-drawer"
        style={{
          position: "sticky",
          top: "var(--header-h)",
          zIndex: 20,
          background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--color-divider)",
        }}
      >
        <div className="tabs-row">
          {abas.map((a) => (
            <button
              key={a.slug}
              type="button"
              onClick={() => ir(a.slug)}
              aria-current={a.slug === atual ? "page" : undefined}
              style={estiloAba(a.slug === atual)}
            >
              {a.rotulo}
            </button>
          ))}
        </div>
      </div>

      <section
        style={{
          padding:
            "clamp(40px, 6vw, 88px) var(--gutter) clamp(56px, 8vw, 110px)",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <div
          key={`${aba.slug}-info`}
          className="painel-galeria"
          style={{
            display: "flex",
            gap: "clamp(24px, 4vw, 64px)",
            flexWrap: "wrap",
            alignItems: "flex-end",
            borderBottom: "1px solid var(--color-divider)",
            paddingBottom: "clamp(20px, 3vw, 36px)",
          }}
        >
          <div style={{ flex: "1 1 380px", minWidth: 260 }}>
            <p
              style={{
                margin: "0 0 14px",
                fontFamily: "var(--font-heading)",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontFeatureSettings: "'tnum'",
                color: "var(--color-accent-700)",
              }}
            >
              Série {aba.numero}
            </p>
            <h1
              style={{
                margin: "0 0 16px",
                fontWeight: 400,
                fontSize: "clamp(40px, 7vw, 96px)",
                lineHeight: 0.92,
                letterSpacing: "-0.025em",
              }}
            >
              {aba.titulo}
            </h1>
            <p style={{ margin: 0, maxWidth: 560, fontSize: "clamp(16px, 1.5vw, 19px)" }}>
              {aba.texto}
            </p>
          </div>
          <p
            style={{
              flex: "0 1 260px",
              margin: 0,
              fontStyle: "italic",
              color: "color-mix(in srgb, var(--color-text) 58%, transparent)",
            }}
          >
            {aba.en}
          </p>
        </div>

        <div
          key={`${atual}-grid`}
          className="gallery-grid painel-galeria"
          style={{ marginTop: "clamp(28px, 4vw, 48px)" }}
        >
          {aba.fotos.map((f, i) => (
            <figure
              key={f.id}
              className={`plate${f.largo ? " gallery-item--wide" : ""}`}
              style={{
                aspectRatio: f.ratio,
                animationDelay: `${i * 60}ms`,
              }}
            >
              <ImageSlot
                id={f.id}
                placeholder={f.legenda}
                sizes={f.largo ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 30vw"}
              />
            </figure>
          ))}
        </div>
      </section>

      <section
        data-header-invert
        style={{
          background: "#191714",
          color: "#f3f2f2",
          padding: "clamp(48px, 7vw, 96px) var(--gutter)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            gap: "clamp(24px, 4vw, 64px)",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              margin: 0,
              flex: "1 1 380px",
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontSize: "clamp(26px, 4vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Tem uma data em mente?
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={WHATSAPP}
              className="btn btn-primary"
              style={{ color: "var(--color-accent-400)", borderColor: "var(--color-accent-400)" }}
            >
              WhatsApp
            </a>
            <Link
              href="/#contato"
              className="btn btn-secondary"
              style={{
                color: "#f3f2f2",
                borderColor: "color-mix(in srgb, #f3f2f2 35%, transparent)",
              }}
            >
              Enviar briefing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
