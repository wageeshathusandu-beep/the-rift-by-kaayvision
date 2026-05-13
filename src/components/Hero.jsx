import BrandLogo from './BrandLogo'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080810] via-rift-dark to-rift-darker"></div>

      {/* Atmospheric fog layers */}
      <div className="fog-layer">
        <div className="absolute inset-0 bg-gradient-to-r from-rift-blood/5 via-transparent to-rift-neon/3 animate-fog-drift"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-rift-blood/3 via-transparent to-rift-neon-purple/5 animate-fog-drift-reverse"></div>
      </div>

      {/* Horror ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-rift-blood/5 rounded-full blur-[150px] animate-horror-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-rift-neon/3 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/3 left-1/5 w-[300px] h-[300px] bg-rift-neon-purple/4 rounded-full blur-[100px]"></div>

      {/* Floating horror particles - mixed red and blue */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${i % 3 === 0 ? 'w-1 h-1 bg-rift-blood-light/40' : i % 3 === 1 ? 'w-0.5 h-0.5 bg-rift-neon/30' : 'w-1.5 h-1.5 bg-rift-blood/20'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 7}s`,
            }}
          />
        ))}
      </div>

      {/* Rising ember particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`ember-${i}`}
            className="absolute w-0.5 h-0.5 bg-rift-blood-glow/50 rounded-full animate-particle-rise"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: '-5%',
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Premium Animated Brand */}
        <div className="mb-8 text-reveal">
          <BrandLogo size="lg" />
        </div>

        {/* Movie Poster with cinematic float + light sweep */}
        <div className="mb-8 flex justify-center text-reveal text-reveal-delay-1">
          <div className="relative group poster-cinematic">
            {/* Glowing atmosphere behind poster */}
            <div className="poster-glow-bg"></div>
            
            {/* Horror border glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-rift-blood/30 via-rift-neon/10 to-rift-blood/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-700 animate-horror-pulse"></div>
            
            <img
              src="https://i.imgur.com/162JyPV.jpeg"
              alt="The Rift Official Poster"
              className="relative w-full max-w-md rounded-2xl shadow-[0_0_50px_rgba(139,0,0,0.3)] border border-rift-blood/30"
            />
            
            {/* Light sweep over poster */}
            <div className="poster-light-sweep"></div>
          </div>
        </div>

        {/* Title with horror glow */}
        <h1 className="title-cinematic text-5xl md:text-7xl lg:text-8xl mb-4 text-reveal text-reveal-delay-2">
          <span className="bg-gradient-to-r from-white via-rift-neon to-rift-blood-light bg-clip-text text-transparent" style={{ textShadow: 'none' }}>
            THE RIFT
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 text-reveal text-reveal-delay-3 font-body font-light tracking-wide">
          When artificial intelligence tears open the fabric of reality, humanity faces its darkest hour.
          <span className="text-rift-blood-light/60"> Some doors were never meant to be opened.</span>
        </p>

        {/* Buttons with cinematic effects */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-reveal text-reveal-delay-4">
          {/* Watch Trailer Button */}
          <a
            href="#trailer"
            className="btn-cinematic btn-watch-trailer group relative px-8 py-4 bg-gradient-to-r from-rift-neon to-rift-glow text-black font-nav font-bold uppercase tracking-[0.15em] rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-rift-neon/50"
          >
            <span className="btn-light-sweep absolute inset-0 z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 animate-play-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Trailer
            </span>
          </a>

          {/* Watch Now (Coming Soon) Button - horror styled */}
          <a
            href="#"
            className="btn-cinematic btn-cinematic-red btn-watch-now relative px-8 py-4 border border-rift-blood/40 text-white font-nav font-bold uppercase tracking-[0.15em] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-rift-blood-light/60 hover:shadow-[0_0_20px_rgba(139,0,0,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Watch Now <span className="text-red-500 animate-red-glow-pulse">(Coming Soon)</span>
            </span>
          </a>
        </div>

        {/* Release info */}
        <p className="mt-12 text-gray-600 text-sm font-cinematic tracking-[0.3em] text-reveal text-reveal-delay-4 uppercase" style={{ animationDelay: '1s' }}>
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
