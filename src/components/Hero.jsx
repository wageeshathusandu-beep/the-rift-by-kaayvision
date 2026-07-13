import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden overflow-y-visible pt-20">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010104] via-[#050510] to-rift-darker"></div>

      {/* Fog layer */}
      <div className="fog-layer"></div>

      {/* Subtle HUD grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      {/* Atmospheric color accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rift-blood/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-rift-neon/3 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-rift-toxic/[0.02] rounded-full blur-[80px]"></div>

      {/* Warning pulse - subtle red flash */}
      <div className="absolute inset-0 bg-rift-blood/[0.02] animate-warning-pulse pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* ===== STUDIO INTRO - KAAY VISION PRESENTS ===== */}
        <div className={`mb-4 pt-4 overflow-visible transition-all duration-[1.5s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          {/* Studio presents text */}
          <p className="text-gray-500 text-[10px] md:text-xs font-cinematic tracking-[0.5em] uppercase mb-3" style={{ transitionDelay: '0.1s' }}>
            A Production By
          </p>
          {/* Premium Animated Brand Logo */}
          <div className="overflow-visible py-2">
            <BrandLogo size="lg" />
          </div>
          {/* Studio tagline */}
          <p className="text-gray-400 text-xs md:text-sm font-cinematic tracking-[0.35em] uppercase mt-2" style={{ textShadow: '0 0 10px rgba(0,212,255,0.4), 0 0 25px rgba(0,212,255,0.15)' }}>
            Presents
          </p>
        </div>

        {/* Cinematic divider */}
        <div className={`flex items-center justify-center gap-4 my-6 md:my-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent to-rift-neon/30"></div>
          <div className="w-2 h-2 rotate-45 border border-rift-neon/50 shadow-[0_0_6px_rgba(0,212,255,0.5)]"></div>
          <div className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent to-rift-neon/30"></div>
        </div>

        {/* ===== MAIN POSTER HERO ===== */}
        <div className={`mb-8 flex justify-center transition-all duration-[1.2s] ease-out ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`} style={{ transitionDelay: '0.5s' }}>
          <div className="relative group poster-container">
            {/* Static glow behind poster */}
            <div className="absolute -inset-8 bg-gradient-to-b from-rift-blood/12 via-rift-neon/4 to-rift-blood/8 rounded-3xl blur-3xl poster-glow"></div>

            {/* Horror border glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-rift-neon/15 via-rift-blood/10 to-rift-neon/10 rounded-2xl blur-sm"></div>

            {/* Poster image */}
            <img
              src="https://i.imgur.com/162JyPV.jpeg"
              alt="The Rift Official Poster"
              className="relative w-full max-w-md rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,212,255,0.08)] border border-rift-neon/15 group-hover:border-rift-neon/30 transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(0,212,255,0.12),0_0_40px_rgba(0,0,0,0.8)]"
            />

            {/* Scanline effect on poster */}
            <div className="absolute inset-0 rounded-xl scanline-overlay pointer-events-none"></div>
          </div>
        </div>

        {/* Title with glitch effect */}
        <h1 className={`title-cinematic text-5xl md:text-7xl lg:text-8xl mb-4 transition-all duration-[1.2s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
          <span className="glitch-text bg-gradient-to-r from-white via-rift-neon to-rift-blood-light bg-clip-text text-transparent" data-text="THE RIFT">
            THE RIFT
          </span>
        </h1>

        {/* Tagline */}
        <p className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-body font-light tracking-wide leading-relaxed transition-all duration-[1.2s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1s' }}>
          When artificial intelligence tears open the fabric of reality, humanity faces its darkest hour.
          <span className="text-rift-blood-light/70"> Some doors were never meant to be opened.</span>
        </p>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-[1.2s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.2s' }}>
          <a
            href="#trailer"
            className="btn-watch-trailer group relative px-8 py-4 text-black font-nav font-bold uppercase tracking-[0.15em] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Trailer
            </span>
          </a>

          <a
            href="#"
            className="btn-watch-now relative px-8 py-4 border border-rift-blood/30 text-white font-nav font-bold uppercase tracking-[0.15em] rounded-lg overflow-hidden transition-all duration-300 hover:scale-103"
          >
            <span className="relative z-10 flex items-center gap-2">
              Watch Now <span className="text-red-400/70">(Coming Soon)</span>
            </span>
          </a>
        </div>

        {/* Release info */}
        <p className={`mt-12 text-gray-500 text-sm font-cinematic tracking-[0.3em] uppercase transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.5s' }}>
          AI SCI-FI HORROR &bull; 2026
        </p>
      </div>

      {/* Bottom horror gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-rift-darker via-rift-dark/90 to-transparent"></div>

      {/* Atmospheric corner shadows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-rift-blood/6 to-transparent"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-rift-blood/6 to-transparent"></div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${loaded ? 'opacity-50' : 'opacity-0'}`} style={{ transitionDelay: '2s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-[9px] font-nav tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-rift-neon/40 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
