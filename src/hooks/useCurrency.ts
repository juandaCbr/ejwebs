"use client";

import { useSyncExternalStore } from "react";

export type Currency = "COP" | "USD";

/** Tasa de referencia USD → COP (actualizar cuando cambie). */
export const USD_COP_RATE = 3200;

const STORAGE_KEY = "currency";
const EVENT = "ejwebs:currency-change";

function readStored(): Currency {
  try {
    return localStorage.getItem(STORAGE_KEY) === "USD" ? "USD" : "COP";
  } catch {
    return "COP";
  }
}

function subscribe(callback: () => void): () => void {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// El servidor y el primer render del cliente asumen COP (moneda local por defecto).
const getServerSnapshot = (): Currency => "COP";

/**
 * Estado global de moneda (COP por defecto), compartido entre componentes vía
 * `localStorage` + un evento, sin necesidad de Provider. SSR-safe.
 */
export function useCurrency() {
  const currency = useSyncExternalStore(subscribe, readStored, getServerSnapshot);

  const setCurrency = (next: Currency) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* almacenamiento no disponible */
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return {
    currency,
    setCurrency,
    toggle: () => setCurrency(currency === "COP" ? "USD" : "COP"),
  };
}

/** Convierte un monto en COP a la moneda activa y lo formatea. */
export function formatPrice(cop: number, currency: Currency): string {
  if (currency === "USD") {
    const raw = cop / USD_COP_RATE;
    // Redondeo "comercial": múltiplos más grandes cuanto mayor es el monto.
    const step = raw < 300 ? 5 : raw < 2000 ? 10 : 50;
    const usd = Math.round(raw / step) * step;
    return `US$${usd.toLocaleString("en-US")}`;
  }
  return `$${cop.toLocaleString("es-CO")}`;
}

/** Sufijo de moneda para mostrar junto al precio (ej. "COP" / "USD"). */
export function currencyLabel(currency: Currency): string {
  return currency === "USD" ? "USD" : "COP";
}
