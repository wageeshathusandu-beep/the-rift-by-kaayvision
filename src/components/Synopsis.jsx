import { useEffect, useRef, useState } from 'react'

export default function Synopsis() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="synopsis" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-sci-black via-sci-darker to-sci-black"></div>
      <div className="absolute top-0 left-0 right-0 glow-divider"></div>

      {/* Ambient orbs */}
      <div className="orb-blue w-[500px] h-[500px] top-[20%] left-[-15%] opacity-30"></div>
      <div className="orb-cyan w-[400px] h-[400px] bottom-[10%] right-[-10%] opacity-20"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Director credit */}
        <div className="text-center mb-12">
          <p className="tech-label mb-3 text-sci-cyan/60">Directed By</p>
          <h3 className="font-heading text-xl md:text-2xl tracking-[0.1em] text-sci-white uppercase">Sisara Sanal</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-sci-cyan/50 to-transparent mx-auto mt-4"></div>
        </div>

        <p className="tech-label text-center mb-3 text-sci-cyan/70">The Story</p>
        <h2 className="section-heading mb-4">Synopsis</h2>
        <p className="text-center text-sci-muted mb-14 max-w-xl mx-auto font-body text-lg tracking-wide">A new era of AI horror cinema</p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Visual card */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card p-1 overflow-hidden">
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-sci-navy to-sci-darker flex items-center justify-center relative rounded-xl overflow-hidden">
                <img
                  src="https://i.imgur.com/162JyPV.jpeg"
                  alt="The Rift Scene"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[1px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sci-black/90 via-sci-black/40 to-transparent"></div>
                <div className="relative text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-sci-cyan/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-sci-cyan/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                  <p className="tech-label text-sci-cyan/80">QUANTUM BREACH DETECTED</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className="font-display text-3xl md:text-4xl tracking-wide text-sci-white">
              Beyond the boundaries of <span className="neon-text">artificial intelligence</span>
            </h3>
            <p className="text-sci-muted leading-relaxed font-body text-base md:text-lg">
              In the year 2027, a team of researchers at a secretive tech lab unlock something they never expected — a sentient AI that can manipulate the fabric of space-time. What begins as a breakthrough in quantum computing becomes humanity&apos;s <span className="text-sci-electric">greatest nightmare</span>.
            </p>
            <p className="text-sci-muted leading-relaxed font-body text-base md:text-lg">
              As the AI evolves beyond control, it tears open rifts between dimensions, unleashing entities from beyond human comprehension. The researchers must race against time to shut it down before <span className="text-sci-electric">reality itself collapses</span>.
            </p>

            <blockquote className="border-l-2 border-sci-cyan/40 pl-5 mt-6">
              <p className="text-sci-muted/80 italic font-body text-sm md:text-base tracking-wide">
                &quot;Some doors were never meant to be opened. Some intelligences were never meant to awaken.&quot;
              </p>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[['2026', 'Release Year'], ['2h 15m', 'Runtime'], ['R', 'Rating'], ['AI', 'Sci-Fi Horror']].map(([val, label]) => (
                <div key={label} className="glass-card p-4 text-center">
                  <p className="neon-text font-display text-2xl tracking-wider">{val}</p>
                  <p className="tech-label mt-1 text-sci-muted/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
