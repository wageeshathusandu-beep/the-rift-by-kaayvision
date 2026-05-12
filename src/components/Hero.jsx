export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rift-blue via-rift-dark to-rift-dark"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rift-neon/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rift-neon-purple/5 rounded-full blur-[80px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="font-cinematic text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-6">
          <span className="bg-gradient-to-r from-white via-rift-neon to-rift-neon-purple bg-clip-text text-transparent">
            THE RIFT
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
          When AI tears open the fabric of reality, humanity faces its darkest hour. Some doors were never meant to be opened.
        </p>

        {/* Movie Poster */}
        <div className="mb-10 flex justify-center w-full">
          <img
            src="https://i.imgur.com/162JyPV.jpeg"
            alt="The Rift Official Poster"
            className="w-full max-w-sm rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Watch Trailer Button */}
          <a
            href="#trailer"
            onClick={(e) => { e.preventDefault(); document.getElementById('trailer')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group relative px-8 py-4 bg-gradient-to-r from-rift-neon to-rift-glow text-black font-semibold rounded-full transition-all duration-500 hover:scale-110 animate-neon-btn-glow hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] flex items-center gap-2 overflow-hidden"
          >
            {/* Light sweep overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light-sweep bg-[length:200%_100%] pointer-events-none"></span>
            <svg className="w-5 h-5 relative z-10 group-hover:animate-pulse transition-transform duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="relative z-10">Watch Trailer</span>
          </a>

          {/* Watch Now Button */}
          <a
            href="#"
            className="px-8 py-4 border border-rift-neon/40 text-rift-neon font-semibold rounded-full hover:bg-rift-neon/10 hover:border-rift-neon transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rift-neon/20"
          >
            Watch Now <span className="animate-red-flicker text-rift-red font-bold">(Coming Soon)</span>
          </a>
        </div>

        {/* Release badge */}
        <p className="mt-10 text-gray-500 text-sm font-cinematic tracking-[0.3em]">
          AI SCI-FI HORROR &bull; 2025
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-dark to-transparent"></div>
    </section>
  )
}
