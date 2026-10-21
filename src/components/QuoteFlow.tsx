"use client";

import React, { useState } from "react";
import Packages, { type SelectedPackage } from "@/components/Packages";
import ContactSection from "@/components/ContactSection";

/**
 * Isla cliente: coordina el paquete elegido en <Packages> con la precarga
 * del formulario de <ContactSection>. `children` se recibe desde el Server
 * Component padre (page.tsx) y se renderiza entre ambos, así las secciones
 * que van en medio (ej. Metodología, Tecnologías) mantienen su naturaleza
 * de Server Component en vez de importarse aquí dentro.
 */
export default function QuoteFlow({ children }: { children?: React.ReactNode }) {
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage | null>(null);

  return (
    <>
      <Packages onSelectPackage={setSelectedPackage} />
      {children}
      <ContactSection initialPackage={selectedPackage} />
    </>
  );
}
