"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faq";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="hero-badge mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolviendo tus Dudas</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Preguntas <span className="text-gradient-cyan">Frecuentes</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Todo lo que necesitas saber antes de arrancar tu proyecto de desarrollo web con nosotros.
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-card overflow-hidden transition-all duration-300 border-white/10"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-500/20 text-cyan-300" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra help bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm text-white">¿Tienes una pregunta específica o requerimiento único?</div>
              <div className="text-xs text-slate-400">Escríbenos directamente y te asesoramos sin costo ni compromiso.</div>
            </div>
          </div>
          <a
            href={whatsappLink(`Hola ${siteConfig.name}, tengo una consulta sobre desarrollo web`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs !py-2.5 !px-5 whitespace-nowrap"
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
