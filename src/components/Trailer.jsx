import { useEffect, useRef, useState } from 'react'

export default function Trailer() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="trailer" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030108] via-[#060610] to-[#030108]"></div>
      <div className="absolute top-0 left-0 right-0 archive-divider"></div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-rift-blue/4 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-rift-red/5 rounded-full blur-[120px]"></div>

      <span className="absolute top-6 left-4 md:left-8 tech-label">ARCHIVE FILE 002 // TRANSMISSION</span>
      <span className="absolute top-6 right-4 md:right-8 tech-label">PLAYBACK</span>

      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="tech-label text-center mb-2">Experience The Terror</p>
        <h2 className="section-heading mb-4">Official Trailer</h2>
        <p className="text-center text-rift-metal mb-12 max-w-xl mx-auto font-body text-lg tracking-wide">Watch the first look in stunning high definition</p>

        {/* Video frame */}
        <div className={`transition-all duration-[1.2s] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="ind-card p-0 overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.05)]">
            {/* Top bar */}
            <div className="h-7 bg-[#060610] border-b border-rift-neon/10 flex items-center justify-between px-3">
              <div className="flex items-center gap-2">
                <span className="amber-dot"></span>
                <span className="tech-label">TRANSMISSION PLAYBACK</span>
              </div>
              <span className="tech-label">DUR: 2:45</span>
            </div>

            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/BjWxnZRaf5E"
                title="The Rift - Official Trailer" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>

            {/* Bottom bar */}
            <div className="h-6 bg-[#060610] border-t border-rift-neon/10 flex items-center justify-between px-3">
              <span className="tech-label">4K ULTRA HD</span>
              <span className="tech-label">OFFICIAL TEASER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
