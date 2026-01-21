import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Impulso Studio",
};

export default function PrivacidadPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-6" />
          <h1 className="text-h1 mb-8">Política de Privacidad</h1>

          <div className="prose prose-lg max-w-none space-y-8 text-[var(--muted)]">
            <div>
              <h2 className="text-h3 text-[var(--foreground)] mb-4">Información que recopilamos</h2>
              <p className="text-body">
                Al contactarnos a través de WhatsApp o cualquier otro medio, recopilamos únicamente la información que nos proporcionás voluntariamente, como tu nombre, datos de contacto y detalles sobre tu proyecto.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-[var(--foreground)] mb-4">Uso de la información</h2>
              <p className="text-body">
                Utilizamos la información recopilada exclusivamente para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-body">
                <li>Responder a tus consultas</li>
                <li>Elaborar propuestas de trabajo</li>
                <li>Comunicarnos sobre el desarrollo de tu proyecto</li>
                <li>Mejorar nuestros servicios</li>
              </ul>
            </div>

            <div>
              <h2 className="text-h3 text-[var(--foreground)] mb-4">Protección de datos</h2>
              <p className="text-body">
                Nos comprometemos a proteger tu información personal. No compartimos, vendemos ni cedemos tus datos a terceros sin tu consentimiento expreso, salvo cuando sea requerido por ley.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-[var(--foreground)] mb-4">Cookies</h2>
              <p className="text-body">
                Este sitio web utiliza cookies técnicas esenciales para su funcionamiento (como la preferencia de tema claro/oscuro). No utilizamos cookies de seguimiento ni publicidad.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-[var(--foreground)] mb-4">Tus derechos</h2>
              <p className="text-body">
                Tenés derecho a acceder, rectificar o eliminar tus datos personales en cualquier momento. Para ejercer estos derechos, contactanos a través de WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="text-h3 text-[var(--foreground)] mb-4">Cambios en esta política</h2>
              <p className="text-body">
                Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier cambio será publicado en esta página.
              </p>
            </div>

            <div className="pt-8 border-t border-[var(--card-border)]">
              <p className="text-small">
                Última actualización: Enero 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
