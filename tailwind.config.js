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
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'fog-drift': 'fog-drift 20s ease-in-out infinite',
        'fog-drift-reverse': 'fog-drift-reverse 25s ease-in-out infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
        'horror-pulse': 'horror-pulse 5s ease-in-out infinite',
        'blood-drip': 'blood-drip 3s ease-in-out infinite',
        'particle-rise': 'particle-rise 8s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fog-drift': {
          '0%': { transform: 'translateX(-20%) translateY(0) scale(1.2)', opacity: '0.3' },
          '50%': { transform: 'translateX(20%) translateY(-10px) scale(1.4)', opacity: '0.5' },
          '100%': { transform: 'translateX(-20%) translateY(0) scale(1.2)', opacity: '0.3' },
        },
        'fog-drift-reverse': {
          '0%': { transform: 'translateX(20%) translateY(5px) scale(1.3)', opacity: '0.2' },
          '50%': { transform: 'translateX(-15%) translateY(-5px) scale(1.5)', opacity: '0.4' },
          '100%': { transform: 'translateX(20%) translateY(5px) scale(1.3)', opacity: '0.2' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '41%': { opacity: '1' },
          '42%': { opacity: '0.8' },
          '43%': { opacity: '1' },
          '45%': { opacity: '0.6' },
          '46%': { opacity: '1' },
          '80%': { opacity: '1' },
          '81%': { opacity: '0.7' },
          '82%': { opacity: '1' },
        },
        'horror-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 0, 0, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 0, 0, 0.4), inset 0 0 30px rgba(0, 0, 0, 0.5)' },
        },
        'blood-drip': {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%': { opacity: '0.7', transform: 'scaleY(1.1)' },
        },
        'particle-rise': {
          '0%': { transform: 'translateY(100%) translateX(0)', opacity: '0' },
          '20%': { opacity: '0.6' },
          '80%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100%) translateX(20px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
