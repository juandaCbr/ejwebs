"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Code, Globe, Activity, Terminal } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  // Efecto "se encoge al bajar" (tipo Apple) en el mockup grande de la derecha.
  const { ref: mockupRef, progress: shrinkProgress } = useScrollProgress<HTMLDivElement>();

  const sampleCode = `// app/api/growth/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const agencyMetrics = {
    partner: "Ejwebs",
    stack: ["Next.js 16", "React 19", "TypeScript"],
    lighthouse: { performance: 100, seo: 100, accessibility: 100 },
    avgLoadTime: "0.6s",
    status: "READY_FOR_DEPLOYMENT"
  };

  return NextResponse.json(agencyMetrics, {
    headers: { 'Cache-Control': 's-maxage=86400, stale-while-revalidate' }
  });
}`;

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="ambient-glow-cyan top-12 -left-40"></div>
      <div className="ambient-glow-purple top-32 -right-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status pill */}
            <div className="hero-badge mb-6 animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>✦ Agencia de Desarrollo Web Premium & Software</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white mb-6">
              Creamos productos digitales que <span className="text-gradient-cyan">multiplican tus ventas</span> y transforman tu marca.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-8">
              En <strong className="text-white font-semibold">Ejwebs</strong> combinamos ingeniería de software de vanguardia en 
              <span className="text-cyan-400 font-medium"> Next.js & React</span> con diseño UI/UX de nivel mundial para construir plataformas web ultra-rápidas y con resultados garantizados.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a href="#paquetes" className="btn-primary">
                <span>Ver Paquetes y Precios</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#proyectos" className="btn-secondary">
                <span>Ver Casos de Éxito</span>
              </a>
            </div>

            {/* Trust Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Lighthouse 99/100</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">&lt; 0.8s Carga Real</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Código Propio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Browser & Tech Mockup */}
          <div
            ref={mockupRef}
            className="lg:col-span-5 relative w-full group"
            style={{
              transform: `scale(${1 - shrinkProgress * 0.12}) translateY(${shrinkProgress * 26}px)`,
              opacity: 1 - shrinkProgress * 0.55,
              willChange: "transform, opacity",
            }}
          >
            {/* Glowing Backdrop Behind Mockup */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

            {/* Browser Window Frame — ilustración siempre en oscuro (.force-dark) */}
            <div className="force-dark relative rounded-2xl bg-[#0b101e]/90 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header / Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080d19] border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>

                {/* Fake URL Bar */}
                <div className="flex items-center gap-2 bg-[#12192c] px-3 py-1 rounded-full border border-white/10 text-[11px] text-slate-300 font-mono">
                  <span className="text-cyan-400">https://</span>
                  <span>ejwebs.com/enterprise</span>
                </div>

                {/* View switcher */}
                <div className="flex items-center gap-1 bg-[#141b30] p-1 rounded-lg text-[10px] font-semibold">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeTab === "preview" ? "bg-cyan-500 text-black shadow" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeTab === "code" ? "bg-cyan-500 text-black shadow" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Código
                  </button>
                </div>
              </div>

              {/* Window Content */}
              {activeTab === "preview" ? (
                <div className="p-5 space-y-4">
                  {/* Performance metric spotlight */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 via-blue-950/20 to-purple-950/30 border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-cyan-300 font-medium">Puntuación Google Lighthouse</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      </div>
                      <div className="text-2xl font-heading font-black text-white flex items-baseline gap-1">
                        100 <span className="text-emerald-400 text-sm font-bold">/ 100 Óptimo</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-emerald-400 flex items-center justify-center font-bold text-emerald-400 text-sm bg-emerald-950/40">
                      100%
                    </div>
                  </div>

                  {/* Micro dashboard layout preview */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                        <span>Latencia TTFB</span>
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div className="text-lg font-bold text-white font-mono">38 ms</div>
                      <div className="text-[10px] text-emerald-400 font-medium">99.9% más rápido que WordPress</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                        <span>Conversión Estimada</span>
                        <Activity className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <div className="text-lg font-bold text-white font-mono">+185%</div>
                      <div className="text-[10px] text-cyan-400 font-medium">Arquitectura optimizada</div>
                    </div>
                  </div>

                  {/* Live Simulation Card */}
                  <div className="p-3.5 rounded-xl bg-[#070b16] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Despliegue Global Edge</div>
                        <div className="text-[10px] text-slate-400">CDN en 320+ ciudades mundiales</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      LIVE ACTIVE
                    </span>
                  </div>

                  {/* Tech stack badge strip */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5">
                    <span>Stack: Next.js 16 • React 19 • TypeScript</span>
                    <span className="text-cyan-400 font-mono">v3.2.0</span>
                  </div>
                </div>
              ) : (
                /* Code View */
                <div className="p-4 bg-[#050913] font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto">
                  <div className="flex items-center justify-between mb-2 text-slate-500 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-1.5 text-cyan-400">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>app/api/growth/route.ts</span>
                    </div>
                    <span className="text-[10px]">TypeScript</span>
                  </div>
                  <pre className="text-slate-300">
                    <code>{sampleCode}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Floating Floating Accent Badges */}
            <div className="absolute -bottom-6 -left-6 bg-surface/95 border border-cyan-500/30 p-3 rounded-2xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Velocidad Extrema</div>
                <div className="text-[10px] text-slate-400">Renderizado híbrido SSR/SSG</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 bg-surface/95 border border-purple-500/30 p-3 rounded-2xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-float-delayed">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Next.js 16 Ready</div>
                <div className="text-[10px] text-slate-400">Turbopack & React 19</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
