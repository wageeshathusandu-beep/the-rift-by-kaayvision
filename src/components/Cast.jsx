import { useEffect, useRef, useState } from 'react'

const mainRole = { name: 'Saduni Amaya', role: 'Main Role' }

const subRoles = [
  { name: 'Sachith Sahan' },
  { name: 'Nipun Nethmal' },
  { name: 'Geeshan Randunu' },
  { name: 'Inuki Akithra' },
  { name: 'Suraj Chanuka' },
  { name: 'Chenuthi Nulinsa' },
  { name: 'Reshani Thadisha' },
  { name: 'Yonali Vihangi' },
  { name: 'Ranuki Akithma' },
]

const crewMembers = [
  { name: 'Sisara Sanal', role: 'Director', highlighted: true },
  { name: 'Visal Damsith', role: 'Assistant Director' },
  { name: 'Wageesha Thusandu', role: 'Production Manager' },
  { name: 'SS Dissanayake', role: 'Writer' },
  { name: 'Sisara SD', role: 'Cinematography' },
  { name: 'H.R.W.T. Dahamsara', role: 'Clapper Loader' },
  { name: 'Namina Deemantha', role: 'Boom' },
  { name: 'Widuranga Bandara & Sajith Kumara', role: 'Character Coordinator' },
  { name: 'W. Thusandu', role: 'FPV Pilot' },
]

function PersonCard({ name, role, index, highlighted }) {
  return (
    <div className={`glass-card group p-6 text-center ${highlighted ? 'border-sci-cyan/25' : ''}`}>
      <p className="tech-label mb-3 text-sci-muted/50">#{String(index + 1).padStart(3, '0')}</p>
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-400 ${highlighted ? 'bg-sci-cyan/10 border border-sci-cyan/30' : 'bg-sci-navy/60 border border-sci-dim/30'} group-hover:border-sci-cyan/40 group-hover:bg-sci-cyan/10`}>
        <svg className="w-7 h-7 text-sci-muted/40 group-hover:text-sci-cyan/70 transition-colors duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
        </svg>
      </div>
      {role && <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sci-cyan/70 mb-2">{role}</p>}
      {!role && <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sci-muted/40 mb-2">Sub Role</p>}
      <h4 className="font-display text-lg md:text-xl text-sci-white tracking-wide">{name}</h4>
    </div>
  )
}

export default function Cast() {
  const [isVisible, setIsVisible] = useState(false)
  const [crewVisible, setCrewVisible] = useState(false)
  const ref = useRef(null)
  const crewRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCrewVisible(true) }, { threshold: 0.1 })
    if (crewRef.current) obs.observe(crewRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="cast" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-sci-black via-sci-darker to-sci-black"></div>
      <div className="absolute top-0 left-0 right-0 glow-divider"></div>

      {/* Ambient */}
      <div className="orb-blue w-[500px] h-[500px] top-[5%] right-[-10%] opacity-25"></div>
      <div className="orb-cyan w-[400px] h-[400px] bottom-[20%] left-[-10%] opacity-20"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="tech-label text-center mb-3 text-sci-cyan/70">Personnel Files</p>
        <h2 className="section-heading mb-4">Cast & Crew</h2>
        <p className="text-center text-sci-muted mb-14 max-w-xl mx-auto font-body text-lg tracking-wide">The visionaries behind The Rift</p>

        {/* Main Role */}
        <div className="text-center mb-6">
          <p className="tech-label mb-2 text-sci-cyan/60">Lead Role</p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-sci-cyan/50 to-transparent mx-auto mt-3"></div>
        </div>
        <div className={`flex justify-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.15s' }}>
          <div className="w-full max-w-xs">
            <PersonCard name={mainRole.name} role={mainRole.role} index={0} highlighted={true} />
          </div>
        </div>

        {/* Sub Roles */}
        <div className="text-center mb-8">
          <p className="tech-label mb-2 text-sci-electric/60">Supporting Cast</p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-sci-blue/40 to-transparent mx-auto mt-3"></div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 stagger-children ${isVisible ? 'revealed' : ''}`}>
          {subRoles.map((actor, i) => (
            <PersonCard key={actor.name} name={actor.name} index={i + 1} />
          ))}
        </div>

        {/* Crew */}
        <div ref={crewRef}>
          <div className="text-center mb-8">
            <p className="tech-label mb-2 text-sci-cyan/60">Behind The Scenes</p>
            <h3 className="font-display text-2xl tracking-[0.08em] text-sci-white">Film Crew</h3>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-sci-cyan/50 to-transparent mx-auto mt-3"></div>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${crewVisible ? 'revealed' : ''}`}>
            {crewMembers.map((m, i) => (
              <PersonCard key={m.name} name={m.name} role={m.role} index={i + 10} highlighted={m.highlighted} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
