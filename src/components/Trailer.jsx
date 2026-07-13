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
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#030308] to-rift-darker"></div>

      {/* Fog */}
      <div className="fog-layer"></div>

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-rift-blood/[0.03] rounded-full blur-[180px]"></div>
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-rift-neon/[0.025] rounded-full blur-[100px]"></div>

      {/* Cinematic section entrance divider */}
      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section intro */}
        <div className="text-center mb-14">
          <p className="text-rift-blood-light/50 text-[10px] font-cinematic tracking-[0.4em] uppercase mb-3">Experience The Terror</p>
          <h2 className="section-heading">Official Trailer</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto font-body text-lg tracking-wide">Watch the first look in stunning high definition</p>
        </div>

        {/* Video Container */}
        <div className={`transition-all duration-[1.2s] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="trailer-frame relative rounded-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/2URGQBTpOf4"
                title="The Rift - Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {/* Film strip borders */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rift-neon/30 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rift-blood/30 to-transparent z-10"></div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-rift-neon/30 z-10"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rift-neon/30 z-10"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-rift-blood/30 z-10"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-rift-blood/30 z-10"></div>
          </div>
        </div>

        {/* Below trailer info */}
        <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400 font-nav uppercase tracking-wider transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.6s' }}>
          <span className="flex items-center gap-2 hover:text-rift-blood-light transition-colors duration-300">
            <svg className="w-4 h-4 text-rift-blood-light/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Duration: 2:45
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-rift-neon/20"></span>
          <span className="flex items-center gap-2 hover:text-rift-neon transition-colors duration-300">
            <svg className="w-4 h-4 text-rift-neon/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Official Teaser
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-rift-neon/20"></span>
          <span className="flex items-center gap-2 hover:text-rift-blood-light transition-colors duration-300">
            <svg className="w-4 h-4 text-rift-blood-light/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
