"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ui/contact-form";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
  FileText,
  Smartphone,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/* ================== CONFIG ================== */
const WHATSAPP_NUMBER = "5547996582666";
const CONTACT_EMAIL = "contato@ampario.app";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ================== ANIMATIONS ================== */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* ================== HERO SECTION ================== */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-4xl mx-auto space-y-8"
            >
              <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">Gestão de Manutenção Operacional</span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white leading-[1.1]"
              >
                A operação no <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">controle</span>.
              </motion.h1>

              <motion.p
                variants={item}
                className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
              >
                Manutenção não falha por falta de esforço. Falha por falta de controle.
                Transforme sua operação com rastreabilidade, previsibilidade e evidência auditável.
              </motion.p>

              <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="rounded-full w-full sm:w-auto md:text-lg h-14" asChild>
                  <Link href="#contato">
                    Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto h-14 border-white/10 hover:bg-white/5" asChild>
                  <a href={waLink("Olá! Gostaria de ver uma demonstração do sistema.")} target="_blank">
                    <Smartphone className="mr-2 w-5 h-5" /> Falar no WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image Mockup (Abstract Dashboard) */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 container mx-auto px-4 perspective-1000"
          >
            <div className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-[#0a0f1c]/50 p-2 shadow-2xl backdrop-blur-xl lg:rounded-2xl lg:p-4">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-xl" />
              {/* Fallback mockup using CSS shapes if image fails */}
              <div className="rounded-lg bg-[#0f1629] aspect-[16/9] border border-white/5 overflow-hidden relative group">
                <div className="absolute inset-x-0 top-0 h-10 bg-[#16203c] border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="p-8 grid grid-cols-12 gap-6 mt-8 h-full">
                  <div className="col-span-3 h-4/5 rounded-xl bg-white/5 animate-pulse"></div>
                  <div className="col-span-9 space-y-4">
                    <div className="flex gap-4">
                      <div className="h-32 w-1/3 rounded-xl bg-blue-500/10 border border-blue-500/20"></div>
                      <div className="h-32 w-1/3 rounded-xl bg-green-500/10 border border-green-500/20"></div>
                      <div className="h-32 w-1/3 rounded-xl bg-purple-500/10 border border-purple-500/20"></div>
                    </div>
                    <div className="h-64 w-full rounded-xl bg-white/5 border border-white/5"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium bg-black/50 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">Visualização do Dashboard</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================== PAIN / PROBLEM SECTION (NEW) ================== */}
        <section className="py-24 bg-[#05080f] border-b border-white/5 relative">
          {/* Technical Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading leading-tight">
                  O custo da desorganização não aparece na planilha.
                </h2>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                  Aparece na parada inesperada, no retrabalho e na perda de histórico técnico.
                  Sem controle real, a manutenção vira sempre reativa — mesmo quando parece organizada.
                </p>
                <ul className="space-y-4">
                  {[
                    "Ocorrências sem histórico confiável",
                    "Decisões reativas (apagar incêndio)",
                    "Falta de visibilidade operacional",
                    "Risco legal e fiscal (falta de evidência)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/5 blur-[80px] rounded-full"></div>
                <GlassCard className="p-8 border-red-500/10 relative">
                  <h3 className="text-lg font-bold text-white mb-4">O ciclo da manutenção reativa</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <p className="text-sm text-zinc-400">🚨 Equipamento parou sem aviso</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <p className="text-sm text-zinc-400">📉 Compra de peças em emergência</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <p className="text-sm text-zinc-400">❓ "Qual foi a última preventiva?" (Sem registro)</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* ================== FEATURES GRID ================== */}
        <section id="como-funciona" className="py-24 bg-[#0a0f1c]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Sustentação Operacional</h2>
              <p className="text-zinc-400">Ferramentas desenhadas para quem está no campo e precisa de clareza, não de burocracia.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Conformidade Técnica",
                  desc: "PMOC e rotinas preventivas que protegem a operação de riscos legais e técnicos.",
                  color: "text-blue-400"
                },
                {
                  icon: Smartphone,
                  title: "Execução & Evidência",
                  desc: "Checklists offline e provas digitais direto do campo. O que é feito, é registrado.",
                  color: "text-green-400"
                },
                {
                  icon: FileText,
                  title: "Transparência Total",
                  desc: "Relatórios fotográficos automáticos que eliminam dúvidas e aumentam a confiança.",
                  color: "text-purple-400"
                },
                {
                  icon: BarChart3,
                  title: "Decisão por Criticidade",
                  desc: "Gestão baseada em risco (GUT) e indicadores reais. Chega de 'achismo'.",
                  color: "text-orange-400"
                },
              ].map((feature, idx) => (
                <GlassCard key={idx} hoverEffect className="relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${feature.color}`}>
                    <feature.icon className="w-24 h-24" />
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ================== MANIFESTO / VALUE PROP ================== */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 skew-y-3 transform origin-top-left scale-110 -z-10"></div>
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
                Manutenção não acontece no PowerPoint.
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Acontece no calor da fábrica, no ruído das máquinas, no tempo curto.
                O Ampario existe para resolver a ruptura entre executar bem e documentar direito.
              </p>
              <ul className="space-y-4 mt-4">
                {[
                  "Confiabilidade: O que é planejado, acontece.",
                  "Rastreabilidade: Histórico auditável em segundos.",
                  "Praticidade: Feito para o campo, para a realidade.",
                  "Segurança: Redução de risco operacional."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" size="lg" className="rounded-full mt-6" asChild>
                <a href={waLink("Olá! Gostaria de agendar uma demonstração.")} target="_blank">Agendar Demonstração</a>
              </Button>
            </div>
            <div className="relative">
              <GlassCard className="p-8 border-blue-500/20 bg-[#0f1629]/80">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">JD</div>
                      <div>
                        <p className="text-white font-medium">João da Silva</p>
                        <p className="text-xs text-zinc-500">Técnico de Campo</p>
                      </div>
                    </div>
                    <span className="text-xs text-green-400 border border-green-500/20 bg-green-500/10 px-2 py-1 rounded-full">Concluído</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span>Limpeza dos filtros de ar</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span>Verificação de correias</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span>Medição de corrente elétrica</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-lg bg-black/20 border border-white/5 flex items-center justify-center text-zinc-600 text-xs relative overflow-hidden group">
                      <span className="z-10 relative">Foto Evidência 1</span>
                      <div className="absolute inset-0 bg-zinc-800 opacity-50"></div>
                    </div>
                    <div className="h-20 rounded-lg bg-black/20 border border-white/5 flex items-center justify-center text-zinc-600 text-xs relative overflow-hidden group">
                      <span className="z-10 relative">Foto Evidência 2</span>
                      <div className="absolute inset-0 bg-zinc-800 opacity-50"></div>
                    </div>
                  </div>
                  <Button className="w-full mt-2" disabled>Serviço Auditado</Button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* ================== PLANS SECTION ================== */}
        <section id="planos" className="py-24 bg-[#0a0f1c] relative">
          <div className="absolute top-0 right-0 p-12 opacity-30">
            <div className="w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Planos que acompanham sua maturidade</h2>
              <p className="text-zinc-400">Comece validando o processo e escale para a gestão completa.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* STARTER -> TÉCNICO */}
              <GlassCard className="p-8 border-white/5 bg-white/[0.02] hover:border-white/10" hoverEffect>
                <h3 className="text-xl font-bold text-white">Técnico / Piloto</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">R$ 0</span>
                  <span className="text-sm text-zinc-500">/mês</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">Para profissionais autônomos ou para validar o sistema na sua operação.</p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Até 50 ativos</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 1 usuário</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> PMOC Digital</li>
                </ul>
                <Button className="w-full mt-8" variant="outline" asChild>
                  <a href={waLink("Olá! Quero iniciar um piloto técnico gratuito.")} target="_blank">Iniciar Piloto</a>
                </Button>
              </GlassCard>

              {/* PRO -> BUSINESS */}
              <GlassCard className="p-8 border-blue-500/30 bg-blue-500/[0.02] relative" hoverEffect>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-400">GESTÃO COMPLETA</div>
                <h3 className="text-xl font-bold text-white">Business</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">R$ 197</span>
                  <span className="text-sm text-zinc-500">/mês</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">Para empresas que precisam de controle, múltiplos técnicos e relatórios avançados.</p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Até 500 ativos</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 5 usuários</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Relatórios Personalizados</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Suporte Prioritário</li>
                </ul>
                <Button className="w-full mt-8 shadow-[0_0_20px_rgba(37,99,235,0.3)]" asChild>
                  <a href={waLink("Olá! Quero profissionalizar minha gestão com o plano Business.")} target="_blank">Profissionalizar Agora</a>
                </Button>
              </GlassCard>

              {/* ENTERPRISE */}
              <GlassCard className="p-8 border-white/5 bg-white/[0.02] hover:border-white/10" hoverEffect>
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">Sob Consulta</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">Para grandes contratos e operações críticas.</p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Ativos Ilimitados</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Usuários Ilimitados</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Integração API / ERP</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> SLA de Suporte</li>
                </ul>
                <Button className="w-full mt-8" variant="outline" asChild>
                  <a href={waLink("Olá! Preciso de uma solução Enterprise personalizada.")} target="_blank">Falar com Engenharia</a>
                </Button>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* ================== FAQ SECTION (NEW) ================== */}
        <section className="py-24 border-t border-white/5 bg-[#05080f]">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">Dúvidas Operacionais</h2>
              <p className="text-zinc-400">Perguntas frequentes de quem lidera equipes técnicas.</p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  q: "O sistema funciona sem internet? (Offline)",
                  a: "Sim. O App do Técnico foi desenhado para 'casas de máquinas' sem sinal. O técnico baixa a rota, executa tudo offline (checklist, fotos, assinatura) e o sistema sincroniza automaticamente quando retomar a conexão."
                },
                {
                  q: "O PMOC gerado tem validade jurídica/ANVISA?",
                  a: "Módulo 100% aderente à Lei 13.589/2018 e Resolução 09 da ANVISA. O sistema gera os relatórios, planos de manutenção e ART/TRT (vinculado ao seu responsável técnico) nos padrões exigidos pela fiscalização."
                },
                {
                  q: "Consigo importar meus dados atuais?",
                  a: "Sim. Temos templates de importação em Excel para cadastrar centenas de ativos e clientes de uma só vez. Nossa equipe de engenharia ajuda no setup inicial dos planos Business e Enterprise."
                },
                {
                  q: "A assinatura digital tem validade?",
                  a: "Sim. A assinatura coletada na tela do celular, junto com a geolocalização e o carimbo de data/hora (timestamp), compõe uma evidência técnica robusta da execução do serviço."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-lg p-6 hover:bg-white/[0.04] transition-colors">
                  <h3 className="text-white font-semibold mb-2 flex items-start gap-3">
                    <span className="text-blue-500 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-zinc-400 text-sm ml-7 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== CTA SECTION ================== */}
        <section id="contato" className="py-24 container mx-auto px-4 md:px-6">
          <GlassCard className="max-w-5xl mx-auto p-8 md:p-12 relative overflow-hidden border-blue-500/20">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
                  Pronto para <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">profissionalizar</span> <br />
                  sua operação?
                </h2>
                <p className="text-lg text-zinc-300">
                  Deixe as planilhas no passado. O futuro da sua empresa de climatização começa com um simples "Oi".
                </p>
                <div className="flex items-center gap-4 text-sm text-zinc-400 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border border-[#0a0f1c]"></div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500 border border-[#0a0f1c]"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border border-[#0a0f1c]"></div>
                  </div>
                  <p>Junte-se a +150 empresas</p>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </GlassCard>
        </section>
      </main>

      <Footer />
    </div>
  );
}
