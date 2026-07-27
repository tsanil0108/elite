# Elite Cargo Packers & Movers — React Website

Fully responsive React website for Elite Cargo Packers & Movers, built with React + Vite + Tailwind CSS v4 + Framer Motion (animations) + React Router + lucide-react icons.

## Pages
- Home (/)
- About Us (/about)
- Services (/services)
- Industries (/industries)
- Branches (/branches)
- Gallery (/gallery)
- Contact Us (/contact)

## Getting Started

```bash
npm install
npm run dev       # start local dev server (usually http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

Requires Node.js 18+.

## Tech
- React 18 + React Router v6
- Tailwind CSS v4 (via @tailwindcss/vite plugin, theme tokens in src/index.css)
- Framer Motion for scroll reveals, hover, and page animations
- lucide-react for icons

## Structure
- src/components — Navbar, Footer, Reveal (scroll-in animation wrapper), Icon, ScrollToTop
- src/pages — one file per route
- src/data/siteData.js — all editable site content (services, stats, testimonials, FAQs, branches, etc.)
- src/assets — images used across the site (truck hero shots, gallery photos, team photos)

## Customizing
- Colors: edit the @theme block at the top of src/index.css (--color-navy, --color-orange, etc.)
- Content: edit src/data/siteData.js — most sections pull from here, so you rarely need to touch page files directly
- Contact details: CONTACT object in src/data/siteData.js

