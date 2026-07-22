import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050507]"></div>
      <div className="absolute inset-0 scanlines"></div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rift-blue/5 rounded-full blur-[180px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rift-red/8 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rift-neon/3 rounded-full blur-[200px]"></div>

      {/* Grid markings */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(0,240,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.3) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

      {/* Corner tech labels */}
      <span className="absolute top-20 left-4 md:left-8 tech-label">TRANSMISSION // 0x7A2F</span>
      <span className="absolute top-20 right-4 md:right-8 tech-label">STATUS: <span className="text-rift-neon/80">ACTIVE</span></span>
      <span className="absolute bottom-8 left-4 md:left-8 tech-label">ARCHIVE FILE 001</span>
      <span className="absolute bottom-8 right-4 md:right-8 tech-label">LAT 7.4818 // LON 80.3609</span>

      {/* Framing lines */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rift-neon/15 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rift-red/20 to-transparent"></div>
      <div className="absolute top-16 bottom-0 left-6 md:left-12 w-px bg-gradient-to-b from-rift-neon/10 via-rift-neon/5 to-transparent"></div>
      <div className="absolute top-16 bottom-0 right-6 md:right-12 w-px bg-gradient-to-b from-rift-neon/10 via-rift-neon/5 to-transparent"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-[1.5s] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Studio credit */}
        <p className="tech-label mb-2">A Production By</p>
        <div className="py-1"><BrandLogo size="lg" /></div>
        <p className="font-mono text-[10px] text-rift-neon/50 tracking-[0.4em] uppercase mt-1 mb-10">Presents</p>

        {/* Poster with glow */}
        <div className="relative inline-block mb-10 group">
          <div className="absolute -inset-3 border border-rift-neon/10 transition-all duration-700 group-hover:border-rift-neon/20"></div>
          <div className="absolute -inset-1 border border-rift-neon/5"></div>
          <div className="absolute -inset-4 bg-rift-neon/3 blur-xl rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img src="https://i.imgur.com/162JyPV.jpeg" alt="The Rift Official Poster"
            className="relative w-full max-w-sm rounded-none poster-glow transition-all duration-700" />
          <span className="absolute -top-5 left-2 tech-label">RECOVERED MEDIA</span>
          <span className="absolute -bottom-5 right-2 tech-label">RES: 1080x1920</span>
          <div className="absolute inset-0 scanlines pointer-events-none"></div>
        </div>

        {/* Title */}
        <h1 className="glitch-title font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.06em] text-rift-offwhite mb-4" data-text="THE RIFT"
          style={{ textShadow: '0 0 20px rgba(0,240,255,0.5), 0 0 40px rgba(0,240,255,0.3), 0 0 80px rgba(0,240,255,0.1), 0 4px 20px rgba(0,0,0,0.9)' }}>
          THE RIFT
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-rift-metal max-w-2xl mx-auto mb-8 font-body tracking-wide leading-relaxed">
          When artificial intelligence tears open the fabric of reality, humanity faces its darkest hour.
          <span className="text-rift-blood-light"> Some doors were never meant to be opened.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#trailer" className="btn-industrial">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Watch Trailer
          </a>
          <a href="#" className="btn-secondary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 0A1.125 1.125 0 014.5 4.5h15a1.125 1.125 0 011.125 1.125m-17.25 0h17.25m0 0v12.75M20.625 5.625v12.75m0 0a1.125 1.125 0 01-1.125 1.125m1.125-1.125h-1.5m-15 0h15" /></svg>
            Watch Now <span className="text-rift-blood-light/50 ml-1">(Coming Soon)</span>
          </a>
        </div>

        <p className="font-mono text-[10px] text-rift-neon/30 tracking-[0.3em] uppercase">AI SCI-FI HORROR &bull; 2026</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="tech-label">SCROLL</span>
        <svg className="w-5 h-5 text-rift-neon/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050507] to-transparent"></div>
    </section>
  )
}
