/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#020208',
        'abyss': '#060612',
        'deep': '#0a0a1a',
        'slate-dark': '#0d0d20',
        'alien-cyan': '#00e5ff',
        'alien-blue': '#2979ff',
        'alien-purple': '#7c4dff',
        'alien-crimson': '#b71c1c',
        'alien-red': '#ff1744',
        'neon-blue': '#40c4ff',
        'soft-white': '#e8eaf6',
        'muted': '#546e7a',
        'glass': 'rgba(10, 10, 30, 0.6)',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        heading: ['Exo 2', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-cyan': 'pulse-cyan 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'flicker': 'flicker 4s infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-cyan': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,255,0.3), 0 0 40px rgba(0,229,255,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(0,229,255,0.5), 0 0 60px rgba(0,229,255,0.2)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 10px rgba(0,229,255,0.5), 0 0 20px rgba(0,229,255,0.3)' },
          '100%': { textShadow: '0 0 20px rgba(0,229,255,0.8), 0 0 40px rgba(0,229,255,0.4), 0 0 80px rgba(0,229,255,0.2)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
          '25%, 75%': { opacity: '0.92' },
        },
      },
      boxShadow: {
        'cyan': '0 0 20px rgba(0,229,255,0.2), 0 0 40px rgba(0,229,255,0.1)',
        'cyan-lg': '0 0 30px rgba(0,229,255,0.3), 0 0 60px rgba(0,229,255,0.15), 0 0 100px rgba(0,229,255,0.05)',
        'red': '0 0 20px rgba(255,23,68,0.15), 0 0 40px rgba(255,23,68,0.08)',
        'glass': '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}
