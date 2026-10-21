import React from "react";
import { Zap, Code2, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

// TODO: reintroducir "Proyectos Entregados" y "Satisfacción de Clientes"
// cuando tengamos datos reales que los respalden (ver AGENTS.md).
export default function MetricsBar() {
  const metrics = [
    {
      icon: Zap,
      value: "<0.8s",
      label: "Tiempo de Carga Promedio",
      sublabel: "Puntuaciones Lighthouse 98+",
      color: "text-amber-400"
    },
    {
      icon: Code2,
      value: "100%",
      label: "Código Propio & Seguro",
      sublabel: "Sin plantillas genéricas pesadas",
      color: "text-emerald-400"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Soporte & Garantía",
      sublabel: "Acompañamiento continuo",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="relative py-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
              >
                <div className="mb-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/5 group-hover:border-white/20 transition-all">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="font-heading font-black text-2xl lg:text-3xl text-white tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mb-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
