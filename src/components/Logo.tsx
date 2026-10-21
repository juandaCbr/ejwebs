import React from "react";
import Image from "next/image";
import logoMark from "@/logo.png";

interface LogoProps {
  /** Lado del isotipo en px (default: 40). */
  size?: number;
  className?: string;
  /** Cargar con prioridad (usar solo en la cabecera). */
  priority?: boolean;
}

/** Isotipo "EJ" de Ejwebs (degradado cian → púrpura, fondo transparente). */
export default function Logo({ size = 40, className = "", priority = false }: LogoProps) {
  return (
    <Image
      src={logoMark}
      alt="Ejwebs"
      width={size}
      height={size}
      priority={priority}
      className={`object-contain ${className}`.trim()}
    />
  );
}
