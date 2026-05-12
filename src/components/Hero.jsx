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
        {/* Movie Poster Card */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="relative w-64 sm:w-72 md:w-80 aspect-[2/3] rounded-2xl overflow-hidden border border-rift-neon/30 shadow-[0_0_60px_rgba(0,212,255,0.15),0_0_120px_rgba(123,47,247,0.08)]">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-rift-blue via-rift-dark to-black"></div>
            {/* Center glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rift-neon/10 rounded-full blur-[60px]"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
              {/* Decorative ring */}
              <div className="w-24 h-24 mb-6 rounded-full border border-rift-neon/40 flex items-center justify-center animate-glow-pulse">
                <div className="w-16 h-16 rounded-full border border-rift-neon/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-rift-neon/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 0A1.125 1.125 0 014.5 4.5h15a1.125 1.125 0 011.125 1.125m-17.25 0h17.25m0 0v12.75M20.625 5.625v12.75m0 0a1.125 1.125 0 01-1.125 1.125m1.125-1.125h-1.5c-.621 0-1.125-.504-1.125-1.125m2.625 0h.375" />
                  </svg>
                </div>
              </div>
              {/* Title */}
              <h2 className="font-cinematic text-3xl md:text-4xl font-black tracking-widest text-white drop-shadow-[0_0_10px_rgba(0,212,255,0.4)] mb-2">
                THE RIFT
              </h2>
              {/* Divider */}
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rift-neon/60 to-transparent mb-3"></div>
              {/* Subtitle */}
              <p className="text-rift-neon/80 text-xs font-cinematic tracking-[0.2em] mb-4">
                Official Movie Poster
              </p>
              {/* Coming Soon */}
              <span className="px-4 py-1.5 border border-rift-neon/30 rounded-full text-[10px] font-cinematic tracking-[0.3em] text-gray-400 uppercase">
                Coming Soon
              </span>
            </div>
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rift-neon/50 to-transparent"></div>
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
