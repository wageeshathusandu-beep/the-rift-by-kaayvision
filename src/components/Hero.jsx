import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 150); return () => clearTimeout(t) }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#050505]"></div>
      <div className="absolute inset-0 scanlines"></div>

      {/* Ambient glow orbs */}
      <div className="orb-amber w-[500px] h-[500px] top-[-10%] left-[-10%]"></div>
      <div className="orb-red w-[400px] h-[400px] bottom-[10%] right-[-5%]"></div>
      <div className="orb-cyan w-[300px] h-[300px] top-[30%] right-[10%] opacity-60"></div>
      <div className="orb-purple w-[350px] h-[350px] bottom-[20%] left-[5%] opacity-50"></div>

      {/* Grid markings */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(216,154,43,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(216,154,43,0.4) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

      {/* Corner tech labels */}
      <span className="absolute top-20 left-4 md:left-8 tech-label">TRANSMISSION // 0x7A2F</span>
      <span className="absolute top-20 right-4 md:right-8 tech-label">STATUS: <span className="text-rift-amber/80">ACTIVE</span></span>
      <span className="absolute bottom-8 left-4 md:left-8 tech-label">ARCHIVE FILE 001</span>
      <span className="absolute bottom-8 right-4 md:right-8 tech-label">LAT 7.4818 // LON 80.3609</span>

      {/* Framing lines */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rift-metal/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rift-amber/20 to-transparent"></div>
      <div className="absolute top-16 bottom-0 left-6 md:left-12 w-px bg-gradient-to-b from-rift-metal/10 via-rift-metal/5 to-transparent"></div>
      <div className="absolute top-16 bottom-0 right-6 md:right-12 w-px bg-gradient-to-b from-rift-metal/10 via-rift-metal/5 to-transparent"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-[2s] ease-smooth ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Studio credit */}
        <p className="tech-label mb-2">A Production By</p>
        <div className="py-1"><BrandLogo size="lg" /></div>
        <p className="font-mono text-[10px] text-rift-amber/50 tracking-[0.4em] uppercase mt-1 mb-10">Presents</p>

        {/* Poster with floating animation */}
        <div className="relative inline-block mb-10 group animate-float-slow">
          <div className="absolute -inset-3 border border-rift-metal/10 transition-all duration-700 group-hover:border-rift-amber/20"></div>
          <div className="absolute -inset-1 border border-rift-metal/5 transition-all duration-700 group-hover:border-rift-amber/10"></div>
          {/* Poster glow behind */}
          <div className="absolute -inset-6 bg-gradient-to-b from-rift-amber/5 via-transparent to-rift-red/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <img src="https://i.imgur.com/162JyPV.jpeg" alt="The Rift Official Poster"
            className="relative w-full max-w-sm rounded-none shadow-cinema border border-rift-metal/15 transition-all duration-700 group-hover:border-rift-amber/25 group-hover:shadow-amber-glow-lg" />
          <span className="absolute -top-5 left-2 tech-label">RECOVERED MEDIA</span>
          <span className="absolute -bottom-5 right-2 tech-label">RES: 1080x1920</span>
          {/* Scanlines on poster */}
          <div className="absolute inset-0 scanlines pointer-events-none"></div>
        </div>

        {/* Title */}
        <h1 className="glitch-title font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.06em] text-rift-offwhite mb-4" data-text="THE RIFT"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 60px rgba(216,154,43,0.1), 0 0 80px rgba(122,23,23,0.08)' }}>
          THE RIFT
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-rift-metal max-w-2xl mx-auto mb-8 font-body tracking-wide leading-relaxed">
          When artificial intelligence tears open the fabric of reality, humanity faces its darkest hour.
          <span className="text-rift-red/80"> Some doors were never meant to be opened.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#trailer" className="btn-industrial">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Watch Trailer
          </a>
          <a href="#" className="btn-industrial border-rift-red/30 hover:border-rift-red/60 hover:text-rift-red">
            Watch Now <span className="text-rift-red/50 ml-1">(Coming Soon)</span>
          </a>
        </div>

        <p className="font-mono text-[10px] text-rift-metal/40 tracking-[0.3em] uppercase">AI SCI-FI HORROR &bull; 2026</p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent"></div>
    </section>
  )
}
