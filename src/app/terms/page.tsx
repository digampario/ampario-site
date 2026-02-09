import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#0a0f1c] text-zinc-300">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-6 py-32 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-8">Termos de Uso</h1>
                <div className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p><strong>Última atualização: {new Date().toLocaleDateString('pt-BR')}</strong></p>

                    <p>Bem-vindo ao <strong>Ampario</strong>. Ao acessar ou utilizar nossa plataforma, você concorda com estes Termos de Uso.</p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Objeto</h2>
                    <p>O Ampario é uma plataforma SaaS (Software as a Service) para gestão de manutenção e ativos de climatização (HVAC), facilitando o cumprimento de normas como o PMOC.</p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Conta e Acesso</h2>
                    <p>Você é responsável por manter a confidencialidade de suas credenciais de acesso. O uso da conta é pessoal e intransferível.</p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Responsabilidades</h2>
                    <p>O Ampario fornece ferramentas para auxiliar na gestão, mas <strong>não substitui a responsabilidade técnica</strong> dos profissionais habilitados (Engenheiros/Técnicos) sobre a manutenção dos equipamentos.</p>
                    <p>Não nos responsabilizamos por:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Falhas na operação dos equipamentos gerenciados.</li>
                        <li>Dados inseridos incorretamente pelos usuários.</li>
                        <li>Interrupções temporárias do serviço para manutenção.</li>
                    </ul>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Propriedade Intelectual</h2>
                    <p>Todo o código, design, marcas e conteúdo da plataforma são propriedade exclusiva da Ampario Tecnologia Ltda. É proibida a engenharia reversa, cópia ou distribuição não autorizada.</p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Planos e Pagamentos</h2>
                    <p>O acesso a recursos específicos depende do plano contratado. A Ampario reserva-se o direito de atualizar preços e recursos mediante aviso prévio.</p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Cancelamento</h2>
                    <p>Você pode cancelar sua assinatura a qualquer momento. O acesso permanecerá ativo até o fim do ciclo de faturamento vigente.</p>

                    <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Contato</h2>
                    <p>Dúvidas sobre estes termos? Fale conosco: <a href="mailto:contato@ampario.app" className="text-blue-400 hover:underline">contato@ampario.app</a>.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
