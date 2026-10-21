"use client";

import { useEffect } from "react";

/**
 * Cierra un modal con la tecla Escape y bloquea el scroll del fondo mientras está abierto.
 * Pasá `onClose` sólo cuando el modal esté abierto (o `undefined`/null para no hacer nada).
 */
export function useModalDismiss(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);
}
