import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a Impulso Studio. Hablemos de tu proyecto a través de WhatsApp y veamos cómo podemos ayudarte.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
