import { useEffect, useRef, useState } from 'react'

const projects = [
  { id: '01', title: 'Project 01', status: 'Classified', statusColor: 'text-rift-blood-light' },
  { id: '02', title: 'Project 02', status: 'In Development', statusColor: 'text-rift-neon' },
  { id: '03', title: 'Project 03', status: 'Coming Soon', statusColor: 'text-rift-metal' },
]

export default function UpcomingProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleContactClick = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="upcoming" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030108] via-[#060610] to-[#030108]"></div>
      <div className="absolute top-0 left-0 right-0 archive-divider"></div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-0 w-[250px] h-[250px] bg-rift-neon/3 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-0 w-[200px] h-[200px] bg-rift-red/4 rounded-full blur-[80px]"></div>

      <span className="absolute top-6 left-4 md:left-8 tech-label">ARCHIVE FILE 006 // FUTURE OPS</span>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="tech-label mb-2">Future Operations</p>
          <h2 className="section-heading mb-4">Upcoming Projects</h2>
          <p className="text-rift-metal text-lg max-w-3xl mx-auto font-body tracking-wide">
            Interested in producing or collaborating with our upcoming films? <span className="text-rift-neon">Contact KAAY VISION.</span>
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          {projects.map((p, i) => (
            <div key={p.id} className="ind-card p-8 text-center" style={{ transitionDelay: `${0.3 + i * 0.1}s`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
              <p className="tech-label mb-3">OP-{p.id}</p>
              <span className="text-5xl font-display text-rift-neon/8">{p.id}</span>
              <h3 className="font-display text-xl tracking-[0.1em] text-rift-offwhite mt-2 mb-3">{p.title}</h3>
              <div className="flex items-center justify-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${p.id === '01' ? 'bg-rift-blood-light' : p.id === '02' ? 'bg-rift-neon' : 'bg-rift-metal'}`} style={p.id === '02' ? { boxShadow: '0 0 4px rgba(0,240,255,0.6)' } : {}}></span>
                <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${p.statusColor}`}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
          <p className="text-rift-metal/70 font-body italic tracking-wide">&quot;We are open for film collaborations, production partnerships, and creative projects.&quot;</p>
        </div>

        <div className="text-center">
          <button onClick={handleContactClick} className="btn-secondary">
            Contact For Producing
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </button>
        </div>

        <p className="text-center mt-12 tech-label">More Films Coming Soon</p>
      </div>
    </section>
  )
}
