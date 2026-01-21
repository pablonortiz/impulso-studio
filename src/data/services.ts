export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: "app" | "system" | "web" | "automation";
}

export const services: Service[] = [
  {
    id: "apps",
    title: "Apps a medida",
    description: "Creamos aplicaciones pensadas para la operación diaria de tu negocio.",
    benefits: [
      "Menos tareas repetitivas",
      "Información siempre actualizada",
      "Control desde un solo lugar",
    ],
    icon: "app",
  },
  {
    id: "sistemas",
    title: "Sistemas internos",
    description: "Ordenamos la gestión interna con sistemas hechos a tu medida.",
    benefits: [
      "Datos centralizados",
      "Menos errores humanos",
      "Procesos claros y medibles",
    ],
    icon: "system",
  },
  {
    id: "webs",
    title: "Webs que convierten",
    description: "Desarrollamos sitios web claros, rápidos y enfocados en resultados.",
    benefits: [
      "Mejor presentación del negocio",
      "Canales de contacto ordenados",
      "Gestión simple del contenido",
    ],
    icon: "web",
  },
  {
    id: "automatizacion",
    title: "Automatización",
    description: "Transformamos procesos manuales en flujos automáticos.",
    benefits: [
      "Ahorro de tiempo",
      "Menos dependencia de planillas",
      "Información confiable",
    ],
    icon: "automation",
  },
];
