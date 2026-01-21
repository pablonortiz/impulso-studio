import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos reales de negocios que transformaron su operación con soluciones digitales a medida. Apps, sistemas y webs desarrollados por Impulso Studio.",
};

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
