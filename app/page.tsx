import Link from "next/link";
import { CSSProperties } from "react";
import ImageSlot from "@/components/ImageSlot";
import BriefingForm from "@/components/BriefingForm";
import Reveal from "@/components/Reveal";
import BlurText from "@/components/BlurText";

const WHATSAPP = "https://wa.me/5583996274938";
const EMAIL = "jvinicius7337@gmail.com";
const INSTAGRAM = "https://instagram.com/viniciusfotografia01";

const kicker: CSSProperties = {
  margin: "0 0 14px",
  fontFamily: "var(--font-heading)",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontFeatureSettings: "'tnum'",
  color: "var(--color-accent-700)",
};

const legenda: CSSProperties = {
  fontStyle: "italic",
  color: "color-mix(in srgb, var(--color-text) 58%, transparent)",
};

const justificado: CSSProperties = { textAlign: "justify", hyphens: "auto" };

const gradeSerie: CSSProperties = {
  flex: "2 1 420px",
  minWidth: 280,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
  alignContent: "start",
};

type Serie = {
  id: string;
  numero: string;
  nome: string;
  titulo: string;
  texto: string;
  en: string;
  slug: string;
  slots: string[];
  legendas: string[];
  invertido: boolean;
  ultimo?: boolean;
  /** "padrao": 1 foto larga + 2 retratos. "retratos": todas as fotos em retrato. */
  grade?: "padrao" | "retratos";
};

const series: Serie[] = [
  {
    id: "documental",
    numero: "01",
    nome: "Documental",
    titulo: "O que acontece sem pedir licença",
    texto:
      "Acompanhamento de rotinas, ofícios, famílias e trabalho de campo. Nada de posar: eu me ajusto ao ritmo do lugar e fotografo o que já estava ali. Ensaios de meio dia a projetos de meses.",
    en: "Documentary — long-form and single-day.",
    slug: "documental",
    slots: ["va-doc-1", "va-doc-2", "va-doc-3"],
    legendas: [
      "Documental — foto principal",
      "Documental — retrato",
      "Documental — detalhe",
    ],
    invertido: false,
  },
  {
    id: "estudio",
    numero: "02",
    nome: "Estúdio",
    titulo: "Luz construída, do zero",
    texto:
      "Retrato profissional, book, perfil corporativo e still de produto. Fundo, luz e direção pensados antes de você chegar, para que a sessão renda o máximo em pouco tempo.",
    en: "Studio portraits, headshots and product still life.",
    slug: "estudio",
    slots: ["va-est-1", "va-est-2", "va-est-3", "va-est-4", "va-est-5"],
    legendas: [
      "Estúdio — retrato 01",
      "Estúdio — retrato 02",
      "Estúdio — retrato 03",
      "Estúdio — retrato 04",
      "Estúdio — retrato 05",
    ],
    invertido: true,
    grade: "retratos",
  },
  {
    id: "externo",
    numero: "03",
    nome: "Externo",
    titulo: "A cidade e o litoral como estúdio",
    texto:
      "Ensaios em locação: praia, centro histórico, sertão, arquitetura. Escolho horário e ponto pela luz — quase sempre a primeira ou a última hora do dia.",
    en: "On-location sessions across Paraíba.",
    slug: "externo",
    slots: ["va-ext-1", "va-ext-2", "va-ext-3"],
    legendas: [
      "Externo — foto principal",
      "Externo — locação",
      "Externo — retrato",
    ],
    invertido: false,
  },
  {
    id: "eventos",
    numero: "04",
    nome: "Eventos",
    titulo: "Uma noite inteira, sem interromper",
    texto:
      "Casamentos, aniversários, formaturas, shows e eventos corporativos. Cobertura discreta do começo ao fim, com entrega selecionada e tratada — não um despejo de arquivos.",
    en: "Weddings, parties and corporate coverage.",
    slug: "eventos",
    slots: ["va-eve-1", "va-eve-2", "va-eve-3"],
    legendas: [
      "Eventos — foto principal",
      "Eventos — momento",
      "Eventos — festa",
    ],
    invertido: true,
  },
  {
    id: "esportes",
    numero: "05",
    nome: "Esportes",
    titulo: "Ação, movimento e emoção",
    texto:
      "Cobertura de treinos, campeonatos e eventos esportivos. Fotografia de ação, retratos e bastidores, com atenção à luz e ao momento certo.",
    en: "Sports coverage and action photography.",
    slug: "esportes",
    slots: ["va-spt-1", "va-spt-2", "va-spt-3", "va-spt-4"],
    legendas: [
      "Esportes — foto principal",
      "Esportes — ação",
      "Esportes — bastidores",
      "Esportes — retrato",
    ],
    invertido: false,
    grade: "retratos",
    ultimo: true,
  },
];

const processo = [
  {
    numero: "01",
    titulo: "Conversa",
    texto:
      "Entendo a ocasião, o uso das imagens, prazo e orçamento. Respondo com proposta e disponibilidade em até 24 h.",
  },
  {
    numero: "02",
    titulo: "Planejamento",
    texto:
      "Locação, horário de luz, referências e roteiro do que precisa estar registrado. Você aprova antes.",
  },
  {
    numero: "03",
    titulo: "Sessão",
    texto:
      "Direção leve, no seu tempo. Em eventos, cobertura contínua e discreta do início ao fim.",
  },
  {
    numero: "04",
    titulo: "Entrega",
    texto:
      "Seleção tratada em galeria online para download, em alta e em versão para redes. Prazo de 7 a 15 dias.",
  },
];

const depoimentos = [
  {
    texto:
      "“Ele passou o dia inteiro com a equipe e ninguém percebeu que estava sendo fotografado. O resultado é a nossa fábrica como ela é.”",
    autor: "Allana & Wellington · Pré-wedding",
  },
  {
    texto:
      "“Precisávamos de retratos corporativos para o site em uma manhã. Saiu tudo em duas horas, com uma direção que deixou todo mundo à vontade.”",
    autor: "Charley Marinho · Batizado",
  },
  {
    texto:
      "“Do civil à última música. Recebemos as fotos antes do prazo e chorei escolhendo as do álbum.”",
    autor: "Jeffson Oliveira · Fotos Corporativas",
  },
];

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        color: "var(--color-text)",
        background: "var(--color-bg)",
        fontSize: 15,
        lineHeight: 1.6,
        textWrap: "pretty",
      }}
    >
      {/* Abertura */}
      <section
        id="topo"
        style={{
          padding:
            "clamp(48px, 8vw, 110px) var(--gutter) clamp(36px, 5vw, 72px)",
          maxWidth: 1240,
          margin: "0 auto",
          ...({ "--hero-fs": "clamp(52px, 12vw, 168px)" } as CSSProperties),
        }}
      >
        <p
          className="hero-line"
          style={{
            margin: "0 0 clamp(20px, 4vw, 40px)",
            fontFamily: "var(--font-heading)",
            fontSize: 13,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontFeatureSettings: "'tnum'",
            color: "var(--color-accent-700)",
            animationDelay: "40ms",
          }}
        >
          Fotografia · João Pessoa, Paraíba
        </p>
        <h1
          style={{
            margin: 0,
            fontWeight: 400,
            fontSize: "var(--hero-fs)",
            lineHeight: 0.86,
            letterSpacing: "-0.03em",
          }}
        >
          <BlurText
            text="Vinícius"
            animateBy="letters"
            direction="top"
            delay={35}
            stepDuration={0.6}
          />
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "clamp(16px, 3vw, 44px)",
            flexWrap: "wrap",
            marginTop: "calc(var(--hero-fs) * -0.22)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontWeight: 400,
              fontSize: "var(--hero-fs)",
              lineHeight: 0.86,
              letterSpacing: "-0.03em",
            }}
          >
            <BlurText
              text="Almeida"
              animateBy="letters"
              direction="bottom"
              delay={35}
              stepDuration={0.6}
            />
          </h1>
          <div
            className="plate hero-plate"
            style={{
              flex: "1 1 260px",
              minWidth: 220,
              maxWidth: 460,
              aspectRatio: "16 / 9",
              marginBottom: "clamp(6px, 1.4vw, 20px)",
            }}
          >
            <ImageSlot
              id="va-hero"
              placeholder="Foto de abertura — 16:9"
              priority
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "clamp(24px, 5vw, 72px)",
            flexWrap: "wrap",
            marginTop: "clamp(32px, 5vw, 64px)",
            borderTop: "1px solid var(--color-divider)",
            paddingTop: 24,
          }}
        >
          <p
            style={{
              flex: "1 1 340px",
              margin: 0,
              maxWidth: 620,
              fontSize: "clamp(17px, 1.6vw, 21px)",
              lineHeight: 1.5,
            }}
          >
            Fotografia documental, de estúdio, externa e de eventos. Trabalho
            com quem quer registro honesto, imagens que continuam dizendo algo
            dez anos depois de feitas.
          </p>
          <p style={{ ...legenda, flex: "0 1 300px", margin: 0 }}>
            Documentary, studio, outdoor and event photography, commissions in
            Paraíba.
          </p>
          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontFamily: "var(--font-heading)",
              fontSize: 14,
              letterSpacing: "0.04em",
            }}
          >
            <a href="#series">Ver as séries →</a>
            <a href="#contato">Solicitar orçamento →</a>
          </div>
        </div>
      </section>

      {/* Séries */}
      <section
        id="series"
        style={{
          padding: "clamp(28px, 5vw, 56px) var(--gutter) 0",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            borderBottom: "1px solid var(--color-divider)",
            paddingBottom: 12,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 500,
            }}
          >
            Varias maneiras de olhar
          </h2>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFeatureSettings: "'tnum'",
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
            }}
          >
            Séries 01 — 05
          </span>
        </div>

        {series.map((s) => (
          <article
            key={s.id}
            style={{
              display: "flex",
              flexWrap: s.invertido ? "wrap-reverse" : "wrap",
              flexDirection: s.invertido ? "row-reverse" : "row",
              gap: "clamp(24px, 4vw, 56px)",
              padding: "clamp(36px, 5vw, 72px) 0",
              borderBottom: s.ultimo
                ? undefined
                : "1px solid var(--color-divider)",
            }}
          >
            <div style={{ flex: "1 1 260px", minWidth: 240, maxWidth: 340 }}>
              <p style={kicker}>
                {s.numero} — {s.nome}
              </p>
              <h3
                style={{
                  margin: "0 0 14px",
                  fontSize: "clamp(24px, 2.6vw, 34px)",
                  fontWeight: 500,
                  lineHeight: 1.08,
                }}
              >
                {s.titulo}
              </h3>
              <p style={{ ...justificado, margin: "0 0 12px" }}>{s.texto}</p>
              <p style={{ ...legenda, margin: "0 0 20px" }}>{s.en}</p>
              <Link href={`/galerias#${s.slug}`} className="btn btn-secondary">
                Ver série
              </Link>
            </div>
            <div style={gradeSerie}>
              {s.grade === "retratos" ? (
                s.slots.map((slot, i) => (
                  <Reveal key={slot} delay={i * 80}>
                    <div className="plate" style={{ aspectRatio: "4 / 5" }}>
                      <ImageSlot
                        id={slot}
                        placeholder={s.legendas[i]}
                        sizes="(max-width: 900px) 50vw, 25vw"
                      />
                    </div>
                  </Reveal>
                ))
              ) : (
                <>
                  <Reveal style={{ gridColumn: "1 / -1" }}>
                    <div className="plate" style={{ aspectRatio: "3 / 2" }}>
                      <ImageSlot id={s.slots[0]} placeholder={s.legendas[0]} />
                    </div>
                  </Reveal>
                  <Reveal delay={80}>
                    <div className="plate" style={{ aspectRatio: "4 / 5" }}>
                      <ImageSlot
                        id={s.slots[1]}
                        placeholder={s.legendas[1]}
                        sizes="(max-width: 900px) 100vw, 25vw"
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={160}>
                    <div className="plate" style={{ aspectRatio: "4 / 5" }}>
                      <ImageSlot
                        id={s.slots[2]}
                        placeholder={s.legendas[2]}
                        sizes="(max-width: 900px) 100vw, 25vw"
                      />
                    </div>
                  </Reveal>
                </>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Frase */}
      <section
        data-header-invert
        style={{
          background: "#191714",
          color: "#f3f2f2",
          padding: "clamp(72px, 12vw, 160px) var(--gutter)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            position: "relative",
            margin: "0 auto",
            maxWidth: 900,
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(30px, 5.2vw, 72px)",
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
          }}
        >
          Fotografia não é sobre o instante. É sobre o que você vai querer
          lembrar dele.
        </p>
        <p
          style={{
            position: "relative",
            margin: "clamp(20px, 3vw, 36px) 0 0",
            fontSize: 15,
            color: "color-mix(in srgb, #f3f2f2 66%, transparent)",
          }}
        >
          Mais de 50 ensaios e coberturas entregues desde 2023 · João Pessoa, PB
        </p>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        style={{
          padding: "clamp(56px, 8vw, 110px) var(--gutter)",
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          gap: "clamp(28px, 5vw, 72px)",
          flexWrap: "wrap",
        }}
      >
        <Reveal
          style={{
            flex: "1 1 280px",
            minWidth: 240,
            maxWidth: 420,
            alignSelf: "flex-start",
          }}
        >
          <div className="plate" style={{ aspectRatio: "4 / 5" }}>
            <ImageSlot
              id="va-retrato"
              placeholder="Seu retrato — 4:5"
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          </div>
        </Reveal>
        <div style={{ flex: "2 1 420px", minWidth: 280 }}>
          <p style={{ ...kicker, fontFeatureSettings: undefined }}>Sobre</p>
          <h2
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(28px, 3.4vw, 44px)",
              fontWeight: 500,
              lineHeight: 1.06,
            }}
          >
            Fotógrafo em João Pessoa, com trabalho em toda a Paraíba
          </h2>
          <div
            style={{ columns: "2 260px", columnGap: "clamp(24px, 3vw, 44px)" }}
          >
            <p style={justificado}>
              Nasci e cresci no interior da Paraíba, numa cidade chamada
              Tavares. Comecei fotografando o que estava perto: feiras, sitios e
              o bairro. O olhar documental que se formou ali continua na base de
              tudo o que faço hoje, inclusive no estúdio e nos eventos.
            </p>
            <p style={justificado}>
              Atendo clientes particulares, marcas e empresas. Cuido de todo o
              processo: conversa inicial, planejamento de luz e locação, direção
              durante a sessão, seleção e tratamento final das imagens.
            </p>
            <p style={justificado}>
              Trabalho com equipamento próprio, e mantenho backup redundante de
              todo material entregue.
            </p>
          </div>
          <hr className="hr" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "clamp(16px, 2vw, 28px)",
              fontFeatureSettings: "'tnum'",
            }}
          >
            {[
              ["2023", "Início do trabalho autoral"],
              ["50+", "Ensaios e coberturas"],
              ["04", "Frentes de trabalho"],
            ].map(([numero, texto]) => (
              <div key={numero}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(28px, 3vw, 40px)",
                    lineHeight: 1,
                  }}
                >
                  {numero}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color:
                      "color-mix(in srgb, var(--color-text) 60%, transparent)",
                  }}
                >
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section
        id="processo"
        style={{
          padding: "0 var(--gutter) clamp(56px, 8vw, 110px)",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            borderBottom: "1px solid var(--color-divider)",
            paddingBottom: 12,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 500,
            }}
          >
            Como o trabalho acontece
          </h2>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
            }}
          >
            Processo
          </span>
        </div>
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 0,
          }}
        >
          {processo.map((p, i) => (
            <li
              key={p.numero}
              style={{
                padding:
                  i === processo.length - 1
                    ? "clamp(24px, 3vw, 40px) 0 28px"
                    : "clamp(24px, 3vw, 40px) clamp(18px, 2vw, 28px) 28px 0",
                borderBottom: "1px solid var(--color-divider)",
              }}
            >
              <p
                style={{
                  margin: "0 0 12px",
                  fontFamily: "var(--font-heading)",
                  fontSize: 13,
                  letterSpacing: "0.14em",
                  fontFeatureSettings: "'tnum'",
                  color: "var(--color-accent-700)",
                }}
              >
                {p.numero}
              </p>
              <h3 style={{ margin: "0 0 8px", fontSize: 21, fontWeight: 500 }}>
                {p.titulo}
              </h3>
              <p style={{ margin: 0, fontSize: 14 }}>{p.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Depoimentos */}
      <section
        style={{
          padding: "0 var(--gutter) clamp(56px, 8vw, 110px)",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: "0 0 clamp(24px, 3vw, 40px)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 500,
            borderBottom: "1px solid var(--color-divider)",
            paddingBottom: 12,
          }}
        >
          O que os clientes dizem
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(16px, 2vw, 28px)",
          }}
        >
          {depoimentos.map((d) => (
            <figure key={d.autor} className="card">
              <blockquote
                style={{
                  margin: "0 0 16px",
                  fontFamily: "var(--font-heading)",
                  fontSize: 20,
                  lineHeight: 1.28,
                  fontStyle: "italic",
                }}
              >
                {d.texto}
              </blockquote>
              <figcaption className="card-meta" style={{ fontStyle: "normal" }}>
                {d.autor}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        style={{
          borderTop: "1px solid var(--color-divider)",
          padding: "clamp(56px, 8vw, 110px) var(--gutter)",
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          gap: "clamp(32px, 5vw, 80px)",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 320px", minWidth: 280 }}>
          <p style={{ ...kicker, fontFeatureSettings: undefined }}>
            Contratação
          </p>
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(28px, 3.4vw, 46px)",
              fontWeight: 500,
              lineHeight: 1.04,
            }}
          >
            Vamos combinar sua sessão
          </h2>
          <p style={{ margin: "0 0 28px", maxWidth: 420 }}>
            Conte o tipo de trabalho, a data e onde será. Respondo em até 24
            horas com proposta, disponibilidade e valores.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderTop: "1px solid var(--color-divider)",
            }}
          >
            <a href={WHATSAPP} className="contact-row">
              <span className="label">WhatsApp</span>
              <span style={{ fontFeatureSettings: "'tnum'" }}>
                +55 83 99627-4938
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="contact-row">
              <span className="label">E-mail</span>
              <span>{EMAIL}</span>
            </a>
            <a href={INSTAGRAM} className="contact-row">
              <span className="label">Instagram</span>
              <span>@viniciusfotografia01</span>
            </a>
            <div className="contact-row">
              <span className="label">Base</span>
              <span>João Pessoa, PB — atendo toda a Paraíba</span>
            </div>
          </div>
        </div>

        <BriefingForm />
      </section>

      <footer
        data-header-invert
        style={{
          background: "#191714",
          color: "#f3f2f2",
          padding: "clamp(40px, 6vw, 72px) var(--gutter) 28px",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            gap: "clamp(24px, 4vw, 64px)",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderBottom:
              "1px solid color-mix(in srgb, #f3f2f2 18%, transparent)",
            paddingBottom: "clamp(28px, 4vw, 48px)",
          }}
        >
          <div
            style={{ flex: "1 1 280px", minWidth: 240, textAlign: "center" }}
          >
            <div
              style={{
                width: 300,
                height: 200,
                margin: "0 auto 18px",
              }}
            >
              <ImageSlot
                id="va-logo"
                placeholder="Sua logo"
                fit="cover"
                sizes="600px"
              />
            </div>
            <p
              style={{
                margin: 0,
                color: "color-mix(in srgb, #f3f2f2 62%, transparent)",
              }}
            >
              João Pessoa · Paraíba · Brasil
            </p>
          </div>

          <div
            style={{
              flex: "0 1 180px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontFamily: "var(--font-heading)",
              fontSize: 14,
              letterSpacing: "0.04em",
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, #f3f2f2 55%, transparent)",
              }}
            >
              Séries
            </span>
            {series.map((s) => (
              <Link
                key={s.slug}
                href={`/galerias#${s.slug}`}
                style={{ color: "#f3f2f2" }}
              >
                {s.nome}
              </Link>
            ))}
          </div>

          <div
            style={{
              flex: "0 1 220px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontFamily: "var(--font-heading)",
              fontSize: 14,
              letterSpacing: "0.04em",
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, #f3f2f2 55%, transparent)",
              }}
            >
              Contato
            </span>
            <a href={WHATSAPP} style={{ color: "#f3f2f2" }}>
              WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} style={{ color: "#f3f2f2" }}>
              E-mail
            </a>
            <a href={INSTAGRAM} style={{ color: "#f3f2f2" }}>
              Instagram
            </a>
          </div>
        </div>
        <p
          style={{
            maxWidth: 1240,
            margin: "20px auto 0",
            fontSize: 12.5,
            color: "color-mix(in srgb, #f3f2f2 50%, transparent)",
          }}
        >
          © 2026 Vinícius Almeida Fotografia. Todas as imagens são de autoria
          própria e protegidas por direito autoral.
        </p>
      </footer>
    </div>
  );
}
