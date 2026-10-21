export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "process" | "tech" | "pricing" | "support";
}

export const faqData: FaqItem[] = [
  {
    id: "tech-stack",
    question: "¿Por qué eligen Next.js y React en Ejwebs frente a WordPress o creadores web convencionales?",
    answer: "Next.js y React representan el estándar de oro en la industria moderna (utilizado por empresas como Netflix, Nike, TikTok y Airbnb). Permiten tiempos de carga casi instantáneos (sub-segundo), seguridad impenetrable contra ataques habituales, un SEO técnico insuperable con Server-Side Rendering (SSR) y flexibilidad total sin limitaciones de plantillas rígidas.",
    category: "tech"
  },
  {
    id: "timeline",
    question: "¿Cuánto tiempo toma desarrollar un proyecto web completo?",
    answer: "Depende del alcance. Una landing sencilla toma de 1 a 2 semanas; un sitio profesional con panel de administración, de 2 a 4 semanas; una tienda o plataforma con usuarios y pagos, entre 5 y 8 semanas; y un desarrollo a medida, desde 8 semanas. Somos un equipo pequeño y enfocado: trabajamos con entregas semanales y un prototipo navegable desde la primera semana.",
    category: "process"
  },
  {
    id: "pricing-structure",
    question: "¿Cómo se cotizan y estructuran los pagos de los proyectos?",
    answer: "Trabajamos con presupuestos cerrados por hitos claros (generalmente 50% al inicio y 50% al despliegue en producción tras tu aprobación completa) o bajo modelo de sprint quincenal para productos en evolución continua. En la sección de paquetes de esta misma página encuentras precios de referencia para arrancar.",
    category: "pricing"
  },
  {
    id: "ownership",
    question: "¿Soy el dueño total del código y del diseño una vez finalizado el proyecto?",
    answer: "Absolutamente sí. El 100% de la propiedad intelectual, el repositorio de código fuente (GitHub/GitLab), las licencias de diseño en Figma y las cuentas en la nube son transferidas formalmente a tu empresa. Sin ataduras ni letras pequeñas.",
    category: "support"
  },
  {
    id: "post-launch",
    question: "¿Qué tipo de soporte y mantenimiento ofrecen tras el lanzamiento?",
    answer: "Todos nuestros proyectos incluyen 30 días de soporte de garantía prioritario gratuito pos-lanzamiento. Además, ofrecemos planes de acompañamiento mensual con monitoreo de uptime 24/7, optimización continua de conversión, copias de seguridad diarias y nuevas funcionalidades bajo demanda.",
    category: "support"
  },
  {
    id: "seo-readiness",
    question: "¿El sitio web viene optimizado para aparecer en las primeras posiciones de Google?",
    answer: "Sí. Cada página desarrollada por Ejwebs incluye arquitectura semántica HTML5, metadatos dinámicos OpenGraph, datos estructurados Schema.org, sitemap XML automatizado, y una puntuación superior a 95 puntos en Google Core Web Vitals, lo que le da una ventaja competitiva determinante a tu posicionamiento.",
    category: "tech"
  }
];
