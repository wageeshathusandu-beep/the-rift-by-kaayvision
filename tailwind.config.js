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
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
