/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rift-black': '#050505',
        'rift-darker': '#050505',
        'rift-dark': '#080808',
        'rift-charcoal': '#111111',
        'rift-metal': '#5E6468',
        'rift-offwhite': '#D8D2C4',
        'rift-amber': '#D89A2B',
        'rift-red': '#7A1717',
        'rift-green': '#46513A',
        'rift-grey': '#1a1a1a',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        nav: ['Exo 2', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
