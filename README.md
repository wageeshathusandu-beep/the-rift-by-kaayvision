# The Rift - Official Movie Website

A dark, cinematic one-page website for **The Rift** — an AI sci-fi horror film. Built with React, Tailwind CSS, and Vite.

![The Rift](https://img.shields.io/badge/Genre-AI%20Sci--Fi%20Horror-blue)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5-646CFF)

## Features

- Dark cinematic Hollywood aesthetic with neon glow accents
- Fully responsive (mobile + desktop)
- Smooth scroll-triggered animations
- Sections: Hero, About, Cast & Crew, Gallery, Trailer, Contact
- Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Connect the repo to [Vercel](https://vercel.com)
3. Vercel will auto-detect the Vite framework and deploy

Or use the Vercel CLI:

```bash
npx vercel
```

## Project Structure

```
├── index.html              # Entry HTML
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind theme (custom colors, animations)
├── postcss.config.js       # PostCSS plugins
├── vercel.json             # Vercel deployment config
├── public/                 # Static assets
│   └── vite.svg            # Favicon
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main app component
    ├── index.css           # Global styles + Tailwind directives
    └── components/
        ├── Navbar.jsx      # Fixed navigation with mobile menu
        ├── Hero.jsx        # Hero section with title & CTA buttons
        ├── About.jsx       # Film synopsis & details
        ├── Cast.jsx        # Cast & crew grid
        ├── Gallery.jsx     # Image gallery with hover effects
        ├── Trailer.jsx     # YouTube embed placeholder
        ├── Contact.jsx     # Contact form & social links
        └── Footer.jsx      # Footer with links
```

## Customization

- Replace placeholder images with actual movie stills
- Update the YouTube embed in `Trailer.jsx` with your trailer URL
- Update social media links in `Contact.jsx`
- Modify colors in `tailwind.config.js` to match your branding

## Tech Stack

- **React 18** — UI library
- **Tailwind CSS 3.4** — Utility-first CSS
- **Vite 5** — Build tool & dev server
- **Google Fonts** — Orbitron + Inter

## License

© 2025 Frameflicks Productions. All rights reserved.
