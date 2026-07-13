/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rift-dark': '#030306',
        'rift-darker': '#010102',
        'rift-blue': '#0a1520',
        'rift-deep': '#0f1a28',
        'rift-neon': '#00d4ff',
        'rift-neon-purple': '#7b2ff7',
        'rift-glow': '#00b4d8',
        'rift-blood': '#8b0000',
        'rift-blood-light': '#dc2626',
        'rift-blood-glow': '#ff1a1a',
        'rift-steel': '#4a6d8c',
        'rift-toxic': '#4ade80',
        'rift-charcoal': '#0d0d12',
        'rift-gold': '#d4af37',
      },
      fontFamily: {
        cinematic: ['Orbitron', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        nav: ['Exo 2', 'sans-serif'],
      },
      animation: {
        'fog-slow': 'fog-drift 30s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'warning-pulse': 'warning-pulse 6s ease-in-out infinite',
        'flicker': 'flicker 5s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0,212,255,0.3), 0 0 30px rgba(0,212,255,0.1)',
        'neon-strong': '0 0 20px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.2)',
        'blood': '0 0 15px rgba(139,0,0,0.3), 0 0 30px rgba(139,0,0,0.1)',
        'horror': '0 0 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
