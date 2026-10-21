"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Botón para alternar tema claro / oscuro.
 *
 * El tema inicial lo fija el script inline de `layout.tsx` (sin parpadeo).
 * Aquí no usamos estado de React: el icono visible lo decide el CSS según
 * `[data-theme]` en <html>, y al hacer clic leemos/escribimos ese atributo.
 * Así evitamos cualquier desajuste de hidratación.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* almacenamiento no disponible: el cambio vale para esta sesión */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar modo claro / oscuro"
      title="Alternar modo claro / oscuro"
      className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors ${className}`.trim()}
    >
      <Sun className="theme-icon-dark w-[18px] h-[18px]" />
      <Moon className="theme-icon-light w-[18px] h-[18px]" />
    </button>
  );
}
