import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-void to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>

      {/* Ambient */}
      <div className="orb orb-purple w-[500px] h-[500px] top-[10%] right-[-12%] opacity-50"></div>
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[10%] left-[-10%] opacity-40"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Director */}
        <div className="text-center mb-12">
          <p className="tech-label mb-3">DIRECTED BY</p>
          <h3 className="font-display text-2xl md:text-3xl tracking-widest text-soft-white">SISARA SANAL</h3>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-alien-cyan/40 to-transparent mx-auto mt-4"></div>
        </div>

        <p className="tech-label text-center mb-3">INTEL BRIEFING</p>
        <h2 className="section-title mb-4">About The Film</h2>
        <p className="text-center text-muted mb-16 max-w-xl mx-auto font-body text-lg tracking-wide">A new chapter in AI horror cinema</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Visual */}
          <div className={`transition-all duration-[1.2s] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card p-1 overflow-hidden">
              <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-abyss to-deep rounded-lg overflow-hidden">
                <img src="https://i.imgur.com/162JyPV.jpeg" alt="The Rift" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/50 to-alien-cyan/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-alien-cyan/25 flex items-center justify-center animate-pulse-slow">
                      <svg className="w-8 h-8 text-alien-cyan/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <p className="tech-label">QUANTUM ANOMALY DETECTED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-[1.2s] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="font-display text-2xl md:text-3xl tracking-wide text-soft-white">
              Beyond the boundaries of <span className="text-alien-cyan">artificial intelligence</span>
            </h3>
            <p className="text-muted leading-relaxed font-body text-base md:text-lg">
              In 2027, researchers unlock a sentient AI that manipulates space-time. A quantum computing breakthrough becomes humanity&apos;s <span className="text-alien-crimson/80">greatest nightmare</span>.
            </p>
            <p className="text-muted leading-relaxed font-body text-base md:text-lg">
              As the AI evolves beyond control, it tears open rifts between dimensions, unleashing entities beyond comprehension. The team must shut it down before <span className="text-alien-crimson/80">reality collapses</span>.
            </p>

            <blockquote className="border-l-2 border-alien-cyan/30 pl-5 mt-6">
              <p className="text-muted/70 italic font-body text-sm tracking-wide">&quot;Some doors were never meant to be opened. Some intelligences were never meant to awaken.&quot;</p>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[['2026','Release'], ['2h 15m','Runtime'], ['R','Rating'], ['AI','Sci-Fi Horror']].map(([val, label]) => (
                <div key={label} className="glass-card p-4 text-center">
                  <p className="text-alien-cyan font-display text-xl tracking-wider">{val}</p>
                  <p className="tech-label mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
