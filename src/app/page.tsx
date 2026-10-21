import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import QuoteFlow from "@/components/QuoteFlow";
import TechStack from "@/components/TechStack";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
// Ocultas por ahora (no eliminar): <Testimonials />
// import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-canvas bg-tech-grid text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Presentation */}
      <Hero />

      {/* Social Proof / Metrics Bar */}
      <MetricsBar />

      {/* Core Services Section */}
      <Services />

      {/* Projects Showcase & Case Studies */}
      <Projects />

      {/* Packages → Methodology → Tech Stack → Contact (isla cliente para precargar el formulario;
          Metodología y Stack van como children para mantenerse como Server Components) */}
      <QuoteFlow>
        {/* 4-Step Agency Methodology */}
        <Process />

        {/* Cutting Edge Tech Stack */}
        <TechStack />
      </QuoteFlow>

      {/* Frequently Asked Questions (última sección de contenido) */}
      <Faq />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
