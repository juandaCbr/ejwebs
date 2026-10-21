"use client";

import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Mail, Phone, MapPin, Sparkles, Clock, AlertCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";
import { submitContact, type ContactState } from "@/app/actions";
import Reveal from "@/components/Reveal";

const initialContactState: ContactState = { status: "idle", message: "" };

interface SelectedPackage {
  name: string;
  priceText: string;
  timeline: string;
}

interface ContactSectionProps {
  initialPackage?: SelectedPackage | null;
}

const DEFAULT_PROJECT_TYPE = "Sitio Web Corporativo";

function packageMessage(pkg: SelectedPackage): string {
  return `Hola ${siteConfig.name}, me interesa el paquete "${pkg.name}" (${pkg.priceText}, entrega ${pkg.timeline}).
Quisiera más información y agendar una llamada para revisar mi proyecto.`;
}

export default function ContactSection({ initialPackage }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: initialPackage?.name || DEFAULT_PROJECT_TYPE,
    budgetRange: initialPackage
      ? `${initialPackage.priceText} (paquete)`
      : "$1.000.000 – $3.000.000 COP",
    message: initialPackage ? packageMessage(initialPackage) : "",
  });

  const [state, formAction, pending] = useActionState(submitContact, initialContactState);

  // Precargar el formulario cuando llega un paquete seleccionado desde "Paquetes".
  // Patrón "ajustar estado al cambiar una prop" (sin efecto): https://react.dev/learn/you-might-not-need-an-effect
  const [seenPackage, setSeenPackage] = useState(initialPackage);
  if (initialPackage && initialPackage !== seenPackage) {
    setSeenPackage(initialPackage);
    setFormData((prev) => ({
      ...prev,
      projectType: initialPackage.name,
      budgetRange: `${initialPackage.priceText} (paquete)`,
      message: packageMessage(initialPackage),
    }));
  }

  useEffect(() => {
    if (state.status !== "success") return;
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#21C7F0", "#3E71F2", "#6B2AE8", "#9E1BE6"],
      });
    } catch (err) {
      console.error(err);
    }
  }, [state.status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Mail,
      tone: "bg-cyan-500/20 text-cyan-400",
      label: "Escríbenos por correo",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      tone: "bg-emerald-500/20 text-emerald-400",
      label: "WhatsApp comercial",
      value: siteConfig.phoneDisplay,
      href: whatsappLink(`Hola ${siteConfig.name}, deseo cotizar un proyecto`),
    },
  ];

  return (
    <section id="contacto" className="relative py-28 overflow-hidden scroll-mt-24">
      <div className="ambient-glow-cyan -top-20 -left-40"></div>
      <div className="ambient-glow-purple bottom-10 -right-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="hero-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hablemos de tu proyecto</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-5">
            ¿Listo para construir algo <span className="text-gradient-cyan">extraordinario</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Cuéntanos sobre tu empresa, objetivos y visión. Te responderemos en menos de 2 horas
            con una propuesta inicial y análisis técnico sin costo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Value props */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="font-heading font-bold text-xl text-white">
                Información directa de contacto
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors group"
                  >
                    <div className={`p-2.5 rounded-lg ${method.tone} group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">{method.label}</div>
                      <div className="text-sm font-semibold text-white">{method.value}</div>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Ubicación &amp; cobertura</div>
                    <div className="text-sm font-semibold text-white">{siteConfig.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Horario de atención</div>
                    <div className="text-sm font-semibold text-white">{siteConfig.businessHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-950/20 to-purple-950/40 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-2 text-cyan-400 font-heading font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Compromiso de calidad {siteConfig.name}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Firmamos acuerdo de confidencialidad (NDA) antes de iniciar si lo requieres. Tu
                propiedad intelectual y código te pertenecen en su totalidad desde el día uno.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-7 sm:p-10 border border-white/15 shadow-2xl relative">
              {state.status === "success" ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-2 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Gracias por confiar en <strong className="text-white">{siteConfig.name}</strong>.
                    Un líder de ingeniería o consultor comercial analizará tu proyecto y se
                    comunicará contigo en menos de 2 horas hábiles.
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-5">
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    Formulario de solicitud de proyecto
                  </h3>

                  {state.status === "error" && (
                    <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/40 flex items-center gap-2 text-xs text-rose-300">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{state.message}</span>
                    </div>
                  )}

                  {/* Honeypot anti-spam: oculto para humanos */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">No completar</label>
                    <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Tu nombre *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Ej. Juan Gómez"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(state.fieldErrors?.name)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-colors"
                      />
                      {state.fieldErrors?.name && (
                        <p className="mt-1 text-[11px] text-rose-400">{state.fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Correo corporativo *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="juan@tuempresa.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(state.fieldErrors?.email)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-colors"
                      />
                      {state.fieldErrors?.email && (
                        <p className="mt-1 text-[11px] text-rose-400">{state.fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+57 300 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Empresa o marca
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        placeholder="Nombre de tu marca"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Tipo de servicio / proyecto
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white transition-colors"
                      >
                        {initialPackage &&
                          !["Sitio Web Corporativo", "Plataforma SaaS / Web App", "E-Commerce", "Landing Page", "Rediseño & Optimización", "Mantenimiento & Cloud"].includes(
                            initialPackage.name,
                          ) && (
                            <option value={initialPackage.name}>{initialPackage.name} (paquete)</option>
                          )}
                        <option value="Sitio Web Corporativo">Sitio Web Corporativo</option>
                        <option value="Plataforma SaaS / Web App">Plataforma SaaS / Web App</option>
                        <option value="E-Commerce">E-Commerce / Tienda online</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Rediseño & Optimización">Rediseño &amp; Optimización</option>
                        <option value="Mantenimiento & Cloud">Mantenimiento &amp; Cloud</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budgetRange" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Presupuesto estimado
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white transition-colors"
                      >
                        {initialPackage && (
                          <option value={`${initialPackage.priceText} (paquete)`}>
                            {initialPackage.priceText} (paquete)
                          </option>
                        )}
                        <option value="Menos de $1.000.000 COP">Menos de $1.000.000 COP</option>
                        <option value="$1.000.000 – $3.000.000 COP">$1.000.000 – $3.000.000 COP</option>
                        <option value="$3.000.000 – $7.000.000 COP">$3.000.000 – $7.000.000 COP</option>
                        <option value="Más de $7.000.000 COP">Más de $7.000.000 COP</option>
                        <option value="Aún no lo sé">Aún no lo sé</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Detalles del proyecto o mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe los requerimientos clave, objetivos de negocio, referencias o plazo deseado..."
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(state.fieldErrors?.message)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-colors resize-none"
                    ></textarea>
                    {state.fieldErrors?.message && (
                      <p className="mt-1 text-[11px] text-rose-400">{state.fieldErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={pending}
                    className="btn-primary w-full text-center text-sm !py-3.5 shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {pending ? (
                      <span>Enviando propuesta...</span>
                    ) : (
                      <>
                        <span>Enviar solicitud de proyecto</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500">
                    Tus datos están protegidos bajo estricta política de privacidad. Cero spam.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
