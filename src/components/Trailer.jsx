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
      <div className="absolute inset-0 bg-gradient-to-b from-sci-black via-sci-darker to-sci-black"></div>
      <div className="absolute top-0 left-0 right-0 glow-divider"></div>

      {/* Ambient orbs */}
      <div className="orb-cyan w-[400px] h-[400px] top-[10%] left-[-10%] opacity-40"></div>
      <div className="orb-blue w-[350px] h-[350px] bottom-[10%] right-[-5%] opacity-30"></div>

      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="tech-label text-center mb-3 text-sci-cyan/70">Experience The Terror</p>
        <h2 className="section-heading mb-4">Official Trailer</h2>
        <p className="text-center text-sci-muted mb-12 max-w-xl mx-auto font-body text-lg tracking-wide">Watch the first look in stunning high definition</p>

        {/* Video frame with glassmorphism */}
        <div className={`transition-all duration-[1.2s] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="glass-card p-0 overflow-hidden rounded-2xl">
            {/* Top bar */}
            <div className="h-10 bg-sci-navy/80 border-b border-sci-cyan/10 flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sci-cyan animate-glow-pulse"></div>
                <span className="tech-label text-sci-cyan/80">NOW PLAYING</span>
              </div>
              <span className="tech-label">4K ULTRA HD</span>
            </div>

            {/* Video iframe - PRESERVED URL */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/BjWxnZRaf5E"
                title="The Rift - Official Trailer" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>

            {/* Bottom bar */}
            <div className="h-8 bg-sci-navy/80 border-t border-sci-cyan/10 flex items-center justify-between px-4">
              <span className="tech-label">OFFICIAL TRAILER</span>
              <span className="tech-label text-sci-cyan/60">KAAY VISION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
