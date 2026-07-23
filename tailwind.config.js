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
        'rift-blood': '#8B0000',
        'rift-blood-light': '#CC3333',
        'rift-neon': '#D89A2B',
        // New accent colors for colorful polish
        'rift-cyan': '#00CED1',
        'rift-purple': '#6B21A8',
        'rift-blue': '#1E40AF',
        'rift-electric': '#3B82F6',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        nav: ['Exo 2', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        cinematic: ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        'amber-pulse': 'amber-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'scan': 'scan-line 6s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
      },
      keyframes: {
        'amber-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      boxShadow: {
        'amber-glow': '0 0 20px rgba(216, 154, 43, 0.15), 0 0 40px rgba(216, 154, 43, 0.05)',
        'amber-glow-lg': '0 0 30px rgba(216, 154, 43, 0.2), 0 0 60px rgba(216, 154, 43, 0.08)',
        'red-glow': '0 0 20px rgba(122, 23, 23, 0.2), 0 0 40px rgba(122, 23, 23, 0.08)',
        'cyan-glow': '0 0 20px rgba(0, 206, 209, 0.12), 0 0 40px rgba(0, 206, 209, 0.05)',
        'purple-glow': '0 0 20px rgba(107, 33, 168, 0.12), 0 0 40px rgba(107, 33, 168, 0.05)',
        'cinema': '0 25px 50px rgba(0, 0, 0, 0.8), 0 0 100px rgba(216, 154, 43, 0.03)',
      },
    },
  },
  plugins: [],
}
