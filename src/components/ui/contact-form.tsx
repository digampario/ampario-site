"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Smartphone } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `*Novo Contato via Site*\n\nNome: ${formData.name}\nEmpresa: ${formData.company}\nMensagem: ${formData.message}`;
        const url = `https://wa.me/5547996582666?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 text-left bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div>
                <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1">Nome</label>
                <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="company" className="block text-xs font-medium text-zinc-400 mb-1">Empresa</label>
                <input
                    type="text"
                    id="company"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1">Mensagem (Opcional)</label>
                <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 resize-none"
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>
            <Button type="submit" className="w-full h-12 text-base font-semibold shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                <Smartphone className="w-4 h-4 mr-2" /> Enviar no WhatsApp
            </Button>
            <p className="text-[10px] text-center text-zinc-500">
                Seus dados serão enviados diretamente para nosso WhatsApp oficial.
            </p>
        </form>
    );
}
