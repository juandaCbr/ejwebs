"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Deja de observar tras la primera aparición (default: true). */
  once?: boolean;
  /** Margen del root para adelantar/atrasar el disparo (default: "0px 0px -12% 0px"). */
  rootMargin?: string;
  /** Proporción visible para considerar "en vista" (default: 0). */
  threshold?: number;
}

/**
 * Devuelve un ref y un booleano que indica si el elemento está en el viewport.
 * Pensado para animaciones de entrada al hacer scroll.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
) {
  const { once = true, rootMargin = "0px 0px -10% 0px", threshold = 0 } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Sin soporte de IntersectionObserver: mostrar sin animación.
    if (typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, inView };
}
