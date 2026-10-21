"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import CurrencySwitch from "@/components/CurrencySwitch";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Paquetes", href: "#paquetes" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Tecnologías", href: "#stack" },
    { name: "Preguntas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Ejwebs Inicio"
        >
          <div className="relative w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Logo size={40} priority className="w-full h-full drop-shadow-[0_0_12px_rgba(33,199,240,0.25)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-white">
              Ejwebs
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase -mt-0.5">
              Software &amp; Web
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full transition-colors hover:bg-white/[0.05]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <CurrencySwitch />
          <ThemeToggle />
          <a
            href="#contacto"
            onClick={onOpenContact}
            className="btn-primary text-xs lg:text-sm !py-2 !px-5"
          >
            <span>Cotizar Proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <CurrencySwitch />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#paquetes"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-secondary w-full text-center text-sm"
              >
                Ver Paquetes y Precios
              </a>
              <a
                href="#contacto"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="btn-primary w-full text-center text-sm"
              >
                <span>Cotizar Proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
