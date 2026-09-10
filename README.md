# Vinícius Almeida Fotografia

Site em Next.js (App Router + TypeScript) do portfólio de fotografia, implementado a
partir do projeto do Claude Design (`Vinícius Almeida Fotografia.dc.html` e
`Galerias.dc.html`).

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm start       # sobe o build
```

## Estrutura

| Caminho | O que é |
| --- | --- |
| `app/layout.tsx` | HTML raiz, fontes (Cormorant Garamond + Lora) e metadados |
| `app/design-system.css` | Tokens e classes do design system "Classical" |
| `app/page.tsx` | Home: abertura, séries, sobre, processo, depoimentos, contato |
| `app/galerias/page.tsx` | Página de galerias (`/galerias`) |
| `components/Galerias.tsx` | Abas das quatro séries, sincronizadas com o hash da URL |
| `components/BriefingForm.tsx` | Formulário que monta a mensagem para e-mail ou WhatsApp |
| `components/ImageSlot.tsx` | Slot de imagem: mostra a foto ou o placeholder com a legenda |
| `components/fotos.ts` | Mapa `slot → arquivo` das fotos |

## Colocando as fotos

1. Copie os arquivos para `public/fotos/`.
2. Preencha o caminho em `components/fotos.ts`, por exemplo:

```ts
"va-hero": "/fotos/abertura.jpg",
"gal-doc-1": "/fotos/documental-01.jpg",
```

Todo slot ainda vazio continua mostrando o placeholder com a orientação de
enquadramento (proporção e assunto), então dá para publicar e ir preenchendo aos poucos.
As proporções esperadas estão nas próprias legendas (16:9, 4:5, 3:2, 1:1, 2:1).

## Links de contato

WhatsApp, e-mail e Instagram estão no topo de `app/page.tsx` e de
`components/Galerias.tsx` (`WHATSAPP`, `EMAIL`, `INSTAGRAM`) e em
`components/BriefingForm.tsx`.
