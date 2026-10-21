/**
 * Paquetes de servicio de Ejwebs.
 * Precios en COP (moneda base). El sitio los convierte a USD con la tasa
 * definida en `src/hooks/useCurrency.ts` (USD_COP_RATE).
 *
 * TODO: ajustar precios / entregables a la realidad de la agencia.
 */
export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  /** Precio en pesos colombianos. */
  priceCop: number;
  /** "from" muestra "desde" antes del precio. */
  priceKind?: "fixed" | "from";
  timeline: string;
  bestFor: string;
  /** Qué se desbloquea al subir a este plan desde el anterior (por qué vale la pena). */
  stepUp?: string;
  features: string[];
  /** Resalta la tarjeta como opción recomendada. */
  highlighted?: boolean;
}

export const packagesData: ServicePackage[] = [
  {
    id: "esencial",
    name: "Landing Esencial",
    tagline: "Una página para existir en internet con cara profesional.",
    priceCop: 590000,
    priceKind: "fixed",
    timeline: "1 a 2 semanas",
    bestFor: "Emprendedores y profesionales que solo necesitan que los encuentren y los contacten.",
    features: [
      "1 página tipo landing (hasta 5 secciones)",
      "Diseño personalizado a tu marca",
      "100% responsive (móvil, tablet, escritorio)",
      "Formulario de contacto + botón de WhatsApp",
      "SEO básico y Google Analytics",
      "Dominio y publicación configurados",
      "1 ronda de ajustes",
    ],
  },
  {
    id: "profesional",
    name: "Sitio Profesional",
    tagline: "Un sitio con base de datos que trabaja para ti, no un folleto.",
    priceCop: 1490000,
    priceKind: "fixed",
    timeline: "2 a 4 semanas",
    bestFor: "Negocios que necesitan varias páginas y quieren editar su contenido sin depender de nadie.",
    stepUp:
      "El salto: aquí empieza el desarrollo real. Se suma base de datos y un panel de administración: cada solicitud queda guardada (no se pierde en el correo) y tú mismo cambias textos, fotos y publicas en el blog.",
    features: [
      "5 a 7 páginas (inicio, servicios, nosotros, contacto…)",
      "Base de datos: formularios y solicitudes guardados y consultables",
      "Panel de administración para editar contenido y publicar en el blog",
      "Catálogo o portafolio dinámico (mostrar productos/servicios, sin cobro en línea)",
      "SEO on-page por página y datos estructurados",
      "Integración de redes, Google Maps y WhatsApp",
      "2 rondas de ajustes + 1 mes de soporte",
    ],
    highlighted: true,
  },
  {
    id: "plataforma",
    name: "Tienda o Plataforma Web",
    tagline: "Tu web deja de informar y empieza a operar: usuarios y pagos.",
    priceCop: 2500000,
    priceKind: "from",
    timeline: "5 a 8 semanas",
    bestFor: "Tiendas online y negocios que necesitan cuentas de cliente, cobros o gestión de pedidos.",
    stepUp:
      "El salto: se agrega la parte transaccional. Tus clientes se registran e inician sesión, compran y pagan en línea, y tú gestionas usuarios, inventario y pedidos. Es un sistema, no un sitio.",
    features: [
      "Todo lo del plan Profesional, y además:",
      "Registro e inicio de sesión de clientes (con seguridad)",
      "Carrito + pasarela de pago (Wompi, Mercado Pago o PayU)",
      "Gestión de pedidos, inventario y reportes desde el panel",
      "Hasta ~15 páginas o 50 productos cargados",
      "Optimización avanzada de velocidad (Core Web Vitals)",
      "Capacitación por videollamada + 2 meses de soporte",
    ],
  },
  {
    id: "medida",
    name: "Solución a Medida",
    tagline: "Cuando no necesitas una plantilla, sino tu propio software.",
    priceCop: 3500000,
    priceKind: "from",
    timeline: "desde 8 semanas",
    bestFor: "Web apps, SaaS, sistemas internos y procesos que ninguna plantilla resuelve.",
    stepUp:
      "El salto: dejamos las plantillas de tienda y diseñamos desde cero para tu proceso. Reglas de negocio propias, flujos internos, roles y permisos, e integraciones con tus sistemas (ERP, CRM, facturación).",
    features: [
      "Aplicación a la medida con lógica de negocio propia",
      "Roles y permisos, dashboards y reportes avanzados",
      "Integraciones con APIs y sistemas externos (ERP, CRM, facturación…)",
      "Automatización de procesos internos",
      "Arquitectura escalable, documentación y pruebas",
      "Alcance y precio finales definidos en una reunión técnica",
    ],
  },
];

/** Nota de mantenimiento mensual (opcional, complementa cualquier paquete). */
export const maintenanceNote = {
  priceCop: 190000,
  priceKind: "from" as const,
  text:
    "Hosting gestionado, copias de seguridad, actualizaciones de seguridad y hasta 2 horas mensuales de cambios menores.",
};
