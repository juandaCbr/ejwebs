"use client";

import React, { useCallback, useState } from "react";
import { servicesData, Service } from "@/data/services";
import { Code2, Layers, Palette, ShoppingBag, TrendingUp, CloudLightning, ArrowRight, CheckCircle, Sparkles, X } from "lucide-react";
import { useModalDismiss } from "@/hooks/useModalDismiss";
import Reveal from "@/components/Reveal";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const closeModal = useCallback(() => setSelectedService(null), []);
  useModalDismiss(selectedService !== null, closeModal);

  const getIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-fuchsia-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case "CloudLightning":
        return <CloudLightning className="w-6 h-6 text-blue-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="servicios" className="relative py-28 overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="ambient-glow-purple -bottom-40 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="hero-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servicios de Alta Especialización</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Soluciones web diseñadas para <span className="text-gradient-cyan">crecer y escalar</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No creamos simples páginas web. Construimos herramientas digitales de conversión masiva, con arquitecturas seguras y código moderno.
          </p>
        </Reveal>

        {/* Services Grid */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-card p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card ambient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500"></div>

              <div>
                {/* Icon & Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    Ejwebs Pro
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Features List */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-5">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button to open detail modal */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-cyan-500 hover:text-black border border-white/10 hover:border-cyan-400 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>Conocer Más & Entregables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-scrim backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedService.title}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-panel border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Especialidad</span>
                <h3 className="text-2xl font-heading font-extrabold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-3">
                  Características Clave
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-3">
                  Entregables Garantizados
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cerrar
              </button>
              <a
                href="#contacto"
                onClick={() => setSelectedService(null)}
                className="btn-primary text-xs !py-2.5 !px-6"
              >
                <span>Cotizar Este Servicio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
