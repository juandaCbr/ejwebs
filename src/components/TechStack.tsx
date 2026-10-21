"use client";

import React, { useState } from "react";
import { Sparkles, Cpu, Layers, Terminal, Shield, Zap, Globe, Database, Palette, Boxes, Component, Rocket, Smartphone } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function TechStack() {
  const technologies = [
    {
      name: "Next.js 16",
      category: "Frontend Framework",
      role: "App Router, Turbopack, SSR, SSG y Optimización Edge",
      icon: Zap,
      color: "text-white",
      badge: "Core Engine"
    },
    {
      name: "React 19",
      category: "Librería UI",
      role: "Componentes reactivos y Server Components",
      icon: Cpu,
      color: "text-cyan-400",
      badge: "Estándar Global"
    },
    {
      name: "Angular",
      category: "Framework Frontend",
      role: "Aplicaciones empresariales robustas y a gran escala",
      icon: Boxes,
      color: "text-rose-400",
      badge: "Enterprise"
    },
    {
      name: "Vue & Nuxt",
      category: "Framework Frontend",
      role: "Interfaces ágiles con curva de aprendizaje corta",
      icon: Component,
      color: "text-emerald-400",
      badge: "Rápido de Iterar"
    },
    {
      name: "Astro",
      category: "Sitios de Contenido",
      role: "Sitios y blogs ultraligeros con cero JS por defecto",
      icon: Rocket,
      color: "text-orange-400",
      badge: "Máxima Velocidad"
    },
    {
      name: "React Native & Expo",
      category: "Apps Móviles",
      role: "Apps iOS y Android desde una sola base de código",
      icon: Smartphone,
      color: "text-sky-400",
      badge: "Multiplataforma"
    },
    {
      name: "TypeScript",
      category: "Lenguaje Tipado",
      role: "Seguridad de tipos y arquitectura mantenible",
      icon: Terminal,
      color: "text-blue-400",
      badge: "Zero Bug Policy"
    },
    {
      name: "Modern CSS & Tailwind",
      category: "Sistemas de Estilo",
      role: "Tokens de diseño, animaciones 60fps y responsividad",
      icon: Layers,
      color: "text-teal-400",
      badge: "Pixel Perfect"
    },
    {
      name: "Node.js & Serverless",
      category: "Backend & APIs",
      role: "APIs RESTful y servicios de baja latencia",
      icon: Globe,
      color: "text-emerald-400",
      badge: "High Throughput"
    },
    {
      name: "PostgreSQL & Supabase",
      category: "Bases de Datos",
      role: "Persistencia relacional y tiempo real",
      icon: Database,
      color: "text-sky-400",
      badge: "ACID Compliant"
    },
    {
      name: "Vercel & AWS Edge",
      category: "Infraestructura Cloud",
      role: "Despliegues continuos CI/CD y 99.9% Uptime",
      icon: Shield,
      color: "text-purple-400",
      badge: "Global CDN"
    },
    {
      name: "Figma & Design Systems",
      category: "Diseño & Prototipado",
      role: "Arquitectura visual de interfaces antes del código",
      icon: Palette,
      color: "text-pink-400",
      badge: "UI/UX Master"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = technologies[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="stack" className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ingeniería Tecnológica</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Construido con el <span className="text-gradient-cyan">stack más potente</span> del mundo
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No utilizamos atajos obsoletos. Apostamos exclusivamente por herramientas líderes adoptadas por gigantes de la tecnología para garantizar velocidad, seguridad y longevidad técnica.
          </p>
        </Reveal>

        {/* Interactive pill selector — toca una tecnología para ver su detalle */}
        <Reveal className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            const isActive = idx === activeIndex;
            return (
              <button
                key={tech.name}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-pressed={isActive}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-cyan-500 text-[#040914] border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border-white/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#040914]" : tech.color}`} />
                <span>{tech.name}</span>
              </button>
            );
          })}
        </Reveal>

        {/* Detail panel for the selected technology */}
        <Reveal className="max-w-2xl mx-auto">
          <div
            key={active.name}
            className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 animate-fadeIn"
          >
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 self-start">
              <ActiveIcon className={`w-7 h-7 ${active.color}`} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  {active.category}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/30">
                  {active.badge}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-1.5">
                {active.name}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                {active.role}
              </p>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono pt-3 border-t border-white/5">
                <span>Adopción Enterprise</span>
                <span className="text-emerald-400">✓ Activo</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
