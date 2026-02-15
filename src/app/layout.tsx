import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ampario — A operação no controle",
    template: "%s — Ampario",
  },
  description:
    "Plataforma de Gestão de Manutenção Operacional (HVAC & Ambientes Críticos). Transforme manutenção em previsibilidade, segurança e evidência auditável.",
  metadataBase: new URL("https://ampario.app"),
  keywords: ["Gestão Operacional", "Rastreabilidade", "Confiabilidade", "Manutenção Industrial", "PMOC", "HVAC", "Manutenção Ar Condicionado"],
  authors: [{ name: "Ampario Tecnologia" }],
  creator: "Ampario Tecnologia",
  publisher: "Ampario Tecnologia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ampario — A operação no controle",
    description: "Manutenção não falha por falta de esforço. Falha por falta de controle. Transforme sua operação com rastreabilidade, previsibilidade e evidência auditável.",
    url: "https://ampario.app",
    siteName: "Ampario",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/Logo/ampario-logo.png", // Using Logo as fallback OG Image for now
        width: 800,
        height: 600,
        alt: "Ampario Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ampario — A operação no controle",
    description: "Gestão operacional para HVAC e ambientes críticos.",
    images: ["/Logo/ampario-logo.png"], // Fallback
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Ampario",
    statusBarStyle: "black-translucent",
    startupImage: ["/Logo/ampario-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-bg-dark text-foreground overflow-x-hidden`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0f1c] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
          <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] bg-purple-500/10 opacity-30 blur-[120px]"></div>
        </div>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
