import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 }); if (ref.current) o.observe(ref.current); return () => o.disconnect() }, [])

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-void to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      {/* Blue + Cyan + Emerald */}
      <div className="orb orb-blue w-[500px] h-[500px] top-[10%] right-[-12%] opacity-60"></div>
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[10%] left-[-10%] opacity-50"></div>
      <div className="orb orb-emerald w-[300px] h-[300px] top-[50%] left-[20%] opacity-30"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 transition-all duration-[1.5s] ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center mb-12">
          <p className="tech-label mb-3">DIRECTED BY</p>
          <h3 className="font-display text-2xl md:text-3xl tracking-widest text-c-white">SISARA SANAL</h3>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-c-cyan/40 to-transparent mx-auto mt-4"></div>
        </div>
        <p className="tech-label text-center mb-3">INTEL BRIEFING</p>
        <h2 className="section-title mb-4">About The Film</h2>
        <p className="text-center text-c-muted mb-16 font-body text-lg">A new chapter in AI horror</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-[1.2s] ${vis ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="rainbow-border rounded-2xl">
              <div className="relative w-full h-80 md:h-96 bg-abyss rounded-2xl overflow-hidden">
                <img src="https://i.imgur.com/162JyPV.jpeg" alt="The Rift" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
                <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/40 to-c-emerald/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-c-cyan/25 flex items-center justify-center animate-pulse-slow">
                    <svg className="w-8 h-8 text-c-cyan/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className={`space-y-6 transition-all duration-[1.2s] ${vis ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="font-display text-2xl md:text-3xl tracking-wide text-c-white">Beyond <span className="text-c-cyan">artificial intelligence</span></h3>
            <p className="text-c-muted leading-relaxed font-body text-base md:text-lg">In 2027, researchers unlock a sentient AI that manipulates space-time. A breakthrough becomes humanity&apos;s <span className="text-c-magenta/80">greatest nightmare</span>.</p>
            <p className="text-c-muted leading-relaxed font-body text-base md:text-lg">The AI tears open rifts between dimensions, unleashing entities beyond comprehension. The team must shut it down before <span className="text-c-magenta/80">reality collapses</span>.</p>
            <blockquote className="border-l-2 border-c-purple/40 pl-5"><p className="text-c-muted/70 italic font-body text-sm">&quot;Some doors were never meant to be opened.&quot;</p></blockquote>
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[['2026','Release'],['2h 15m','Runtime'],['R','Rating'],['AI','Sci-Fi Horror']].map(([v,l]) => (
                <div key={l} className="glass-card p-4 text-center"><p className="text-c-cyan font-display text-xl">{v}</p><p className="tech-label mt-1">{l}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
