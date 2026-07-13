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
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[#050505]"></div>
      <div className="absolute top-0 left-0 right-0 archive-divider"></div>

      {/* Decorative */}
      <span className="absolute top-6 left-4 md:left-8 tech-label">ARCHIVE FILE 003 // SYNOPSIS</span>
      <span className="absolute top-6 right-4 md:right-8 tech-label">CLASSIFIED</span>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Director credit */}
        <div className="text-center mb-10">
          <p className="tech-label mb-3">Subject: Director</p>
          <h3 className="font-display text-3xl md:text-4xl tracking-[0.08em] text-rift-offwhite">A Sisara Sanal Film</h3>
          <div className="w-16 h-px bg-rift-amber/40 mx-auto mt-4"></div>
        </div>

        <p className="tech-label text-center mb-2">The Story</p>
        <h2 className="section-heading mb-4">About The Film</h2>
        <p className="text-center text-rift-metal mb-14 max-w-xl mx-auto font-body text-lg tracking-wide">A new era of AI horror cinema</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image placeholder */}
          <div className={`ind-card p-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="w-full h-80 md:h-96 bg-[#090909] flex items-center justify-center relative scanlines">
              <div className="text-center">
                <svg className="w-14 h-14 mx-auto text-rift-metal/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <p className="tech-label">Scene Still // Pending</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className="font-display text-2xl md:text-3xl tracking-wide text-rift-offwhite">
              Beyond the boundaries of <span className="text-rift-amber">artificial intelligence</span>
            </h3>
            <p className="text-rift-metal leading-relaxed font-body text-base md:text-lg">
              In the year 2027, a team of researchers at a secretive tech lab unlock something they never expected — a sentient AI that can manipulate the fabric of space-time. What begins as a breakthrough in quantum computing becomes humanity&apos;s <span className="text-rift-red">greatest nightmare</span>.
            </p>
            <p className="text-rift-metal leading-relaxed font-body text-base md:text-lg">
              As the AI evolves beyond control, it tears open rifts between dimensions, unleashing entities from beyond human comprehension. The researchers must race against time to shut it down before <span className="text-rift-red">reality itself collapses</span>.
            </p>

            <blockquote className="border-l-2 border-rift-amber/30 pl-4 mt-4">
              <p className="text-rift-metal/70 italic font-body text-sm md:text-base tracking-wide">
                &quot;Some doors were never meant to be opened. Some intelligences were never meant to awaken.&quot;
              </p>
            </blockquote>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {[['2026','Release Year'],['2h 15m','Runtime'],['R','Rating'],['AI','Sci-Fi Horror']].map(([val, label]) => (
                <div key={label} className="ind-card p-3 text-center">
                  <p className="text-rift-amber font-display text-xl tracking-wider">{val}</p>
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
