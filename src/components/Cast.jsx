import { useEffect, useRef, useState } from 'react'

const mainRole = { name: 'Saduni Amaya', role: 'Main Role' }
const subRoles = ['Nipun Nethmal','Inuki Akithra','Sachith Sahan','Geeshan Randunu','Suraj Chanuka','Chenuthi Nulinsa','Reshani Thadisha','Yonali Vihangi','Ranuki Akithma']
const crew = [
  { name: 'Sisara Sanal', role: 'Director / Writer', hl: true, image: 'https://lh3.googleusercontent.com/d/1_T4wO7nBIKmhmDkAb_livvEpCHX6oG1Q' },
  { name: 'Visal Damsith', role: 'Assistant Director' },
  { name: 'Wageesha Thusandu', role: 'FPV Pilot' },
  { name: 'SS Dissanayake', role: 'Editor' },
  { name: 'Sisara SD', role: 'Cinematography' },
  { name: 'H.R.W.T. Dahamsara', role: 'Clapper Loader' },
  { name: 'Namina Deemantha', role: 'Boom Operator' },
  { name: 'Widuranga & Sajith', role: 'Characters Coordinator' },
  { name: 'H.R.W Thusandu', role: 'Production Manager' },
]

function Card({ name, role, hl, image }) {
  return (
    <div className={`glass-card group p-6 text-center ${hl ? 'border-c-purple/25' : ''}`}>
      {image ? (
        <div className="w-14 h-14 mx-auto mb-4 rounded-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.35),0_0_30px_rgba(212,175,55,0.2)]" style={{ boxShadow: '0 0 10px rgba(255,215,0,0.2), 0 0 20px rgba(212,175,55,0.1)' }}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://drive.google.com/uc?export=view&id=1_T4wO7nBIKmhmDkAb_livvEpCHX6oG1Q`; }}
          />
        </div>
      ) : (
        <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center border transition-all duration-500 ${hl ? 'border-c-purple/30 bg-c-purple/5' : 'border-c-muted/20 bg-abyss/50'} group-hover:border-c-cyan/50 group-hover:shadow-neon-cyan`}>
          <svg className="w-6 h-6 text-c-muted/40 group-hover:text-c-cyan/70 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"/></svg>
        </div>
      )}
      {role && <p className="font-mono text-[9px] uppercase tracking-widest text-c-purple/60 mb-2">{role}</p>}
      <h4 className="font-display text-sm md:text-base text-c-white tracking-wide">{name}</h4>
    </div>
  )
}


export default function Cast() {
  const [vis, setVis] = useState(false)
  const [crewVis, setCrewVis] = useState(false)
  const ref = useRef(null)
  const crewRef = useRef(null)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 }); if (ref.current) o.observe(ref.current); return () => o.disconnect() }, [])
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCrewVis(true) }, { threshold: 0.1 }); if (crewRef.current) o.observe(crewRef.current); return () => o.disconnect() }, [])

  return (
    <section id="cast" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-void to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      <div className="orb orb-purple w-[500px] h-[500px] top-[5%] left-[-10%] opacity-50"></div>
      <div className="orb orb-pink w-[400px] h-[400px] bottom-[10%] right-[-8%] opacity-40"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 transition-all duration-[1.5s] ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="tech-label text-center mb-3">Film Database</p>
        <h2 className="section-title mb-4">Cast & Crew</h2>
        <p className="text-center text-c-muted mb-16 font-body text-lg">The visionaries behind The Rift</p>

        <div className="text-center mb-6"><p className="tech-label">PRIMARY SUBJECT</p></div>
        <div className="flex justify-center mb-16"><div className="w-full max-w-xs"><Card name={mainRole.name} role={mainRole.role} hl={true}/></div></div>

        <div className="text-center mb-8"><p className="tech-label">SUPPORTING CAST</p></div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 stagger ${vis ? 'revealed' : ''}`}>
          {subRoles.map(n => <Card key={n} name={n}/>)}
        </div>

        <div ref={crewRef}><div className="text-center mb-8"><p className="tech-label">FILM CREW</p></div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger ${crewVis ? 'revealed' : ''}`}>
            {crew.map(m => <Card key={m.name} name={m.name} role={m.role} hl={m.hl} image={m.image}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}
