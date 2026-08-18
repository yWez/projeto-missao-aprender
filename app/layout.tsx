import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projeto Missão Aprender",
  description: "Missões Visuais para tornar momentos da rotina mais claros, previsíveis e ajustáveis à realidade de cada criança.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "favicon.svg",
    shortcut: "favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
