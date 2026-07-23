import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 150); return () => clearTimeout(t) }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sci-black via-sci-darker to-sci-black"></div>
      <div className="absolute inset-0 grid-pattern opacity-40"></div>

      {/* Ambient glow orbs */}
      <div className="orb-cyan w-[500px] h-[500px] top-[-10%] left-[-10%]"></div>
      <div className="orb-blue w-[600px] h-[600px] bottom-[-20%] right-[-15%]"></div>
      <div className="orb-cyan w-[300px] h-[300px] top-[40%] right-[5%] opacity-50"></div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-effect overflow-hidden pointer-events-none"></div>

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-[1.8s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Studio credit */}
        <p className="tech-label mb-3 text-sci-cyan/70">A KAAY VISION Production</p>

        {/* Movie Poster */}
        <div className="relative inline-block mb-10 group">
          {/* Glow ring behind poster */}
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-sci-cyan/20 via-transparent to-sci-blue/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
          <img
            src="https://i.imgur.com/162JyPV.jpeg"
            alt="The Rift Official Poster"
            className="relative w-full max-w-xs sm:max-w-sm rounded-xl poster-glow border border-sci-cyan/10 transition-all duration-700 group-hover:border-sci-cyan/30 group-hover:scale-[1.02]"
          />
          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-sci-cyan/40 rounded-tl-md"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-sci-cyan/40 rounded-br-md"></div>
        </div>

        {/* Movie Title */}
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] mb-4 neon-text animate-flicker">
          THE RIFT
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-sci-muted max-w-2xl mx-auto mb-10 font-body tracking-wide leading-relaxed">
          When artificial intelligence tears open the fabric of reality, humanity faces its darkest hour.
          <span className="text-sci-electric"> Some doors were never meant to be opened.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#trailer" className="btn-neon">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Watch Trailer
          </a>
          <a href="#cast" className="btn-secondary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Book Tickets
          </a>
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-center gap-6 text-sci-muted/60">
          <span className="font-mono text-xs tracking-wider">2026</span>
          <span className="w-1 h-1 rounded-full bg-sci-cyan/50"></span>
          <span className="font-mono text-xs tracking-wider">SCI-FI HORROR</span>
          <span className="w-1 h-1 rounded-full bg-sci-cyan/50"></span>
          <span className="font-mono text-xs tracking-wider">AI</span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sci-black to-transparent"></div>
    </section>
  )
}
