import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { Star, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden bg-tech-grid border-t border-white/5">
      <div className="ambient-glow-purple top-20 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="hero-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Historias de Clientes</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            Lo que dicen quienes ya confían en <span className="text-gradient-cyan">Ejwebs</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            La confianza de nuestros clientes es nuestro activo más valioso. Estos son testimonios de empresas que transformaron su presencia digital con nosotros.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                    {item.highlightMetric}
                  </span>
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="force-dark w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] flex items-center justify-center font-heading font-black text-white text-sm">
                    <div className="w-full h-full bg-[#080d19] rounded-[10px] flex items-center justify-center">
                      {item.initials}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-white">
                      {item.name}
                    </h3>
                    <div className="text-xs text-slate-400">
                      {item.role} • <span className="text-cyan-400">{item.company}</span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-500 hidden sm:block">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
