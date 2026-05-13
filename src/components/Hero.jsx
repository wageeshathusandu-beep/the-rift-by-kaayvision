import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', check)
    }
  }, [])

  // Reduce particle counts based on device
  const floatingCount = isMobile ? 10 : 20
  const emberCount = isMobile ? 4 : 8

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-rift-dark to-rift-darker"></div>

      {/* Atmospheric fog layers - lightweight */}
      <div className="fog-layer">
        <div className="absolute inset-0 bg-gradient-to-r from-rift-blood/5 via-transparent to-rift-neon/3 animate-fog-drift"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-rift-blood/3 via-transparent to-rift-neon-purple/5 animate-fog-drift-reverse"></div>
      </div>

      {/* Horror ambient glows - reduced blur values for mobile */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 ${isMobile ? 'w-[400px] h-[400px] blur-[80px]' : 'w-[600px] h-[600px] blur-[120px]'} bg-rift-blood/5 rounded-full animate-horror-pulse`}></div>
      {!isMobile && (
        <>
          <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-rift-neon/3 rounded-full blur-[80px]" style={{ animation: 'horror-pulse 7s ease-in-out infinite', animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/5 w-[250px] h-[250px] bg-rift-neon-purple/4 rounded-full blur-[60px]" style={{ animation: 'horror-pulse 6s ease-in-out infinite', animationDelay: '4s' }}></div>
        </>
      )}

      {/* Floating horror particles - optimized count */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(floatingCount)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${i % 3 === 0 ? 'w-1 h-1 bg-rift-blood-light/40' : i % 3 === 1 ? 'w-0.5 h-0.5 bg-rift-neon/30' : 'w-1.5 h-1.5 bg-rift-blood/20'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Rising ember particles - reduced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(emberCount)].map((_, i) => (
          <div
            key={`ember-${i}`}
            className="absolute w-0.5 h-0.5 bg-rift-blood-glow/50 rounded-full animate-particle-rise"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: '-5%',
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${7 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Premium Animated Brand - cinematic fade in */}
        <div className={`mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <BrandLogo size="lg" />
        </div>

        {/* Movie Poster with cinematic float */}
        <div className={`mb-8 flex justify-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="relative group poster-container">
            {/* Atmospheric glow behind poster */}
            <div className="absolute -inset-4 bg-gradient-to-b from-rift-blood/15 via-rift-neon/4 to-rift-blood/10 rounded-3xl blur-xl poster-glow"></div>
            
            {/* Horror border glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-rift-blood/25 via-rift-neon/8 to-rift-blood/15 rounded-2xl blur-sm animate-horror-pulse"></div>
            
            {/* Poster image */}
            <img
              src="https://i.imgur.com/162JyPV.jpeg"
              alt="The Rift Official Poster"
              className="relative w-full max-w-md rounded-2xl shadow-[0_0_40px_rgba(139,0,0,0.25)] border border-rift-blood/30 group-hover:border-rift-neon/30 transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(0,212,255,0.15),0_0_40px_rgba(139,0,0,0.25)]"
            />
            
            {/* Moving light sweep over poster */}
            <div className="poster-sweep"></div>
          </div>
        </div>

        {/* Title with cinematic reveal */}
        <h1 className={`title-cinematic text-5xl md:text-7xl lg:text-8xl mb-4 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
          <span className="bg-gradient-to-r from-white via-rift-neon to-rift-blood-light bg-clip-text text-transparent bg-[length:200%_100%]" style={{ textShadow: 'none', animation: 'title-gradient-shift 8s ease-in-out infinite' }}>
            THE RIFT
          </span>
        </h1>

        {/* Tagline with staggered reveal */}
        <p className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-body font-light tracking-wide transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.7s' }}>
          When artificial intelligence tears open the fabric of reality, humanity faces its darkest hour.
          <span className="text-rift-blood-light/60"> Some doors were never meant to be opened.</span>
        </p>

        {/* Buttons with reveal */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.9s' }}>
          {/* Watch Trailer Button */}
          <a
            href="#trailer"
            className="btn-watch-trailer group relative px-8 py-4 bg-gradient-to-r from-rift-neon to-rift-glow text-black font-nav font-bold uppercase tracking-[0.15em] rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-rift-neon/50"
          >
            <span className="btn-light-sweep absolute inset-0 z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 animate-play-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Trailer
            </span>
          </a>

          {/* Watch Now (Coming Soon) Button */}
          <a
            href="#"
            className="btn-watch-now relative px-8 py-4 border border-rift-blood/40 text-white font-nav font-bold uppercase tracking-[0.15em] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-rift-blood-light/60 hover:shadow-[0_0_20px_rgba(139,0,0,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Watch Now <span className="text-red-500 animate-red-glow-pulse">(Coming Soon)</span>
            </span>
          </a>
        </div>

        {/* Release info */}
        <p className={`mt-12 text-gray-600 text-sm font-cinematic tracking-[0.3em] uppercase transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
          AI SCI-FI HORROR &bull; 2025
        </p>
      </div>

      {/* Bottom horror gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-rift-darker via-rift-dark/80 to-transparent"></div>

      {/* Blood-tint top corners */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-rift-blood/8 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-rift-blood/8 to-transparent"></div>
    </section>
  )
}
