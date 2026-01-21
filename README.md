# Impulso Studio Website

Website corporativo de Impulso Studio - Software a medida para negocios.

## Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Hosting:** Vercel

## Estructura del Proyecto

```
src/
├── app/                    # Páginas y rutas
│   ├── page.tsx           # Home
│   ├── proyectos/         # Página de proyectos
│   ├── contacto/          # Página de contacto
│   ├── privacidad/        # Política de privacidad
│   ├── sitemap.ts         # Sitemap dinámico
│   └── robots.ts          # Robots.txt dinámico
├── components/
│   ├── layout/            # Header, Footer, ThemeProvider
│   └── sections/          # Componentes de secciones
├── data/                  # Datos mock (proyectos, servicios, etc.)
└── lib/                   # Utilidades (WhatsApp, animaciones)
```

## Configuración

### 1. WhatsApp

Editar el número de WhatsApp en `src/lib/whatsapp.ts`:

```typescript
const WHATSAPP_NUMBER = "5491112345678"; // Reemplazar con el número real
```

### 2. Dominio

Actualizar el dominio en:
- `src/app/layout.tsx` (metadataBase)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

### 3. OG Image

Agregar imagen para Open Graph en `public/og-image.png` (1200x630px recomendado).

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

## Build

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## Deploy en Vercel

### Opción 1: Desde GitHub

1. Subir el proyecto a un repositorio de GitHub
2. Ir a [vercel.com/new](https://vercel.com/new)
3. Importar el repositorio
4. Vercel detectará automáticamente Next.js y aplicará la configuración correcta
5. Click en "Deploy"

### Opción 2: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Variables de Entorno (Opcional)

Si necesitás variables de entorno, configurarlas en el dashboard de Vercel:
- Settings → Environment Variables

## Características

- Diseño premium minimal
- Tema claro/oscuro con persistencia
- SEO completo (metadata, OG, sitemap, robots)
- Animaciones sutiles con Framer Motion
- Responsive design
- CTA de WhatsApp integrado

## Paleta de Colores

- Negro: `#0B0B0D`
- Gris Oscuro: `#1A1A1E`
- Amarillo (acento): `#FFC400`
- Blanco Off: `#F5F5F5`

## Licencia

Propiedad de Impulso Studio. Todos los derechos reservados.
