/**
 * Configuración central del sitio.
 * TODO: reemplazá todos los valores marcados con "TODO" por los datos reales de la agencia.
 */
export const siteConfig = {
  name: "Ejwebs",
  legalName: "Ejwebs Studio", // TODO: razón social real
  tagline: "Software & Web",
  description:
    "En Ejwebs creamos sitios web ultra-rápidos, plataformas SaaS escalables y e-commerce headless con Next.js, React y diseño UI/UX de vanguardia.",

  // TODO: dominio final en producción (sin barra final)
  url: "https://ejwebs.com",

  // Contacto — TODO: datos reales
  email: "contacto@ejwebs.com",
  phoneDisplay: "+57 (300) 123-4567",
  // Número para enlaces wa.me: solo dígitos, con código de país, sin "+"
  whatsapp: "573001234567",
  location: "Bucaramanga, Santander, Colombia · Remoto global",
  businessHours: "Lunes a viernes: 8:00 AM – 6:00 PM (COT)",

  // Redes — TODO: URLs reales
  social: {
    github: "https://github.com/ejwebs",
    linkedin: "https://www.linkedin.com/company/ejwebs",
    twitter: "https://twitter.com/ejwebs",
    instagram: "https://www.instagram.com/ejwebs",
  },
} as const;

/** Enlace de WhatsApp con mensaje prellenado. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Formato de miles determinista (mismo resultado en servidor y cliente). */
export function formatThousands(value: number, separator: "," | "." = ","): string {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
