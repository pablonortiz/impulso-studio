export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Descubrimiento",
    description: "Entendemos tu negocio y tus objetivos reales.",
  },
  {
    number: 2,
    title: "Propuesta",
    description: "Definimos alcance, prioridades y próximos pasos.",
  },
  {
    number: 3,
    title: "Diseño",
    description: "Creamos una solución clara antes de desarrollarla.",
  },
  {
    number: 4,
    title: "Desarrollo y pruebas",
    description: "Construimos, probamos y ajustamos.",
  },
  {
    number: 5,
    title: "Entrega y evolución",
    description: "Acompañamos la puesta en marcha y futuras mejoras.",
  },
];
