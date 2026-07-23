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
    <section id="trailer" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-abyss to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>

      {/* Ambient */}
      <div className="orb orb-cyan w-[450px] h-[450px] top-[5%] right-[-10%] opacity-50"></div>
      <div className="orb orb-red w-[350px] h-[350px] bottom-[10%] left-[-8%] opacity-40"></div>

      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="tech-label text-center mb-3">TRANSMISSION RECEIVED</p>
        <h2 className="section-title mb-4">Official Trailer</h2>
        <p className="text-center text-muted mb-14 max-w-xl mx-auto font-body text-lg tracking-wide">First contact. No survivors.</p>

        {/* Video frame with cinematic glow */}
        <div className={`transition-all duration-[1.8s] ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="relative group">
            {/* Outer glow */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-alien-cyan/20 via-alien-blue/10 to-alien-cyan/20 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative glass-card p-0 overflow-hidden rounded-xl">
              {/* Top bar */}
              <div className="h-10 bg-abyss/80 border-b border-alien-cyan/10 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-alien-cyan animate-pulse-slow"></div>
                  <span className="tech-label">PLAYBACK ACTIVE</span>
                </div>
                <span className="tech-label">4K ULTRA HD</span>
              </div>

              {/* Video */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/BjWxnZRaf5E"
                  title="The Rift - Official Trailer" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </div>

              {/* Bottom bar */}
              <div className="h-8 bg-abyss/80 border-t border-alien-cyan/10 flex items-center justify-between px-4">
                <span className="tech-label">SIGNAL: STRONG</span>
                <span className="tech-label text-alien-crimson/60">CLASSIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
