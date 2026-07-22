/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rift-black': '#050507',
        'rift-darker': '#050507',
        'rift-dark': '#0a0a12',
        'rift-charcoal': '#111118',
        'rift-metal': '#7a8a9e',
        'rift-offwhite': '#e2e8f0',
        'rift-neon': '#00f0ff',
        'rift-cyan': '#00d4ff',
        'rift-blue': '#0066ff',
        'rift-red': '#8b0000',
        'rift-blood': '#6b0000',
        'rift-blood-light': '#b91c1c',
        'rift-crimson': '#dc2626',
        'rift-grey': '#1a1a2e',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        nav: ['Exo 2', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        cinematic: ['Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0,240,255,0.3), 0 0 40px rgba(0,240,255,0.1)',
        'neon-strong': '0 0 15px rgba(0,240,255,0.5), 0 0 60px rgba(0,240,255,0.2)',
        'blood': '0 0 10px rgba(139,0,0,0.3), 0 0 40px rgba(139,0,0,0.1)',
        'blood-strong': '0 0 15px rgba(139,0,0,0.5), 0 0 60px rgba(139,0,0,0.2)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 3s ease-in-out infinite',
        'pulse-blood': 'pulse-blood 4s ease-in-out infinite',
        'glow-title': 'glow-title 3s ease-in-out infinite alternate',
        'scan': 'scan 8s linear infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'pulse-blood': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'glow-title': {
          '0%': { textShadow: '0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.3), 0 0 80px rgba(0,240,255,0.1)' },
          '100%': { textShadow: '0 0 30px rgba(0,240,255,0.8), 0 0 60px rgba(0,240,255,0.5), 0 0 120px rgba(0,240,255,0.2)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}
