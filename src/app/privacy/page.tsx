import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#0a0f1c] text-zinc-300">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-6 py-32 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-8">Política de Privacidade</h1>
                <div className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p><strong>Última atualização: {new Date().toLocaleDateString('pt-BR')}</strong></p>

                    <p>A <strong>Ampario Tecnologia Ltda</strong> ("Ampario") está comprometida com a proteção de seus dados. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Coleta de Dados</h2>
                    <p>Coletamos informações essenciais para a prestação de nossos serviços de gestão de manutenção HVAC, incluindo:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Dados de Cadastro:</strong> Nome, e-mail, telefone, empresa e cargo.</li>
                        <li><strong>Dados de Uso:</strong> Logs de acesso, endereço IP, tipo de navegador e interações com a plataforma.</li>
                        <li><strong>Dados Operacionais:</strong> Informações sobre ativos, ordens de serviço e fotos inseridas no sistema.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Uso dos Dados</h2>
                    <p>Utilizamos seus dados para:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Fornecer e melhorar a plataforma Ampario.</li>
                        <li>Gerar relatórios e evidências auditáveis (PMOC).</li>
                        <li>Enviar comunicações sobre atualizações, segurança e suporte.</li>
                        <li>Cumprir obrigações legais e regulatórias.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Compartilhamento de Dados</h2>
                    <p>Não vendemos seus dados. O compartilhamento ocorre apenas com:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Prestadores de Serviço:</strong> Servidores de hospedagem (AWS/Vercel) e ferramentas de análise, sob contratos de confidencialidade.</li>
                        <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou ordem judicial.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Segurança</h2>
                    <p>Adotamos medidas técnicas robustas, incluindo criptografia em trânsito (SSL/TLS) e em repouso, controles de acesso rigorosos e monitoramento contínuo para proteger suas informações.</p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Seus Direitos (LGPD)</h2>
                    <p>Você tem direito a:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Confirmar a existência de tratamento de dados.</li>
                        <li>Acessar seus dados.</li>
                        <li>Corrigir dados incompletos ou desatualizados.</li>
                        <li>Solicitar a eliminação de dados desnecessários.</li>
                    </ul>
                    <p>Para exercer seus direitos, entre em contato: <a href="mailto:contato@ampario.app" className="text-blue-400 hover:underline">contato@ampario.app</a>.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
