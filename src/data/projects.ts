export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  results: string[];
  category: "app" | "web" | "system";
  videoUrl?: string;
  thumbnailUrl?: string;
}

export const projects: Project[] = [
  {
    id: "gestion-vehiculos",
    title: "Gestión de vehículos y documentación",
    problem: "Información dispersa y difícil de mantener actualizada.",
    solution: "Sistema centralizado para vehículos, responsables y documentos.",
    results: [
      "Control total desde un solo lugar",
      "Documentación siempre disponible",
      "Menos errores administrativos",
    ],
    category: "system",
    videoUrl: "/videos/gestor-vehiculos.mp4",
    thumbnailUrl: "/thumbnails/gestor-vehiculos.png",
  },
  {
    id: "sistema-metalurgica",
    title: "Sistema de gestión para metalúrgica",
    problem: "Datos históricos dispersos y difícil análisis del negocio.",
    solution: "Plataforma unificada para trabajos, gastos y reportes.",
    results: [
      "+80.000 registros organizados",
      "Visión clara de la operación",
      "Reportes por período y estado",
    ],
    category: "system",
    videoUrl: "/videos/administrador-metalurgica.mp4",
    thumbnailUrl: "/thumbnails/metalurgica.png",
  },
  {
    id: "gestion-stock-perfumes",
    title: "Gestión de stock de perfumes",
    problem: "Control manual del stock y comunicación poco clara con clientes.",
    solution: "App para marcas, productos y stock exportable.",
    results: [
      "Stock siempre actualizado",
      "Listados claros para clientes",
      "Mejor organización del catálogo",
    ],
    category: "app",
    videoUrl: "/videos/perfumario.mp4",
    thumbnailUrl: "/thumbnails/perfumario.png",
  },
  {
    id: "catalogador-extractos",
    title: "Catalogador de extractos bancarios",
    problem: "Revisión manual de extractos, lenta y propensa a errores.",
    solution: "Sistema que identifica, clasifica y estandariza movimientos.",
    results: [
      "Procesos más rápidos",
      "Información lista para exportar",
      "Menos intervención manual",
    ],
    category: "app",
    videoUrl: "/videos/catalogador.mp4",
    thumbnailUrl: "/thumbnails/catalogador.png",
  },
  {
    id: "web-inmobiliaria",
    title: "Web inmobiliaria con panel de gestión",
    problem: "Publicaciones desordenadas y consultas difíciles de gestionar.",
    solution: "Web con catálogo, formularios y panel administrativo.",
    results: [
      "Mejor presentación del negocio",
      "Consultas centralizadas",
      "Gestión simple de propiedades",
    ],
    category: "web",
    // videoUrl: "/videos/web-inmobiliaria.mp4",
    // thumbnailUrl: "/thumbnails/web-inmobiliaria.jpg",
  },
];
