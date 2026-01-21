import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impulsostudio.com"),
  title: {
    default: "Impulso Studio | Software a medida para tu negocio",
    template: "%s | Impulso Studio",
  },
  description:
    "Diseñamos y desarrollamos soluciones digitales que simplifican procesos, reducen errores y acompañan el crecimiento de tu negocio.",
  keywords: [
    "software a medida",
    "desarrollo web",
    "aplicaciones",
    "automatización",
    "sistemas",
    "Argentina",
  ],
  authors: [{ name: "Impulso Studio" }],
  creator: "Impulso Studio",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://impulsostudio.com",
    siteName: "Impulso Studio",
    title: "Impulso Studio | Software a medida para tu negocio",
    description:
      "Diseñamos y desarrollamos soluciones digitales que simplifican procesos, reducen errores y acompañan el crecimiento de tu negocio.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Impulso Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulso Studio | Software a medida para tu negocio",
    description:
      "Diseñamos y desarrollamos soluciones digitales que simplifican procesos, reducen errores y acompañan el crecimiento de tu negocio.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
