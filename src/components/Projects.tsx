"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/data/projects";
import { Sparkles, ArrowRight, ExternalLink, X } from "lucide-react";
import { useModalDismiss } from "@/hooks/useModalDismiss";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);
  useModalDismiss(selectedProject !== null, closeModal);

  const categories = [
    { id: "all", label: "Todos los Proyectos" },
    { id: "web-apps", label: "Web Apps & SaaS" },
    { id: "ecommerce", label: "E-Commerce Headless" },
    { id: "corporate", label: "Corporativos & Marcas" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // Helper to render high-fidelity custom UI mockup cards
  const renderVisualMockup = (project: Project) => {
    // When we have a real screenshot of the live site, show that instead of a drawn mockup.
    if (project.image) {
      return (
        <div className="force-dark w-full h-48 relative overflow-hidden border-b border-white/10 group-hover:border-pink-500/30 transition-colors">
          <Image
            src={project.image}
            alt={`Captura de pantalla real de ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512]/90 via-transparent to-transparent"></div>
          <span className="absolute top-3 right-3 text-[9px] font-mono text-white bg-black/50 px-2 py-0.5 rounded border border-white/20 uppercase tracking-wider">
            {project.liveUrl ? "Sitio en Vivo" : "Captura Real"}
          </span>
          <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-black/50 px-2 py-0.5 rounded border border-white/20">
            {project.imageBadge ?? `${project.stats[0]?.value} · ${project.stats[0]?.label}`}
          </span>
        </div>
      );
    }

    switch (project.mockupType) {
      case "dashboard":
        return (
          <div className="force-dark w-full h-48 bg-[#090e1a] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/10 group-hover:border-cyan-500/30 transition-colors">
            {/* Ambient glow in mockup */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
            
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                LIVE METRICS
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] text-slate-400">Rendimiento</div>
                <div className="text-sm font-bold text-white font-mono">99.8%</div>
              </div>
              <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] text-slate-400">Operaciones</div>
                <div className="text-sm font-bold text-cyan-400 font-mono">1.2k/s</div>
              </div>
              <div className="bg-white/[0.03] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] text-slate-400">Latencia</div>
                <div className="text-sm font-bold text-emerald-400 font-mono">32ms</div>
              </div>
            </div>

            {/* Mini simulated chart bars */}
            <div className="h-10 flex items-end gap-1 pt-1">
              {[40, 65, 30, 85, 55, 95, 75, 100, 85, 90, 60, 95].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/30 to-cyan-400 group-hover:from-cyan-500 group-hover:to-blue-400 transition-all duration-300"
                ></div>
              ))}
            </div>
          </div>
        );

      case "store":
        return (
          <div className="force-dark w-full h-48 bg-[#0e0a16] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/10 group-hover:border-pink-500/30 transition-colors">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"></div>

            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[11px] font-heading font-bold text-white tracking-widest uppercase">
                {project.client}
              </span>
              <span className="text-[10px] font-mono text-pink-400 bg-pink-950/60 px-2 py-0.5 rounded border border-pink-800/40">
                {project.stats[0]?.value} · {project.stats[0]?.label}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-2">
              <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 flex items-center justify-center border border-pink-500/30 mb-1">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
                <div className="text-[10px] font-semibold text-white">Catálogo Online</div>
                <div className="text-[9px] text-pink-300">Compra 100% Digital</div>
              </div>
              <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
                <div className="text-[9px] text-slate-400">{project.stats[1]?.label}</div>
                <div className="text-base font-bold text-emerald-400 font-mono">{project.stats[1]?.value}</div>
                <div className="text-[9px] text-slate-400">Panel de Administración</div>
              </div>
            </div>

            <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-1 rounded text-center text-[10px] font-bold text-white shadow">
              Pagos con Wompi (PSE/Tarjeta) + Nequi
            </div>
          </div>
        );

      case "corporate":
        return (
          <div className="force-dark w-full h-48 bg-[#090b14] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/10 group-hover:border-indigo-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>
            
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[11px] font-heading font-bold text-white tracking-widest uppercase">
                NEXUS GLOBAL
              </span>
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                AWWWARDS NOMINEE
              </span>
            </div>

            <div className="p-3 bg-white/[0.03] rounded-xl border border-white/10 my-2 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white mb-0.5">Showroom Cinematográfico</div>
                <div className="text-[10px] text-slate-400">Micro-interacciones 60 FPS & Video 4K</div>
              </div>
              <div className="text-right font-mono">
                <div className="text-sm font-bold text-indigo-400">+320%</div>
                <div className="text-[9px] text-slate-400">Inversionistas</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Optimización CDN Global</span>
              <span className="text-indigo-300">SSR Next.js</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="force-dark w-full h-48 bg-[#080d1a] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[11px] font-heading font-bold text-white">
                {project.client}
              </span>
              <span className="text-[10px] font-mono text-cyan-400">
                {project.stats[0]?.value}
              </span>
            </div>
            <div className="p-3 bg-white/[0.03] rounded-xl border border-white/10 my-2">
              <div className="text-xs font-bold text-white mb-1">{project.title}</div>
              <div className="text-[10px] text-slate-400 line-clamp-2">{project.summary}</div>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Stack: {project.tags.slice(0, 3).join(" • ")}
            </div>
          </div>
        );
    }
  };

  return (
    <section id="proyectos" className="relative py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-cyan top-40 -right-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="hero-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos de Éxito Reales</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Proyectos que generan <span className="text-gradient-cyan">resultados cuantificables</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Cada línea de código que escribimos en Ejwebs está pensada para mejorar métricas de retención, velocidad de carga y retorno de inversión para nuestros clientes.
          </p>
        </Reveal>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-[#040914] shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`Ver caso completo: ${project.title}`}
              className="glass-card overflow-hidden flex flex-col justify-between group cursor-pointer text-left"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div>
                {/* Visual Mockup Header */}
                {renderVisualMockup(project)}

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {project.client}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-400 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-5 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Impact Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 mb-5">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs font-bold text-cyan-300 font-mono">
                          {stat.value}
                        </div>
                        <div className="text-[9px] text-slate-400 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 mb-4">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span>Ver Caso Completo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                    >
                      <span>Visitar Sitio</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-scrim backdrop-blur-md animate-fadeIn"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-panel border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {selectedProject.categoryLabel} • {selectedProject.client}
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
                {selectedProject.title}
              </h3>
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 mb-6">
              {selectedProject.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-cyan-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Problem vs Solution */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> El Desafío
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Nuestra Solución en Ejwebs
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Tech stack used */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Stack Tecnológico Implementado
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Volver al Portafolio
              </button>
              <a
                href="#contacto"
                onClick={() => setSelectedProject(null)}
                className="btn-primary text-xs !py-2.5 !px-6"
              >
                <span>Solicitar Proyecto Similar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
