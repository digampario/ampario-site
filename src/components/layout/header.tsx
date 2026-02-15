"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Como funciona", href: "#como-funciona" },
        { name: "Planos", href: "#planos" },
        { name: "Contato", href: "#contato" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#0a0f1c]/80 backdrop-blur-md border-b border-white/5 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-10 transition-transform duration-300 group-hover:scale-105">
                        {/* Fallback to text if image not present, but user said images are in public/img */}
                        <Image
                            src="/Logo/ampario-logo.png"
                            alt="Ampario"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                    <div className="leading-tight">
                        <p className="text-lg font-bold font-heading tracking-tight text-white">Ampario</p>
                        <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">Manutenção HVAC</p>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA & MOBILE TOGGLE */}
                <div className="flex items-center gap-4">
                    <Button variant="default" size="sm" className="hidden md:flex" asChild>
                        <Link href="#contato">Solicitar Demo</Link>
                    </Button>

                    <button
                        className="md:hidden text-zinc-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0f1c] border-b border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-zinc-300 hover:text-white py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full" asChild>
                                <Link href="#contato">Solicitar Demo</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
