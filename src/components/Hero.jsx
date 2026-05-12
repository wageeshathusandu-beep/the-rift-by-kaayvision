export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-rift-blue via-rift-dark to-rift-dark"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rift-neon/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rift-neon-purple/5 rounded-full blur-[100px]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-rift-neon/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Name */}
        <p className="title-cinematic text-lg md:text-2xl mb-6 animate-fade-in tracking-[0.25em]">
          <span className="text-white">KAAY</span>{' '}
          <span className="text-rift-glow neon-glow-strong">VISION</span>
        </p>

        {/* Movie Poster */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://i.imgur.com/162JyPV.jpeg"
            alt="The Rift Official Poster"
            className="w-full max-w-md rounded-2xl shadow-2xl shadow-rift-neon/10 border border-white/10"
          />
        </div>

        {/* Title */}
        <h1 className="title-cinematic text-5xl md:text-7xl lg:text-8xl mb-4 animate-slide-up neon-glow-strong">
          <span className="bg-gradient-to-r from-white via-rift-neon to-rift-neon-purple bg-clip-text text-transparent">
            THE RIFT
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up font-body font-light tracking-wide" style={{ animationDelay: '0.2s' }}>
          When artificial intelligence tears open the fabric of reality, humanity faces its darkest hour.
          Some doors were never meant to be opened.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {/* Watch Trailer Button - blue with glow pulse, play icon pulse, hover scale, light sweep */}
          <a
            href="#trailer"
            className="btn-watch-trailer group relative px-8 py-4 bg-gradient-to-r from-rift-neon to-rift-glow text-black font-nav font-bold uppercase tracking-[0.15em] rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-rift-neon/50"
          >
            {/* Light sweep overlay */}
            <span className="btn-light-sweep absolute inset-0 z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 animate-play-icon-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Trailer
            </span>
          </a>

          {/* Watch Now (Coming Soon) Button - red glow pulse on "(Coming Soon)" */}
          <a
            href="#"
            className="btn-watch-now relative px-8 py-4 border border-white/30 text-white font-nav font-bold uppercase tracking-[0.15em] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              Watch Now <span className="text-red-500 animate-red-glow-pulse">(Coming Soon)</span>
            </span>
          </a>
        </div>

        {/* Release info */}
        <p className="mt-12 text-gray-500 text-sm font-cinematic tracking-[0.3em] animate-fade-in uppercase" style={{ animationDelay: '0.8s' }}>
          AI SCI-FI HORROR &bull; 2025
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-dark to-transparent"></div>
    </section>
  )
}
