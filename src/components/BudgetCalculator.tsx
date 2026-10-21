"use client";

import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, Zap } from "lucide-react";
import { formatThousands } from "@/data/site";
import Reveal from "@/components/Reveal";

/** Handler de teclado para elementos con role="button" (Enter / Espacio). */
function activateOnKey(action: () => void) {
  return (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };
}

interface BudgetCalculatorProps {
  onSelectEstimate?: (estimateData: {
    projectType: string;
    scope: string;
    addons: string[];
    estimatedPrice: number;
    timeline: string;
  }) => void;
}

export default function BudgetCalculator({ onSelectEstimate }: BudgetCalculatorProps) {
  const [projectType, setProjectType] = useState<string>("saas");
  const [scope, setScope] = useState<string>("medium");
  const [currency, setCurrency] = useState<"USD" | "COP">("USD");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "seo",
    "cms",
  ]);

  const projectTypes = [
    {
      id: "landing",
      name: "Landing Page de Alta Conversión",
      desc: "Diseñada específicamente para campañas de pauta y captación de leads",
      basePrice: 450,
      baseWeeks: 2,
    },
    {
      id: "corporate",
      name: "Sitio Web Corporativo Premium",
      desc: "Presencia digital sólida, institucional, páginas de servicios y blog",
      basePrice: 850,
      baseWeeks: 3,
    },
    {
      id: "ecommerce",
      name: "E-Commerce Headless / Tienda",
      desc: "Catálogo de productos, carrito sin fricción y pasarelas de pago integradas",
      basePrice: 1350,
      baseWeeks: 5,
    },
    {
      id: "saas",
      name: "Plataforma SaaS / Web App",
      desc: "Aplicación interactiva a medida con paneles, base de datos y autenticación",
      basePrice: 1950,
      baseWeeks: 6,
    },
  ];

  const scopes = [
    { id: "compact", label: "Compacto (1 a 4 secciones)", multiplier: 1.0, weeksAdd: 0 },
    { id: "medium", label: "Estándar (5 a 8 páginas/módulos)", multiplier: 1.25, weeksAdd: 1 },
    { id: "large", label: "Amplio (9 a 15+ páginas o módulos)", multiplier: 1.6, weeksAdd: 2 },
  ];

  const addonsList = [
    { id: "cms", label: "Panel CMS Autogestionable (Sanity / Strapi)", price: 280 },
    { id: "seo", label: "Pack SEO Técnico & Core Web Vitals 100%", price: 220 },
    { id: "payments", label: "Integración de Pasarela de Pagos (Stripe/Wompi)", price: 290 },
    { id: "i18n", label: "Soporte Multi-idioma Internacional", price: 200 },
    { id: "auth", label: "Autenticación de Usuarios & Roles", price: 340 },
    { id: "analytics", label: "Setup Avanzado Google Analytics 4 & Meta Pixel", price: 160 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const currentType = projectTypes.find((t) => t.id === projectType) || projectTypes[0];
  const currentScope = scopes.find((s) => s.id === scope) || scopes[0];

  const baseCalculated = currentType.basePrice * currentScope.multiplier;
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = addonsList.find((a) => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const totalPriceUSD = Math.round(baseCalculated + addonsTotal);
  const totalPriceCOP = Math.round(totalPriceUSD * 4150); // Tipo de cambio referencial

  const totalWeeks = currentType.baseWeeks + currentScope.weeksAdd;

  const handleSendToContact = () => {
    const data = {
      projectType: currentType.name,
      scope: currentScope.label,
      addons: selectedAddons.map((id) => addonsList.find((a) => a.id === id)?.label || id),
      estimatedPrice: totalPriceUSD,
      timeline: `${totalWeeks} a ${totalWeeks + 1} semanas`,
    };

    if (onSelectEstimate) {
      onSelectEstimate(data);
    }

    const contactEl = document.getElementById("contacto");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cotizador" className="relative py-28 overflow-hidden bg-surface">
      {/* Background radial glow */}
      <div className="ambient-glow-cyan top-20 -left-40"></div>
      <div className="ambient-glow-purple bottom-10 -right-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="hero-badge mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparencia & Presupuesto Claro</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Cotizador <span className="text-gradient-cyan">Interactivo en Tiempo Real</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Personaliza las especificaciones de tu proyecto para obtener un estimado aproximado de inversión y tiempo de desarrollo en segundos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Configurator */}
          <div className="lg:col-span-8 glass-card p-6 sm:p-8 space-y-8">
            {/* Step 1: Project Type */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-heading font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">
                    1
                  </span>
                  Tipo de Proyecto
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <div
                    key={type.id}
                    role="radio"
                    aria-checked={projectType === type.id}
                    tabIndex={0}
                    onClick={() => setProjectType(type.id)}
                    onKeyDown={activateOnKey(() => setProjectType(type.id))}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      projectType === type.id
                        ? "bg-cyan-950/40 border-cyan-400 shadow-md shadow-cyan-500/10"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="font-heading font-bold text-sm text-white">
                        {type.name}
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          projectType === type.id
                            ? "border-cyan-400 bg-cyan-400"
                            : "border-white/20"
                        }`}
                      >
                        {projectType === type.id && <Check className="w-3 h-3 text-black" />}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Project Scope */}
            <div>
              <label className="text-sm font-heading font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">
                  2
                </span>
                Alcance y Dimensiones
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scopes.map((item) => (
                  <div
                    key={item.id}
                    role="radio"
                    aria-checked={scope === item.id}
                    tabIndex={0}
                    onClick={() => setScope(item.id)}
                    onKeyDown={activateOnKey(() => setScope(item.id))}
                    className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all duration-200 ${
                      scope === item.id
                        ? "bg-cyan-950/40 border-cyan-400 shadow"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <label className="text-sm font-heading font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">
                  3
                </span>
                Módulos y Funcionalidades Adicionales
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onClick={() => toggleAddon(addon.id)}
                      onKeyDown={activateOnKey(() => toggleAddon(addon.id))}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? "bg-purple-950/30 border-purple-500/60"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? "border-purple-400 bg-purple-500"
                              : "border-white/20"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-xs text-slate-300 font-medium">
                          {addon.label}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 shrink-0 ml-2">
                        +${addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="glass-card p-6 sm:p-7 border-cyan-500/40 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Estimación Preliminar
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-white">
                    Resumen del Proyecto
                  </h3>
                </div>

                {/* Currency switcher */}
                <div className="flex bg-surface-elevated p-1 rounded-lg border border-white/10 text-xs font-mono">
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`px-2 py-0.5 rounded ${
                      currency === "USD" ? "bg-cyan-500 text-black font-bold" : "text-slate-400"
                    }`}
                  >
                    USD
                  </button>
                  <button
                    onClick={() => setCurrency("COP")}
                    className={`px-2 py-0.5 rounded ${
                      currency === "COP" ? "bg-cyan-500 text-black font-bold" : "text-slate-400"
                    }`}
                  >
                    COP
                  </button>
                </div>
              </div>

              {/* Price Display */}
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 mb-6 text-center">
                <div className="text-xs text-slate-400 mb-1">Inversión Aproximada</div>
                <div className="font-heading font-black text-3xl sm:text-4xl text-white">
                  {currency === "USD"
                    ? `$${formatThousands(totalPriceUSD, ",")} USD`
                    : `$${formatThousands(totalPriceCOP, ".")} COP`}
                </div>
                <div className="text-[11px] text-cyan-300 font-medium mt-1">
                  *Precio orientativo sujeto a especificaciones finales
                </div>
              </div>

              {/* Timeline & Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Plazo de Entrega:
                  </span>
                  <span className="font-semibold text-white">
                    {totalWeeks} a {totalWeeks + 1} semanas
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    Tecnología:
                  </span>
                  <span className="font-semibold text-white">Next.js 16 & React</span>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Garantía:
                  </span>
                  <span className="font-semibold text-emerald-400">30 Días de Soporte 100%</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleSendToContact}
                className="btn-primary w-full text-center text-sm !py-3 mb-3 shadow-xl"
              >
                <span>Solicitar Esta Cotización</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400">
                Respuesta en menos de 2 horas hábiles vía WhatsApp o correo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
