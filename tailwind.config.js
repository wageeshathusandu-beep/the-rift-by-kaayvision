/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rift-dark': '#0a0a0f',
        'rift-blue': '#0d1b2a',
        'rift-deep': '#1b2838',
        'rift-neon': '#00d4ff',
        'rift-neon-purple': '#7b2ff7',
        'rift-glow': '#00b4d8',
        'rift-red': '#ff2d55',
      },
      fontFamily: {
        cinematic: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'neon-btn-glow': 'neon-btn-glow 2.5s ease-in-out infinite',
        'red-flicker': 'red-flicker 3s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'light-sweep': 'light-sweep 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        'neon-btn-glow': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0, 212, 255, 0.2), 0 0 20px rgba(0, 212, 255, 0.1)' },
          '50%': { boxShadow: '0 0 16px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)' },
        },
        'red-flicker': {
          '0%, 100%': { opacity: '0.6', textShadow: '0 0 4px rgba(255, 45, 85, 0.3)' },
          '30%': { opacity: '1', textShadow: '0 0 10px rgba(255, 45, 85, 0.7), 0 0 20px rgba(255, 45, 85, 0.3)' },
          '50%': { opacity: '0.85', textShadow: '0 0 6px rgba(255, 45, 85, 0.5)' },
          '70%': { opacity: '1', textShadow: '0 0 12px rgba(255, 45, 85, 0.8), 0 0 24px rgba(255, 45, 85, 0.4)' },
        },
        'light-sweep': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
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
      },
    },
  },
  plugins: [],
}
