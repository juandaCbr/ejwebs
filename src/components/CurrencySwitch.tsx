"use client";

import React from "react";
import { useCurrency, type Currency } from "@/hooks/useCurrency";

const OPTIONS: { value: Currency; label: string }[] = [
  { value: "COP", label: "COP" },
  { value: "USD", label: "US$" },
];

/** Selector de moneda (COP / USD) para los precios del sitio. */
export default function CurrencySwitch({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      role="group"
      aria-label="Moneda de los precios"
      className={`flex items-center gap-0.5 rounded-xl border border-white/10 bg-white/[0.05] p-0.5 text-[11px] font-heading font-semibold ${className}`.trim()}
    >
      {OPTIONS.map((opt) => {
        const active = currency === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setCurrency(opt.value)}
            aria-pressed={active}
            className={`px-2 py-1 rounded-lg transition-colors ${
              active ? "bg-cyan-500 text-black" : "text-slate-300 hover:text-white"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
