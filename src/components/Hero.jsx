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
        {/* Movie Poster Placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-block relative">
            <div className="w-64 h-96 md:w-72 md:h-[28rem] mx-auto rounded-2xl bg-gradient-to-b from-rift-deep to-rift-dark border border-rift-neon/20 shadow-2xl shadow-rift-neon/10 flex items-center justify-center overflow-hidden animate-glow-pulse">
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rift-neon/10 border border-rift-neon/30 flex items-center justify-center">
                  <svg className="w-10 h-10 text-rift-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <p className="text-rift-neon/60 text-sm font-cinematic tracking-widest">MOVIE POSTER</p>
                <p className="text-gray-500 text-xs mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-cinematic text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 animate-slide-up">
          <span className="bg-gradient-to-r from-white via-rift-neon to-rift-neon-purple bg-clip-text text-transparent">
            THE RIFT
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up font-light tracking-wide" style={{ animationDelay: '0.2s' }}>
          When artificial intelligence tears open the fabric of reality, humanity faces its darkest hour.
          Some doors were never meant to be opened.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#trailer"
            className="group relative px-8 py-4 bg-gradient-to-r from-rift-neon to-rift-glow text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rift-neon/30"
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
            className="px-8 py-4 border border-rift-neon/40 text-rift-neon font-semibold rounded-full hover:bg-rift-neon/10 hover:border-rift-neon transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rift-neon/20"
          >
            Watch Now
          </a>
        </div>

        {/* Release info */}
        <p className="mt-12 text-gray-500 text-sm font-cinematic tracking-[0.3em] animate-fade-in" style={{ animationDelay: '0.8s' }}>
          AI SCI-FI HORROR &bull; 2025
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-dark to-transparent"></div>
    </section>
  )
}
