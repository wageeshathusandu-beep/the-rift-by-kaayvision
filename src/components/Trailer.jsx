import { useEffect, useRef, useState } from 'react'

export default function Trailer() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="trailer" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#050510] to-rift-darker"></div>

      {/* Horror ambient glows - immersive theater feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-rift-blood/4 rounded-full blur-[180px]"></div>
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-rift-neon/3 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] bg-purple-900/3 rounded-full blur-[100px]"></div>

      {/* Fog layers */}
      <div className="fog-layer">
        <div className="absolute inset-0 bg-gradient-to-r from-rift-blood/3 via-transparent to-rift-neon/2 animate-fog-drift opacity-25"></div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-rift-blood/4 to-transparent opacity-20"></div>
      </div>

      {/* Cinematic section entrance divider */}
      <div className="absolute top-0 left-0 right-0">
        <div className="horror-divider"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-rift-blood/20 to-transparent mt-px"></div>
      </div>

      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section intro */}
        <div className="text-center mb-14">
          <p className="text-rift-blood-light/60 text-[10px] font-cinematic tracking-[0.4em] uppercase mb-3">Experience The Terror</p>
          <h2 className="section-heading">Official Trailer</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto font-body text-lg tracking-wide">Watch the first look in stunning high definition</p>
        </div>

        {/* Video Container with animated glowing frame */}
        <div className={`transition-all duration-[1.2s] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="trailer-frame relative rounded-2xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/2URGQBTpOf4"
                title="The Rift - Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {/* Horror film strip borders */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rift-blood/40 via-rift-neon/30 to-rift-blood/40 z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rift-blood/40 via-rift-neon/30 to-rift-blood/40 z-10"></div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-rift-neon/40 rounded-tl-2xl z-10"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rift-neon/40 rounded-tr-2xl z-10"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-rift-blood/50 rounded-bl-2xl z-10"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-rift-blood/50 rounded-br-2xl z-10"></div>
          </div>
        </div>

        {/* Below trailer info */}
        <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 font-nav uppercase tracking-wider transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.6s' }}>
          <span className="flex items-center gap-2 hover:text-rift-blood-light transition-colors duration-300">
            <svg className="w-4 h-4 text-rift-blood-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Duration: 2:45
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-700"></span>
          <span className="flex items-center gap-2 hover:text-rift-neon transition-colors duration-300">
            <svg className="w-4 h-4 text-rift-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Official Teaser
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-700"></span>
          <span className="flex items-center gap-2 hover:text-rift-blood-light transition-colors duration-300">
            <svg className="w-4 h-4 text-rift-blood-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2m0 2v2m0-2H5.5a2.5 2.5 0 00-2.5 2.5v0A2.5 2.5 0 005.5 9H7m0-5h2m0 0V2m0 2v2m0-2h2.5A2.5 2.5 0 0114 6.5v0A2.5 2.5 0 0111.5 9H10" />
            </svg>
            4K Ultra HD
          </span>
        </div>
      </div>

      {/* Bottom cinematic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-darker to-transparent"></div>
    </section>
  )
}
