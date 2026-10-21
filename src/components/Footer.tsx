import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import Logo from "@/components/Logo";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "X / Twitter",
    href: siteConfig.social.twitter,
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Col 1 & 2: Branding */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#top" className="flex items-center gap-2.5 group">
              <Logo size={36} className="w-9 h-9 shrink-0" />
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                {siteConfig.name}
              </span>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Agencia boutique de desarrollo web y software a medida. Diseñamos productos digitales ultra veloces con <span className="text-cyan-400 font-medium">Next.js &amp; React</span> que convierten visitas en clientes de alto valor.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Servicios
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Desarrollo Web Next.js</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Aplicaciones SaaS a Medida</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">E-Commerce Headless</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Diseño UI/UX en Figma</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">SEO &amp; Core Web Vitals</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Infraestructura &amp; Cloud</a></li>
            </ul>
          </div>

          {/* Col 4: Navegación */}
          <div>
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Navegación
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#proyectos" className="hover:text-cyan-400 transition-colors">Casos de Estudio</a></li>
              <li><a href="#paquetes" className="hover:text-cyan-400 transition-colors">Paquetes y Precios</a></li>
              <li><a href="#metodologia" className="hover:text-cyan-400 transition-colors">Nuestra Metodología</a></li>
              <li><a href="#stack" className="hover:text-cyan-400 transition-colors">Tecnologías Utilizadas</a></li>
              <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Agendar Llamada Técnica</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Col 5: Certificación & Stack */}
          <div>
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-slate-300 mb-4">
              Garantía Técnica
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Lighthouse 99+ Garantizado</span>
              </div>
              <div className="text-slate-400 text-[11px] leading-relaxed">
                Cada desarrollo es sometido a más de 40 pruebas de rendimiento, accesibilidad y ciberseguridad antes de su publicación.
              </div>
              <div className="text-[10px] font-mono text-cyan-300 pt-1 border-t border-white/5">
                Next.js 16 • React 19 • TS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {year} {siteConfig.name}. Todos los derechos reservados. Ingeniería de Software &amp; Web.</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="hover:text-slate-300 transition-colors">Privacidad</Link>
            <span aria-hidden="true">•</span>
            <Link href="/terminos" className="hover:text-slate-300 transition-colors">Términos</Link>
            <span aria-hidden="true">•</span>
            <a
              href="#top"
              className="flex items-center gap-1.5 p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
