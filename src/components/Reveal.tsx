"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  /** Retraso de la animación en ms (para escalonar elementos hermanos). */
  delay?: number;
  className?: string;
}

/**
 * Envuelve contenido para que aparezca con un fundido hacia arriba
 * al entrar en el viewport. Respeta `prefers-reduced-motion` vía CSS.
 *
 * `once: false` para que la animación se repita cada vez que el elemento
 * entra en pantalla (subiendo o bajando), no solo la primera vez.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
