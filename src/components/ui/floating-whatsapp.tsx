"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000); // Show after 2 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="https://wa.me/5547996582666?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Ampario."
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.6)] transition-shadow cursor-pointer group"
                >
                    <span className="absolute w-full h-full rounded-full bg-green-500 opacity-75 animate-ping group-hover:animate-none"></span>
                    <MessageCircle className="w-8 h-8 text-white fill-white relative z-10" />

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                        Fale Conosco
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
                    </div>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
