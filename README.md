# Impulso Studio

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Corporate website for Impulso Studio — custom software for businesses.

## Features

- Premium minimal design
- Light/dark theme with persistence
- Full SEO (metadata, Open Graph, sitemap, robots)
- Subtle animations with Framer Motion
- Fully responsive
- Integrated WhatsApp CTA

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | Framework (App Router) |
| **TypeScript** | Language |
| **Tailwind CSS v4** | Styling |
| **Framer Motion** | Animations |
| **Vercel** | Hosting |

## Project Structure

```
src/
├── app/                    # Pages and routes
│   ├── page.tsx           # Home
│   ├── proyectos/         # Projects page
│   ├── contacto/          # Contact page
│   ├── privacidad/        # Privacy policy
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Dynamic robots.txt
├── components/
│   ├── layout/            # Header, Footer, ThemeProvider
│   ├── sections/          # Section components
│   └── ui/                # UI components
├── data/                  # Mock data (projects, services, etc.)
└── lib/                   # Utilities (WhatsApp, animations)
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Color Palette

| Color | Hex |
|---|---|
| Black | `#0B0B0D` |
| Dark Gray | `#1A1A1E` |
| Accent (Yellow) | `#FFC400` |
| Off White | `#F5F5F5` |

## License

MIT
