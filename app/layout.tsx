import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import Header from "@/components/Header";
import "./design-system.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinícius Almeida Fotografia",
  description:
    "Fotografia documental, de estúdio, externa e de eventos em João Pessoa e em toda a Paraíba. Registro honesto, entrega tratada.",
  openGraph: {
    title: "Vinícius Almeida Fotografia",
    description:
      "Fotografia documental, de estúdio, externa e de eventos em João Pessoa e em toda a Paraíba.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/assets/icone1png.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${lora.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
