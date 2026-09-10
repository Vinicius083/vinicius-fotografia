import Image from "next/image";
import { fotos } from "./fotos";

type Props = {
  /** Chave em components/fotos.ts */
  id: string;
  /** Legenda mostrada enquanto não há foto, e usada como alt quando há. */
  placeholder: string;
  /** "cover" (padrão) recorta para preencher; "contain" mostra a imagem inteira. */
  fit?: "cover" | "contain";
  /** Marca a imagem como prioritária no carregamento (usar só na abertura). */
  priority?: boolean;
  sizes?: string;
};

export default function ImageSlot({
  id,
  placeholder,
  fit = "cover",
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: Props) {
  const src = fotos[id];

  if (!src) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "12px",
          background: "var(--color-surface)",
          color: "color-mix(in srgb, var(--color-text) 45%, transparent)",
          fontFamily: "var(--font-heading)",
          fontSize: "13px",
          letterSpacing: "0.06em",
        }}
      >
        {placeholder}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src={src}
        alt={placeholder}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: fit }}
      />
    </div>
  );
}
