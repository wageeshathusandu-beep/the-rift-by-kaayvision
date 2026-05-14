/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rift-dark': '#050508',
        'rift-darker': '#020203',
        'rift-blue': '#0a1520',
        'rift-deep': '#0f1a28',
        'rift-neon': '#00d4ff',
        'rift-neon-purple': '#7b2ff7',
        'rift-glow': '#00b4d8',
        'rift-blood': '#8b0000',
        'rift-blood-light': '#dc2626',
        'rift-blood-glow': '#ff1a1a',
      },
      fontFamily: {
        cinematic: ['Orbitron', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        nav: ['Exo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
