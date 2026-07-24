import { useEffect, useRef, useState } from 'react'

const projects = [
  { id: '01', title: 'Project 01', status: 'Classified', color: 'text-c-red', href: 'https://youtu.be/y3_Ll8mhzPw?si=qR8u0N-hSNcH6SJi', videoId: 'y3_Ll8mhzPw' },
  { id: '02', title: 'Project 02', status: 'In Development', color: 'text-c-cyan', href: 'https://youtu.be/oZ0AEXVQNdA?si=GnGMPZZBouu1gA03', videoId: 'oZ0AEXVQNdA' },
  { id: '03', title: 'Project 03', status: 'Coming Soon', color: 'text-c-muted' },
]

export default function UpcomingProjects() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.15 }); if (ref.current) o.observe(ref.current); return () => o.disconnect() }, [])

  return (
    <section id="upcoming" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-void to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      <div className="orb orb-blue w-[400px] h-[400px] top-[10%] left-[-8%] opacity-50"></div>
      <div className="orb orb-purple w-[350px] h-[350px] bottom-[10%] right-[-5%] opacity-40"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 transition-all duration-[1.5s] ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="tech-label text-center mb-3">FUTURE OPERATIONS</p>
        <h2 className="section-title mb-4">Upcoming Projects</h2>
        <p className="text-center text-c-muted mb-14 font-body text-lg">Collaborations welcome. <span className="text-c-cyan">Contact KAAY VISION.</span></p>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 stagger ${vis ? 'revealed' : ''}`}>
          {projects.map(p => {
            const content = (
              <>
                {p.videoId && (
                  <div className="relative w-full h-40 -mt-8 -mx-8 mb-4 overflow-hidden rounded-t-2xl" style={{ width: 'calc(100% + 4rem)' }}>
                    <img
                      src={`https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src = `https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg`; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent"></div>
                  </div>
                )}
                <span className="text-5xl font-display text-c-muted/10 group-hover:text-c-purple/10 transition-colors duration-500">{p.id}</span>
                <h3 className="font-display text-xl tracking-widest text-c-white mt-2 mb-3">{p.title}</h3>
                <span className={`font-mono text-[10px] uppercase tracking-widest ${p.color}`}>{p.status}</span>
              </>
            )
            return p.href ? (
              <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" className="glass-card p-8 text-center group cursor-pointer block overflow-hidden">
                {content}
              </a>
            ) : (
              <div key={p.id} className="glass-card p-8 text-center group">
                {content}
              </div>
            )
          })}
        </div>
        <div className="text-center">
          <a href="#contact" className="btn-secondary">Contact For Producing</a>
        </div>
      </div>
    </section>
  )
}
