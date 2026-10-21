import React from "react";
import { processSteps } from "@/data/process";
import { Compass, Palette, Code2, Rocket, Sparkles, CheckCircle2, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Process() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case "Figma":
        return <Palette className="w-5 h-5 text-purple-400" />;
      case "Code":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="metodologia" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="hero-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestra Metodología</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            De la idea al lanzamiento en <span className="text-gradient-cyan">4 pasos claros</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Garantizamos entregas predecibles, comunicación constante y cero sorpresas. Nuestro proceso está diseñado para darte visibilidad en cada etapa.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-500/40 relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all"></div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-heading font-black text-3xl text-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono text-slate-300 mb-3">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{item.duration}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {item.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
