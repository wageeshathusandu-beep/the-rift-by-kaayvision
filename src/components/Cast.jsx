import { useEffect, useRef, useState } from 'react'

const mainRole = { name: 'Saduni Amaya', role: 'Main Role' }
const subRoles = [
  { name: 'Sachith Sahan' }, { name: 'Nipun Nethmal' },
  { name: 'Geeshan Randunu' }, { name: 'Inuki Akithra' },
  { name: 'Suraj Chanuka' }, { name: 'Chenuthi Nulinsa' },
  { name: 'Reshani Thadisha' }, { name: 'Yonali Vihangi' },
  { name: 'Ranuki Akithma' },
]
const crew = [
  { name: 'Sisara Sanal', role: 'Director', hl: true },
  { name: 'Visal Damsith', role: 'Asst. Director' },
  { name: 'Wageesha Thusandu', role: 'Production Mgr' },
  { name: 'SS Dissanayake', role: 'Writer' },
  { name: 'Sisara SD', role: 'Cinematography' },
  { name: 'H.R.W.T. Dahamsara', role: 'Clapper Loader' },
  { name: 'Namina Deemantha', role: 'Boom' },
  { name: 'Widuranga & Sajith', role: 'Coordinator' },
  { name: 'W. Thusandu', role: 'FPV Pilot' },
]


function Card({ name, role, index, highlight }) {
  return (
    <div className={`glass-card group p-6 text-center ${highlight ? 'border-alien-cyan/20' : ''}`}>
      <p className="tech-label mb-3">#{String(index + 1).padStart(3, '0')}</p>
      <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center border transition-all duration-500 ${highlight ? 'border-alien-cyan/30 bg-alien-cyan/5' : 'border-muted/20 bg-abyss/50'} group-hover:border-alien-cyan/50 group-hover:shadow-cyan`}>
        <svg className="w-6 h-6 text-muted/40 group-hover:text-alien-cyan/70 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
        </svg>
      </div>
      {role && <p className="font-mono text-[9px] uppercase tracking-widest text-alien-cyan/60 mb-2">{role}</p>}
      {!role && <p className="font-mono text-[9px] uppercase tracking-widest text-muted/40 mb-2">Sub Role</p>}
      <h4 className="font-display text-base md:text-lg text-soft-white tracking-wide">{name}</h4>
    </div>
  )
}


export default function Cast() {
  const [isVisible, setIsVisible] = useState(false)
  const [crewVis, setCrewVis] = useState(false)
  const ref = useRef(null)
  const crewRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCrewVis(true) }, { threshold: 0.1 })
    if (crewRef.current) obs.observe(crewRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="cast" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-void to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>


      {/* Ambient */}
      <div className="orb orb-blue w-[500px] h-[500px] top-[5%] right-[-10%] opacity-40"></div>
      <div className="orb orb-purple w-[400px] h-[400px] bottom-[15%] left-[-8%] opacity-35"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="tech-label text-center mb-3">PERSONNEL DATABASE</p>
        <h2 className="section-title mb-4">Cast & Crew</h2>
        <p className="text-center text-muted mb-16 max-w-xl mx-auto font-body text-lg tracking-wide">The visionaries behind The Rift</p>

        {/* Main Role */}
        <div className="text-center mb-6">
          <p className="tech-label mb-2">PRIMARY SUBJECT</p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-alien-cyan/40 to-transparent mx-auto mt-3"></div>
        </div>
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-xs">
            <Card name={mainRole.name} role={mainRole.role} index={0} highlight={true} />
          </div>
        </div>

        {/* Sub Roles */}
        <div className="text-center mb-8">
          <p className="tech-label mb-2">SUPPORTING CAST</p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-alien-blue/30 to-transparent mx-auto mt-3"></div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 stagger ${isVisible ? 'revealed' : ''}`}>
          {subRoles.map((a, i) => <Card key={a.name} name={a.name} index={i + 1} />)}
        </div>


        {/* Crew */}
        <div ref={crewRef}>
          <div className="text-center mb-8">
            <p className="tech-label mb-2">OPERATIONS TEAM</p>
            <h3 className="font-display text-2xl tracking-widest text-soft-white">Film Crew</h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-alien-cyan/40 to-transparent mx-auto mt-3"></div>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger ${crewVis ? 'revealed' : ''}`}>
            {crew.map((m, i) => <Card key={m.name} name={m.name} role={m.role} index={i + 10} highlight={m.hl} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
