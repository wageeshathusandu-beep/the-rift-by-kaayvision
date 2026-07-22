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
    <div className={`ind-card group p-5 text-center ${highlighted ? 'border-rift-neon/20' : ''}`}>
      <p className="tech-label mb-3">FILE #{String(index + 1).padStart(3, '0')}</p>
      <div className={`w-14 h-14 mx-auto mb-3 rounded-none bg-[#060610] border flex items-center justify-center ${highlighted ? 'border-rift-neon/25' : 'border-rift-neon/10'} group-hover:border-rift-neon/40 transition-colors duration-400`}>
        <svg className="w-6 h-6 text-rift-metal/30 group-hover:text-rift-neon/50 transition-colors duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
        </svg>
      </div>
      {role && <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-rift-neon/60 mb-1">{role}</p>}
      {!role && <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-rift-metal/40 mb-1">Sub Role</p>}
      <h4 className="font-display text-lg md:text-xl text-rift-offwhite tracking-wide">{name}</h4>
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#030108] via-[#060610] to-[#030108]"></div>
      <div className="absolute top-0 left-0 right-0 archive-divider"></div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-rift-neon/3 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-rift-red/4 rounded-full blur-[100px]"></div>

      <span className="absolute top-6 left-4 md:left-8 tech-label">ARCHIVE FILE 004 // SUBJECT DATA</span>
      <span className="absolute top-6 right-4 md:right-8 tech-label flex items-center gap-1.5"><span className="amber-dot"></span> RESTRICTED</span>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="tech-label text-center mb-2">Personnel Files</p>
        <h2 className="section-heading mb-4">Cast & Crew</h2>
        <p className="text-center text-rift-metal mb-14 max-w-xl mx-auto font-body text-lg tracking-wide">The visionaries behind The Rift</p>

        {/* Main Role */}
        <div className="text-center mb-4">
          <p className="tech-label mb-2">Primary Subject</p>
          <h3 className="font-display text-2xl tracking-[0.08em] text-rift-offwhite">Main Role</h3>
          <div className="w-12 h-px bg-rift-neon/40 mx-auto mt-3"></div>
        </div>
        <div className={`flex justify-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.15s' }}>
          <div className="w-full max-w-xs">
            <PersonCard name={mainRole.name} role={mainRole.role} index={0} highlighted={true} />
          </div>
        </div>

        {/* Sub Roles */}
        <div className="text-center mb-8">
          <p className="tech-label mb-2">Secondary Subjects</p>
          <h3 className="font-display text-2xl tracking-[0.08em] text-rift-offwhite">Sub Roles</h3>
          <div className="w-12 h-px bg-rift-red/40 mx-auto mt-3"></div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 stagger-children ${isVisible ? 'revealed' : ''}`}>
          {subRoles.map((actor, i) => (
            <PersonCard key={actor.name} name={actor.name} index={i + 1} />
          ))}
        </div>

        {/* Crew */}
        <div ref={crewRef}>
          <div className="text-center mb-8">
            <p className="tech-label mb-2">Operations Team</p>
            <h3 className="font-display text-2xl tracking-[0.08em] text-rift-offwhite">Film Crew</h3>
            <div className="w-12 h-px bg-rift-neon/30 mx-auto mt-3"></div>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${crewVisible ? 'revealed' : ''}`}>
            {crewMembers.map((m, i) => (
              <PersonCard key={m.name} name={m.name} role={m.role} index={i + 10} highlighted={m.highlighted} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
