import { useEffect, useRef, useState } from 'react'

const projects = [
  { id: '01', title: 'Project 01', status: 'Classified', color: 'text-alien-crimson' },
  { id: '02', title: 'Project 02', status: 'In Development', color: 'text-alien-cyan' },
  { id: '03', title: 'Project 03', status: 'Coming Soon', color: 'text-muted' },
]

export default function UpcomingProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="upcoming" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-void to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      <div className="orb orb-blue w-[400px] h-[400px] top-[10%] left-[-8%] opacity-35"></div>
      <div className="orb orb-red w-[300px] h-[300px] bottom-[10%] right-[-5%] opacity-30"></div>


      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="tech-label text-center mb-3">FUTURE OPERATIONS</p>
        <h2 className="section-title mb-4">Upcoming Projects</h2>
        <p className="text-center text-muted mb-14 max-w-3xl mx-auto font-body text-lg tracking-wide">
          Interested in collaborating? <span className="text-alien-cyan">Contact KAAY VISION.</span>
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 stagger ${isVisible ? 'revealed' : ''}`}>
          {projects.map((p) => (
            <div key={p.id} className="glass-card p-8 text-center group">
              <p className="tech-label mb-3">OP-{p.id}</p>
              <span className="text-5xl font-display text-muted/10 group-hover:text-alien-cyan/10 transition-colors duration-500">{p.id}</span>
              <h3 className="font-display text-xl tracking-widest text-soft-white mt-2 mb-3">{p.title}</h3>
              <div className="flex items-center justify-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${p.id === '01' ? 'bg-alien-crimson' : p.id === '02' ? 'bg-alien-cyan' : 'bg-muted'}`}></span>
                <span className={`font-mono text-[10px] uppercase tracking-widest ${p.color}`}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mb-8 transition-all duration-[1s] ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
          <p className="text-muted/70 font-body italic tracking-wide">&quot;Open for film collaborations, production partnerships, and creative projects.&quot;</p>
        </div>

        <div className="text-center">
          <button onClick={scrollToContact} className="btn-secondary">
            Contact For Producing
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
