export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  details: string[];
  duration: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Descubrimiento & Arquitectura Estratégica",
    shortDesc: "Analizamos tu modelo de negocio, usuarios objetivo y competidores para definir la ruta técnica ideal.",
    details: [
      "Briefing en profundidad y levantamiento de requerimientos clave",
      "Benchmark competitivo y análisis de oportunidades",
      "Definición del stack tecnológico óptimo y mapa de navegación",
      "Planificación de hitos y cronograma garantizado"
    ],
    duration: "~10% del proyecto",
    iconName: "Compass"
  },
  {
    step: "02",
    title: "Diseño UI/UX & Prototipado Interactivo",
    shortDesc: "Creamos la identidad visual digital y prototipos navegables en Figma antes de escribir una sola línea de código.",
    details: [
      "Wireframes de arquitectura y flujos de usuario (User Journeys)",
      "Diseño visual de alta fidelidad con Design System exclusivo",
      "Prototipo interactivo testeable en dispositivos reales",
      "Ronda de feedback y refinamiento colaborativo"
    ],
    duration: "~25% del proyecto",
    iconName: "Figma"
  },
  {
    step: "03",
    title: "Desarrollo Frontend & Backend Ágil",
    shortDesc: "Escribimos código limpio con Next.js, React y TypeScript, integrando APIs, bases de datos y micro-animaciones.",
    details: [
      "Arquitectura de componentes modulares y reutilizables",
      "Integración de CMS, pasarelas de pago y bases de datos",
      "Micro-interacciones fluidas y transiciones premium",
      "Entornos de staging (pruebas) con acceso privado para el cliente"
    ],
    duration: "~45% del proyecto",
    iconName: "Code"
  },
  {
    step: "04",
    title: "Testing Riguroso, Despliegue & Escalabilidad",
    shortDesc: "Auditoría de seguridad, optimización de velocidad extrema y lanzamiento en servidores de alta disponibilidad.",
    details: [
      "Pruebas cross-browser y en más de 20 dispositivos móviles",
      "Auditoría Lighthouse (Rendimiento, Accesibilidad, SEO 100%)",
      "Configuración de dominios, DNS, certificados SSL y CDN global",
      "Entrega formal de accesos, manuales y garantía de soporte"
    ],
    duration: "~20% del proyecto",
    iconName: "Rocket"
  }
];
