import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background)]">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Impulso Studio"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="font-semibold text-lg">Impulso Studio</span>
            </div>
            <p className="text-[var(--muted)] text-body max-w-sm">
              Ordenamos y automatizamos tu negocio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm">
                Inicio
              </Link>
              <Link href="/proyectos" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm">
                Proyectos
              </Link>
              <Link href="/contacto" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/privacidad" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm">
                Política de privacidad
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted)] text-small">
            © {currentYear} Impulso Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
