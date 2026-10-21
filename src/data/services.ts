export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tags: string[];
  features: string[];
  deliverables: string[];
  gradient: string;
}

export const servicesData: Service[] = [
  {
    id: "web-development",
    title: "Desarrollo Web de Alto Rendimiento",
    shortDesc: "Sitios web y plataformas diseñadas con Next.js y React con tiempos de carga inferiores a 1 segundo.",
    fullDesc: "Creamos experiencias web ultrarrápidas, escalables y seguras. Nos enfocamos en arquitectura moderna Server-Side Rendering (SSR) y Static Site Generation (SSG) para dominar las métricas de Core Web Vitals.",
    iconName: "Code2",
    tags: ["Next.js", "React", "TypeScript", "SSR / SSG"],
    features: [
      "Puntajes Lighthouse superiores a 95+",
      "Arquitectura modular y código limpio",
      "Optimización extrema de imágenes y assets",
      "Seguridad con cabeceras HTTP y protección contra ataques"
    ],
    deliverables: ["Código fuente documentado", "Despliegue en Vercel/AWS", "Manual de administración"],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "saas-apps",
    title: "Aplicaciones Web & Plataformas SaaS",
    shortDesc: "Desarrollo de software empresarial interactivo, dashboards analíticos y portales de clientes.",
    fullDesc: "Transformamos modelos de negocio en plataformas digitales funcionales. Desarrollamos paneles de control en tiempo real, sistemas de roles y permisos, pasarelas de pago y lógica de negocio robusta.",
    iconName: "Layers",
    tags: ["Fullstack", "APIs REST / GraphQL", "PostgreSQL", "Auth"],
    features: [
      "Autenticación segura (OAuth, JWT, 2FA)",
      "Paneles de administración y analítica interactiva",
      "Integraciones con Stripe, PayPal y pasarelas locales",
      "Bases de datos optimizadas para alta concurrencia"
    ],
    deliverables: ["Arquitectura de microservicios o monolito modular", "Documentación Swagger/OpenAPI", "Suite de tests"],
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: "ui-ux-design",
    title: "Diseño UI/UX & Design Systems",
    shortDesc: "Interfaces digitales memorables, diseñadas para cautivar a tus usuarios y disparar la conversión.",
    fullDesc: "Combinamos investigación de usuarios, ergonomía visual y prototipado de alta fidelidad para crear productos intuitivos. Creamos sistemas de diseño consistentes listos para implementación.",
    iconName: "Palette",
    tags: ["Figma", "Micro-interacciones", "Prototipado", "Design System"],
    features: [
      "Investigación de arquetipos de usuario y benchmarking",
      "Wireframing interactivo y prototipos clickeables",
      "Sistemas de diseño con tokens reutilizables",
      "Diseño 100% responsivo adaptable a todos los dispositivos"
    ],
    deliverables: ["Archivo maestro Figma", "Guía de estilos y componentes", "Assets optimizados SVG/WebP"],
    gradient: "from-fuchsia-500 to-pink-600"
  },
  {
    id: "ecommerce",
    title: "E-commerce & Tiendas Online Headless",
    shortDesc: "Tiendas virtuales optimizadas para ventas, pasarelas de cobro seguras y checkout sin fricción.",
    fullDesc: "Construimos tiendas de comercio electrónico modernas que convierten visitantes en compradores recurrentes. Soluciones headless o integradas con Shopify/WooCommerce para velocidad máxima.",
    iconName: "ShoppingBag",
    tags: ["E-commerce", "Stripe", "Checkout Exprés", "Inventario"],
    features: [
      "Checkout optimizado de 1 paso para reducir abandono",
      "Sincronización de inventario en tiempo real",
      "Recuperación automática de carritos abandonados",
      "Integración con pasarelas de pago y envíos automatizados"
    ],
    deliverables: ["Tienda operativa configurada", "Capacitación para gestión de catálogo", "Integración de métricas de conversión"],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "seo-optimization",
    title: "SEO Técnico & Core Web Vitals",
    shortDesc: "Posicionamiento orgánico de élite para que tus clientes ideales te encuentren en Google.",
    fullDesc: "Optimizamos tu arquitectura web para que los motores de búsqueda indexen tu contenido con máxima relevancia. Datos estructurados JSON-LD, sitemaps dinámicos y métricas de velocidad insuperables.",
    iconName: "TrendingUp",
    tags: ["SEO On-Page", "Schema.org", "Core Web Vitals", "Analytics"],
    features: [
      "Auditoría técnica exhaustiva de indexabilidad",
      "Marcado semántico y datos enriquecidos (Rich Snippets)",
      "Estrategia de meta-etiquetas dinámicas por página",
      "Integración con Google Search Console y GA4"
    ],
    deliverables: ["Informe de métricas inicial y post-optimización", "Guía de redacción SEO", "Sitemap XML automatizado"],
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "maintenance-cloud",
    title: "Mantenimiento, Cloud & DevOps",
    shortDesc: "Garantizamos 99.9% de disponibilidad, actualizaciones continuas, backups y seguridad.",
    fullDesc: "Tu negocio no se detiene y tu web tampoco. Nos encargamos del monitoreo 24/7, despliegues continuos automatizados (CI/CD), parches de seguridad y optimización de costos en la nube.",
    iconName: "CloudLightning",
    tags: ["CI/CD", "Vercel / AWS", "Monitoreo 24/7", "Backups"],
    features: [
      "Pipelines automatizados de pruebas y despliegue continuo",
      "Copias de seguridad diarias y recuperación ante desastres",
      "Monitoreo proactivo de caídas y tiempos de respuesta",
      "Soporte prioritario y resolución de incidencias en <2h"
    ],
    deliverables: ["Dashboard de estado en tiempo real", "Reporte mensual de rendimiento", "SLA garantizado"],
    gradient: "from-blue-600 to-indigo-700"
  }
];
