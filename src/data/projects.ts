export interface Project {
  id: string;
  title: string;
  client: string;
  category: "all" | "web-apps" | "ecommerce" | "corporate";
  categoryLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  stats: { label: string; value: string }[];
  tags: string[];
  themeColor: string;
  accentColor: string;
  mockupType: "dashboard" | "store" | "corporate" | "medical" | "delivery";
  /** Ruta a una captura real del sitio (en /public). Si se define, reemplaza el mockup dibujado en la tarjeta. */
  image?: string;
  /** Texto corto para la etiqueta inferior izquierda sobre la captura. Si no se define, se usa el primer stat. */
  imageBadge?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "novafin",
    title: "NovaFin: Plataforma de Inteligencia Financiera",
    client: "NovaFin Capital Group",
    category: "web-apps",
    categoryLabel: "Web App & SaaS",
    summary: "Plataforma de análisis de inversiones y gestión patrimonial en tiempo real con dashboards interactivos y seguridad de grado bancario.",
    challenge: "El cliente contaba con procesos manuales en hojas de cálculo y una tasa de retención de usuarios inferior al 35% debido a interfaces anticuadas.",
    solution: "Desarrollamos una Single Page Application con Next.js App Router, visualización de datos con gráficos WebGL interactivos y autenticación multifactor.",
    stats: [
      { label: "Tiempo de Carga", value: "0.6s" },
      { label: "Aumento en Retención", value: "+140%" },
      { label: "Transacciones / Seg", value: "1,200+" }
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
    themeColor: "#00F2FE",
    accentColor: "#4FACFE",
    mockupType: "dashboard",
    liveUrl: "https://ejwebs.com/demo/novafin",
    featured: true
  },
  {
    id: "soft-lingerie",
    title: "Soft Lingerie: Tienda E-commerce con Pagos y Panel de Gestión",
    client: "Soft Lingerie",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    summary: "Tienda en línea de lencería con pagos integrados (Wompi + notificación push a Nequi) y panel administrativo para gestionar catálogo, stock, pedidos y envíos, reemplazando la venta manual por WhatsApp.",
    challenge: "Todo el proceso de ventas —catálogo, cotizaciones, cobros y coordinación de envíos— se manejaba manualmente por WhatsApp, lo que limitaba la atención a un horario fijo y hacía perder pedidos por falta de seguimiento.",
    solution: "Construimos una tienda a medida con Next.js en el frontend y un backend en Node.js con base de datos en Supabase, desplegada en un VPS propio. Integramos Wompi para pagos con PSE, tarjeta débito y crédito, y pago por Nequi mediante notificación push al ingresar el número de teléfono. El panel administrativo permite ver estadísticas de ventas por semana, mes y año, controlar el stock, gestionar el estado de los pedidos, asignar número de guía a los envíos despachados a nivel nacional, y agregar, editar o quitar prendas del catálogo.",
    stats: [
      { label: "Retorno de Inversión", value: "Mes 1" },
      { label: "Tienda Online", value: "24/7" },
      { label: "Métodos de Pago", value: "3 Canales" }
    ],
    tags: ["Next.js", "Node.js", "Supabase", "Wompi", "Nequi", "VPS"],
    themeColor: "#FB7185",
    accentColor: "#F43F5E",
    mockupType: "store",
    image: "/projects/soft-lingerie.jpg",
    imageBadge: "Ventas Automatizadas",
    liveUrl: "https://soft-lingerie.com",
    featured: true
  },
  {
    id: "las-hamacas-pos",
    title: "Las Hamacas: Sistema POS y Gestión de Restaurante en Tiempo Real",
    client: "Restaurante Las Hamacas",
    category: "web-apps",
    categoryLabel: "Software a Medida / POS",
    summary: "Sistema de punto de venta a medida para un restaurante de varias zonas: toma de pedidos por mesa, cocina sincronizada en tiempo real vía WebSockets y panel administrativo con ventas, menú y usuarios.",
    challenge: "Los pedidos se coordinaban en papel entre meseros y cocina, sin visibilidad del estado de cada mesa ni un registro centralizado de ventas, propinas y métodos de pago.",
    solution: "Desarrollamos un POS con Django y Django Channels: los meseros toman pedidos por mesa desde cualquier dispositivo, la cocina los recibe al instante en una pantalla KDS con flujo Nuevo → En Preparación → Listo, y el panel admin centraliza ventas, menú, usuarios, zonas de mesas y generación de códigos QR.",
    stats: [
      { label: "Sincronización", value: "Tiempo Real" },
      { label: "Mesas Gestionadas", value: "30 / 7 Zonas" },
      { label: "Métodos de Pago", value: "3 Canales" }
    ],
    tags: ["Django", "Django Channels", "WebSockets", "Python", "PostgreSQL"],
    themeColor: "#DC2626",
    accentColor: "#EA580C",
    mockupType: "dashboard",
    image: "/projects/las-hamacas-pos.jpg",
    imageBadge: "Cocina en Tiempo Real",
    featured: false
  },
  {
    id: "optilogix",
    title: "OptiLogix: Centro de Control Logístico y Rutas AI",
    client: "OptiLogix Supply Chain",
    category: "web-apps",
    categoryLabel: "Plataforma Empresarial",
    summary: "Sistema de monitorización satelital de flotas vehiculares y optimización automática de rutas mediante algoritmos en tiempo real.",
    challenge: "Incapacidad para rastrear más de 200 camiones concurrentes sin latencias severas en el mapa y desconexiones de controladores.",
    solution: "Arquitectura basada en WebSockets con React y Node.js, compresión de telemetría y renderizado por canvas de alta densidad.",
    stats: [
      { label: "Ahorro de Combustible", value: "22%" },
      { label: "Uptime Anual", value: "99.98%" },
      { label: "Flota Conectada", value: "+850" }
    ],
    tags: ["React", "Node.js", "Mapbox GL", "WebSockets", "Docker"],
    themeColor: "#10B981",
    accentColor: "#059669",
    mockupType: "dashboard",
    liveUrl: "https://ejwebs.com/demo/optilogix",
    featured: false
  },
  {
    id: "nexus-studio",
    title: "Nexus Architecture: Portal Inmersivo de Proyectos",
    client: "Nexus Global Architects",
    category: "corporate",
    categoryLabel: "Sitio Web Corporativo",
    summary: "Sitio web institucional minimalista y vanguardista para estudio internacional de arquitectura urbana sostenible.",
    challenge: "Necesitaban transmitir prestigio y elegancia a inversionistas globales con una presentación cinematográfica de su portafolio.",
    solution: "Diseño editorial interactivo, micro-animaciones fluidas con CSS moderno, optimización de video en 4K con entrega CDN y SEO internacional.",
    stats: [
      { label: "Prospectos Cualificados", value: "+320%" },
      { label: "Tiempo de Sesión", value: "4m 12s" },
      { label: "Reconocimiento", value: "Awwwards HM" }
    ],
    tags: ["Next.js", "CSS Modules", "Lenis Scroll", "Cloudflare Stream"],
    themeColor: "#6366F1",
    accentColor: "#8B5CF6",
    mockupType: "corporate",
    liveUrl: "https://ejwebs.com/demo/nexus",
    featured: true
  },
  {
    id: "vitalis-health",
    title: "Vitalis Health: Ecosistema Clínico & Telemedicina",
    client: "Red Hospitalaria Vitalis",
    category: "web-apps",
    categoryLabel: "Web App Médica",
    summary: "Portal de pacientes, programación de citas médicas automatizadas, videoconsultas encriptadas y expedientes digitales.",
    challenge: "Saturación de líneas telefónicas con más de 1,500 llamadas diarias y extravío recurrente de citas médicas.",
    solution: "Desarrollo de un portal intuitivo para pacientes de todas las edades con confirmación por WhatsApp y videollamadas WebRTC integradas.",
    stats: [
      { label: "Citas Auto-gestionadas", value: "78%" },
      { label: "Inasistencias", value: "-45%" },
      { label: "Pacientes Activos", value: "+45K" }
    ],
    tags: ["Next.js", "WebRTC", "HIPAA Compliant", "PostgreSQL", "Twilio"],
    themeColor: "#06B6D4",
    accentColor: "#0891B2",
    mockupType: "medical",
    liveUrl: "https://ejwebs.com/demo/vitalis",
    featured: false
  },
  {
    id: "urbaneats",
    title: "UrbanEats: Plataforma Delivery y Menús QR Inteligentes",
    client: "Grupo Gastronómico Urbano",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Delivery",
    summary: "Sistema de pedidos para restaurantes de cadena, integración con cocina (KDS) y fidelización con puntos canjeables.",
    challenge: "Comisiones excesivas del 30% en apps de terceros y nula posesión de los datos de sus comensales habituales.",
    solution: "Plataforma de canal propio con PWA ultraligera instalable, checkout express y trazabilidad de entrega en mapa interactivo.",
    stats: [
      { label: "Ahorro en Comisiones", value: "$45K/mes" },
      { label: "Pedidos Diarios", value: "3,800+" },
      { label: "Calificación App", value: "4.9 ★" }
    ],
    tags: ["Next.js", "PWA", "Firebase", "Stripe", "Geolocation"],
    themeColor: "#F59E0B",
    accentColor: "#D97706",
    mockupType: "delivery",
    liveUrl: "https://ejwebs.com/demo/urbaneats",
    featured: false
  }
];
