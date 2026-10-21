"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Progreso de scroll (0 a 1) de un elemento a medida que sale por arriba del
 * viewport: 0 mientras el elemento no ha empezado a salir, 1 cuando ya se
 * desplazó una altura completa hacia arriba. Pensado para efectos sutiles
 * de "encogerse al bajar" (tipo Apple), enlazados al scroll real en vez de
 * un simple fundido on/off.
 *
 * No corre nada en SSR y se desactiva por completo con
 * `prefers-reduced-motion: reduce` (progress se queda fijo en 0).
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      const height = rect.height || 1;
      const raw = -rect.top / height;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}
