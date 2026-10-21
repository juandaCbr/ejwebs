"use client";

import React from "react";
import { Check, ArrowRight, Sparkles, Clock, Wrench, TrendingUp } from "lucide-react";
import { packagesData, maintenanceNote, type ServicePackage } from "@/data/packages";
import { useCurrency, formatPrice, currencyLabel } from "@/hooks/useCurrency";
import Reveal from "@/components/Reveal";

export interface SelectedPackage {
  name: string;
  priceText: string;
  timeline: string;
}

interface PackagesProps {
  onSelectPackage?: (pkg: SelectedPackage) => void;
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  const { currency } = useCurrency();

  const priceText = (pkg: { priceCop: number; priceKind?: "fixed" | "from" }) => {
    const value = formatPrice(pkg.priceCop, currency);
    return pkg.priceKind === "from" ? `desde ${value}` : value;
  };

  const handleSelect = (pkg: ServicePackage) => {
    onSelectPackage?.({
      name: pkg.name,
      priceText: `${priceText(pkg)} ${currencyLabel(currency)}`,
      timeline: pkg.timeline,
    });
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="paquetes" className="relative py-28 overflow-hidden">
      <div className="ambient-glow-cyan top-20 -left-40" />
      <div className="ambient-glow-purple bottom-10 -right-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="hero-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paquetes &amp; Precios Claros</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Elige el paquete que <span className="text-gradient-cyan">se ajusta a tu proyecto</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Cada plan no es solo &ldquo;más páginas&rdquo;: suma capacidades reales de desarrollo
            —base de datos, cuentas de usuario, pagos, software a medida—. Estos son precios de
            referencia; la propuesta final se ajusta a tu proyecto y te asesoramos sin costo.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-card p-7 flex flex-col relative overflow-hidden ${
                pkg.highlighted ? "border-cyan-500/50 shadow-lg shadow-cyan-500/10" : ""
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute top-0 right-0 text-[10px] font-heading font-bold uppercase tracking-wider bg-cyan-500 text-black px-3 py-1 rounded-bl-xl">
                  Más elegido
                </span>
              )}

              <h3 className="font-heading font-bold text-lg text-white mb-1.5">{pkg.name}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-5 min-h-[2.5rem]">
                {pkg.tagline}
              </p>

              <div className="mb-1 flex items-baseline gap-1.5">
                <span className="font-heading font-black text-2xl sm:text-3xl text-white">
                  {priceText(pkg)}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{currencyLabel(currency)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-5">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span>Entrega: {pkg.timeline}</span>
              </div>

              {pkg.stepUp && (
                <div className="mb-5 p-3 rounded-xl bg-cyan-500/[0.07] border border-cyan-500/25">
                  <div className="flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-wider text-cyan-300 mb-1">
                    <TrendingUp className="w-3 h-3" />
                    Por qué subir de plan
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{pkg.stepUp}</p>
                </div>
              )}

              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="text-[11px] text-slate-400 mb-4 pt-4 border-t border-white/10">
                <span className="text-slate-300 font-medium">Ideal para:</span> {pkg.bestFor}
              </div>

              <button
                onClick={() => handleSelect(pkg)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  pkg.highlighted
                    ? "btn-primary !py-2.5"
                    : "bg-white/[0.04] hover:bg-cyan-500 hover:text-black border border-white/10 hover:border-cyan-400 text-slate-200"
                }`}
              >
                <span>Solicitar este paquete</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <Wrench className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="font-heading font-bold text-sm text-white">
              Mantenimiento mensual — desde {formatPrice(maintenanceNote.priceCop, currency)}{" "}
              {currencyLabel(currency)}/mes
            </div>
            <div className="text-xs text-slate-400">{maintenanceNote.text}</div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-[11px] text-slate-500">
          Precios de referencia sujetos a los requerimientos finales de cada proyecto.
          Conversión USD calculada a una tasa de $3.200 COP.
        </p>
      </div>
    </section>
  );
}
