const WHATSAPP_NUMBER = "5491171171103"; // Replace with actual number

const DEFAULT_MESSAGE = `Hola Impulso Studio, quiero contarles mi proyecto.
Tipo de proyecto: (app / web / sistema)
Objetivo principal:
Contexto del negocio:
Plazo estimado:
Gracias.`;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getWhatsAppUrlWithProject(projectType: string): string {
  const message = `Hola Impulso Studio, quiero contarles mi proyecto.
Tipo de proyecto: ${projectType}
Objetivo principal:
Contexto del negocio:
Plazo estimado:
Gracias.`;
  return getWhatsAppUrl(message);
}
