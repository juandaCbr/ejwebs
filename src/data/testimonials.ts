export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  initials: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  projectType: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Carolina Mendoza",
    role: "Directora de Transformación Digital",
    company: "NovaFin Capital",
    avatar: "",
    initials: "CM",
    quote: "Trabajar con Ejwebs fue un antes y un después para nuestra plataforma financiera. Entendieron desde el día 1 la complejidad de nuestras regulaciones y entregaron un producto que nuestros inversionistas califican de sobresaliente.",
    rating: 5,
    highlightMetric: "+140% Retención de usuarios",
    projectType: "Plataforma SaaS Fintech"
  },
  {
    id: "2",
    name: "Alexandre Dupont",
    role: "Fundador & CEO",
    company: "Aura Luxe Jewelry",
    avatar: "",
    initials: "AD",
    quote: "Nuestra tienda online pasó de tardar 5 segundos en abrir en móviles a cargar de forma instantánea. Las ventas internacionales se triplicaron en el primer trimestre tras el rediseño con Next.js.",
    rating: 5,
    highlightMetric: "+215% Conversión E-Commerce",
    projectType: "E-Commerce Headless de Lujo"
  },
  {
    id: "3",
    name: "Ing. Roberto Salazar",
    role: "VP de Operaciones",
    company: "OptiLogix Logistics",
    avatar: "",
    initials: "RS",
    quote: "El nivel técnico de Ejwebs está a la par de las mejores consultoras de Silicon Valley, pero con un trato personalizado y tiempos de respuesta inmediatos. Su solución de telemetría no ha tenido ni una caída en un año.",
    rating: 5,
    highlightMetric: "99.98% Disponibilidad Continua",
    projectType: "Sistema Web de Telemetría"
  },
  {
    id: "4",
    name: "Valeria Domínguez",
    role: "Managing Partner",
    company: "Nexus Architecture Studio",
    avatar: "",
    initials: "VD",
    quote: "Para los arquitectos la estética es intransigible. Ejwebs plasmó a la perfección nuestra visión minimalista y cinemática. Ganamos múltiples licitaciones gracias al impacto de nuestra nueva web.",
    rating: 5,
    highlightMetric: "+320% Leads Corporativos",
    projectType: "Sitio Web Institucional & Showroom"
  }
];
