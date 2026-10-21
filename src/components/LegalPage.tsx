import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site";

interface LegalPageProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-canvas text-slate-100 relative overflow-hidden">
      <div className="ambient-glow-cyan -top-40 -left-40" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-10">
          {siteConfig.name} · Última actualización: {updatedAt}
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300 [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-lg [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-2 [&_a]:text-cyan-400 [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200/90">
            <strong>TODO:</strong> este es un texto legal de referencia. Revisalo con un
            profesional y adaptalo a la jurisdicción y prácticas reales de {siteConfig.name} antes
            de publicar.
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
