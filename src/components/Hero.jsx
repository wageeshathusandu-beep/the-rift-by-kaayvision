import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 200); return () => clearTimeout(t) }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-deep"></div>
      <div className="absolute inset-0 particle-grid opacity-30"></div>

      {/* Ambient orbs */}
      <div className="orb orb-cyan w-[600px] h-[600px] top-[-15%] left-[-10%] opacity-70"></div>
      <div className="orb orb-blue w-[500px] h-[500px] bottom-[-10%] right-[-10%] opacity-60"></div>
      <div className="orb orb-red w-[350px] h-[350px] top-[40%] right-[5%] opacity-50"></div>
      <div className="orb orb-purple w-[400px] h-[400px] bottom-[20%] left-[10%] opacity-40"></div>

      {/* Fog layers */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-void via-void/80 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-void/60 to-transparent"></div>

      {/* Horizontal alien lines */}
      <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-alien-cyan/10 to-transparent"></div>
      <div className="absolute top-[80%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-alien-cyan/10 to-transparent"></div>

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-[2.5s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

        {/* Studio credit */}
        <p className="tech-label mb-6 animate-pulse-slow">KAAY VISION PRODUCTIONS PRESENTS</p>

        {/* Movie Poster */}
        <div className="relative inline-block mb-10 group animate-float-slow">
          {/* Glow ring */}
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-b from-alien-cyan/10 via-transparent to-alien-red/5 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="absolute -inset-1 rounded-lg border border-alien-cyan/10 group-hover:border-alien-cyan/25 transition-all duration-700"></div>
          <img
            src="https://i.imgur.com/162JyPV.jpeg"
            alt="The Rift Official Poster"
            className="relative w-full max-w-xs sm:max-w-sm rounded-lg shadow-cyan-lg border border-alien-cyan/15 transition-all duration-700 group-hover:shadow-cyan-lg group-hover:border-alien-cyan/30"
          />
          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-alien-cyan/30 rounded-tl-md"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-alien-cyan/30 rounded-br-md"></div>
        </div>

        {/* Title */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-soft-white mb-4 glow-title animate-flicker">
          THE RIFT
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-4 font-body tracking-wide leading-relaxed">
          When artificial intelligence tears open the fabric of reality,
          <span className="text-alien-cyan/80"> humanity faces extinction.</span>
        </p>
        <p className="text-sm text-alien-crimson/70 font-mono tracking-widest mb-10 uppercase">Some doors were never meant to be opened</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#trailer" className="btn-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Watch Trailer
          </a>
          <a href="#about" className="btn-secondary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Explore The Film
          </a>
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-center gap-6 text-muted/60">
          <span className="font-mono text-xs tracking-wider">2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-alien-cyan/40 animate-pulse-slow"></span>
          <span className="font-mono text-xs tracking-wider">SCI-FI HORROR</span>
          <span className="w-1.5 h-1.5 rounded-full bg-alien-red/40 animate-pulse-slow"></span>
          <span className="font-mono text-xs tracking-wider">AI</span>
        </div>
      </div>
    </section>
  )
}
