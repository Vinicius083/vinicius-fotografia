import type { Metadata } from "next";
import Galerias from "@/components/Galerias";

export const metadata: Metadata = {
  title: "Galerias — Vinícius Almeida Fotografia",
  description:
    "Séries documental, estúdio, externo e eventos fotografadas em João Pessoa e em toda a Paraíba.",
};

export default function GaleriasPage() {
  return <Galerias />;
}
