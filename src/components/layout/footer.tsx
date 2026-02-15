import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-[#05080f] pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* BRAND */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-bold font-heading text-white">Ampario</h3>
                        <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">
                            Mais controle na operação, menos retrabalho no escritório.
                            A plataforma definitiva para gestão de manutenção HVAC com fluxo, evidências e indicadores auditáveis.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Produto</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#como-funciona" className="hover:text-blue-400 transition-colors">Como funciona</Link></li>
                            <li><Link href="#planos" className="hover:text-blue-400 transition-colors">Planos</Link></li>
                            <li><a href="https://app.ampario.app" className="hover:text-blue-400 transition-colors">Login Cliente</a></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contato</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <a href="mailto:contato@ampario.app" className="hover:text-white transition-colors">contato@ampario.app</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-green-500" />
                                <a href="https://wa.me/5547996582666" target="_blank" className="hover:text-white transition-colors">WhatsApp Suporte</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
                    <p>© {currentYear} Ampario Tecnologia Ltda. Todos os direitos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-zinc-300">Privacidade</Link>
                        <Link href="/terms" className="hover:text-zinc-300">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
