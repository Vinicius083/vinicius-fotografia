"use client";

import { CSSProperties, FormEvent, MouseEvent } from "react";

const WHATSAPP = "5583996274938";
const EMAIL = "jvinicius7337@gmail.com";

function dados(form: HTMLFormElement) {
  const d = new FormData(form);
  const linha = (r: string, v: FormDataEntryValue | null) =>
    v ? `${r}: ${v}\n` : "";

  return {
    nome: (d.get("nome") as string) || "",
    corpo:
      "Olá, Vinícius! Gostaria de contratar uma sessão.\n\n" +
      linha("Nome", d.get("nome")) +
      linha("Contato", d.get("retorno")) +
      linha("Tipo de trabalho", d.get("tipo")) +
      linha("Data prevista", d.get("data")) +
      linha("Local", d.get("local")) +
      (d.get("mensagem") ? `\nSobre o trabalho:\n${d.get("mensagem")}\n` : ""),
  };
}

const grid2: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: 16,
};

export default function BriefingForm() {
  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { nome, corpo } = dados(e.currentTarget);
    window.location.href =
      `mailto:${EMAIL}?subject=` +
      encodeURIComponent("Orçamento de fotografia" + (nome ? ` — ${nome}` : "")) +
      "&body=" +
      encodeURIComponent(corpo);
  }

  function enviarWhatsapp(e: MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.closest("form") as HTMLFormElement | null;
    if (!form || !form.reportValidity()) return;
    window.open(
      `https://wa.me/${WHATSAPP}?text=` + encodeURIComponent(dados(form).corpo),
      "_blank",
    );
  }

  return (
    <form
      onSubmit={enviar}
      style={{
        flex: "1 1 360px",
        minWidth: 280,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        border: "1px solid var(--color-divider)",
        borderRadius: "var(--radius-md)",
        padding: "clamp(20px, 3vw, 36px)",
        background: "color-mix(in srgb, var(--color-surface) 55%, transparent)",
      }}
    >
      <h3 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 500 }}>
        Briefing rápido
      </h3>

      <div style={grid2}>
        <label className="field">
          <span>Nome</span>
          <input className="input" name="nome" required placeholder="Seu nome" />
        </label>
        <label className="field">
          <span>E-mail ou WhatsApp</span>
          <input
            className="input"
            name="retorno"
            required
            placeholder="Como te respondo"
          />
        </label>
      </div>

      <div style={grid2}>
        <label className="field">
          <span>Tipo de trabalho</span>
          <select className="input" name="tipo" defaultValue="Documental">
            <option>Documental</option>
            <option>Estúdio</option>
            <option>Externo</option>
            <option>Eventos</option>
            <option>Ainda não sei</option>
          </select>
        </label>
        <label className="field">
          <span>Data prevista</span>
          <input className="input" name="data" type="date" />
        </label>
      </div>

      <label className="field">
        <span>Local</span>
        <input className="input" name="local" placeholder="Cidade, bairro ou espaço" />
      </label>

      <label className="field">
        <span>Sobre o trabalho</span>
        <textarea
          className="input"
          name="mensagem"
          rows={4}
          style={{ resize: "vertical", fontFamily: "var(--font-body)" }}
          placeholder="Ocasião, duração estimada, uso das imagens..."
        />
      </label>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <button type="submit" className="btn btn-primary">
          Enviar por e-mail
        </button>
        <button type="button" className="btn btn-secondary" onClick={enviarWhatsapp}>
          Enviar no WhatsApp
        </button>
      </div>

      <p
        style={{
          margin: 0,
          fontSize: 12.5,
          color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
        }}
      >
        O botão abre seu app de e-mail ou o WhatsApp com a mensagem já montada.
      </p>
    </form>
  );
}
