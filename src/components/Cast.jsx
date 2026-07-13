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

export default function Cast() {
  const [isVisible, setIsVisible] = useState(false)
  const [crewVisible, setCrewVisible] = useState(false)
  const ref = useRef(null)
  const crewRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCrewVisible(true)
      },
      { threshold: 0.1 }
    )
    if (crewRef.current) observer.observe(crewRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cast" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#080810] to-rift-darker"></div>

      {/* Static horror atmosphere */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rift-blood/4 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rift-neon/3 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/3 rounded-full blur-[130px]"></div>

      {/* Cinematic section entrance */}
      <div className="absolute top-0 left-0 right-0">
        <div className="horror-divider"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-rift-blood/20 to-transparent mt-px"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section intro */}
        <div className="text-center mb-4">
          <p className="text-rift-neon/60 text-[10px] font-cinematic tracking-[0.4em] uppercase mb-3">The Talent</p>
        </div>
        <h2 className="section-heading">Cast & Crew</h2>
        <p className="text-center text-gray-300 mb-16 max-w-xl mx-auto font-body text-lg tracking-wide">The visionaries behind The Rift</p>

        {/* ===== MAIN ROLE - Hero Card ===== */}
        <div className={`text-center mb-10 transition-all duration-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.15s' }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-8 md:w-14 bg-gradient-to-r from-transparent to-rift-neon/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-rift-neon/50 shadow-[0_0_6px_rgba(0,212,255,0.4)]"></div>
            <div className="h-[1px] w-8 md:w-14 bg-gradient-to-l from-transparent to-rift-neon/40"></div>
          </div>
          <h3 className="font-cinematic font-black text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.2em] text-white/90" style={{ textShadow: '0 0 8px rgba(0,212,255,0.5), 0 0 25px rgba(0,212,255,0.2)' }}>
            Main Role
          </h3>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-[1px] w-8 md:w-14 bg-gradient-to-r from-transparent to-rift-neon/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-rift-neon/50 shadow-[0_0_6px_rgba(0,212,255,0.4)]"></div>
            <div className="h-[1px] w-8 md:w-14 bg-gradient-to-l from-transparent to-rift-neon/40"></div>
          </div>
        </div>
        <div className={`flex justify-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="cast-card group relative w-full max-w-sm overflow-hidden rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, rgba(0, 21, 40, 0.8), rgba(5, 5, 8, 0.95))', border: '1px solid rgba(0, 212, 255, 0.3)' }}>
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: '0 0 30px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.1), inset 0 0 30px rgba(0,212,255,0.05)' }}></div>

            {/* Top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-rift-neon/70 to-transparent group-hover:w-40 transition-all duration-500"></div>

            {/* Avatar */}
            <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-rift-neon/20 to-rift-blood/10 border-2 border-rift-neon/40 flex items-center justify-center group-hover:border-rift-neon/70 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.25)] transition-all duration-500">
              <svg className="w-10 h-10 text-rift-neon/60 group-hover:text-rift-neon transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
              </svg>
            </div>

            {/* Role label */}
            <p className="relative z-10 font-cinematic text-xs font-bold text-rift-neon uppercase tracking-[0.3em] mb-3" style={{ textShadow: '0 0 10px rgba(0,212,255,0.5)' }}>
              {mainRole.role}
            </p>

            {/* Name */}
            <h4 className="relative z-10 font-heading text-4xl md:text-5xl text-white uppercase tracking-wider">
              {mainRole.name}
            </h4>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-rift-neon/50 to-transparent group-hover:w-32 transition-all duration-500"></div>
          </div>
        </div>

        {/* ===== SUB ROLES ===== */}
        <div className={`text-center mb-10 transition-all duration-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-8 md:w-14 bg-gradient-to-r from-transparent to-rift-blood/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-rift-blood-light/50 shadow-[0_0_6px_rgba(139,0,0,0.4)]"></div>
            <div className="h-[1px] w-8 md:w-14 bg-gradient-to-l from-transparent to-rift-blood/50"></div>
          </div>
          <h3 className="font-cinematic font-black text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.2em] text-white/90" style={{ textShadow: '0 0 8px rgba(139,0,0,0.5), 0 0 25px rgba(139,0,0,0.2)' }}>
            Sub Roles
          </h3>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-[1px] w-8 md:w-14 bg-gradient-to-r from-transparent to-rift-blood/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-rift-blood-light/50 shadow-[0_0_6px_rgba(139,0,0,0.4)]"></div>
            <div className="h-[1px] w-8 md:w-14 bg-gradient-to-l from-transparent to-rift-blood/50"></div>
          </div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 stagger-children ${isVisible ? 'revealed' : ''}`}>
          {subRoles.map((actor, index) => (
            <div
              key={actor.name}
              className="cast-card group relative overflow-hidden rounded-xl p-6 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 15, 25, 0.7), rgba(5, 5, 8, 0.9))',
                border: '1px solid rgba(139, 0, 0, 0.2)',
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 20px rgba(139,0,0,0.1), 0 0 20px rgba(0,212,255,0.1)' }}></div>

              {/* Top line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-rift-blood-light/50 to-transparent group-hover:w-24 group-hover:via-rift-neon/50 transition-all duration-500"></div>

              {/* Avatar */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rift-blood/15 to-rift-neon/8 border border-rift-blood/25 flex items-center justify-center group-hover:border-rift-neon/40 transition-all duration-500">
                <svg className="w-7 h-7 text-rift-blood/40 group-hover:text-rift-neon/60 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                </svg>
              </div>

              {/* Role tag */}
              <p className="relative z-10 font-cinematic text-[9px] font-bold text-rift-blood-light/70 uppercase tracking-[0.2em] mb-2">
                Sub Role
              </p>

              {/* Name */}
              <h4 className="relative z-10 font-heading text-xl md:text-2xl text-white uppercase tracking-wider">
                {actor.name}
              </h4>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-rift-blood/40 to-transparent group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* ===== PRODUCTION CREW ===== */}
        <div ref={crewRef}>
          <div className={`text-center mb-10 transition-all duration-[1.2s] ${crewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[1px] w-8 md:w-14 bg-gradient-to-r from-transparent to-rift-neon/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-rift-neon/50 shadow-[0_0_6px_rgba(0,212,255,0.4)]"></div>
              <div className="h-[1px] w-8 md:w-14 bg-gradient-to-l from-transparent to-rift-neon/40"></div>
            </div>
            <h3 className="font-cinematic font-black text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.2em] text-white/90" style={{ textShadow: '0 0 8px rgba(0,212,255,0.5), 0 0 25px rgba(0,212,255,0.2)' }}>
              Film Crew
            </h3>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-[1px] w-8 md:w-14 bg-gradient-to-r from-transparent to-rift-neon/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-rift-neon/50 shadow-[0_0_6px_rgba(0,212,255,0.4)]"></div>
              <div className="h-[1px] w-8 md:w-14 bg-gradient-to-l from-transparent to-rift-neon/40"></div>
            </div>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${crewVisible ? 'revealed' : ''}`}>
            {crewMembers.map((member, index) => (
              <div
                key={member.name}
                className={`cast-card group relative overflow-hidden rounded-2xl p-7 text-center ${member.highlighted ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{
                  background: member.highlighted
                    ? 'linear-gradient(135deg, rgba(0, 21, 40, 0.8), rgba(5, 5, 8, 0.95))'
                    : 'linear-gradient(135deg, rgba(10, 21, 32, 0.7), rgba(5, 5, 8, 0.9))',
                  border: member.highlighted
                    ? '1px solid rgba(0, 212, 255, 0.35)'
                    : '1px solid rgba(139, 0, 0, 0.2)',
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: member.highlighted ? '0 0 30px rgba(0,212,255,0.15), inset 0 0 20px rgba(0,212,255,0.05)' : '0 0 20px rgba(139,0,0,0.1), inset 0 0 15px rgba(0,0,0,0.2)' }}></div>

                {/* Top accent line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent ${member.highlighted ? 'via-rift-neon/70' : 'via-rift-blood-light/50'} to-transparent group-hover:w-28 transition-all duration-500`}></div>

                {/* Icon circle */}
                <div className={`relative z-10 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${member.highlighted ? 'bg-gradient-to-br from-rift-neon/15 to-rift-neon/5 border-2 border-rift-neon/40 group-hover:border-rift-neon/70 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]' : 'bg-gradient-to-br from-rift-blood/12 to-rift-neon/5 border border-rift-blood/25 group-hover:border-rift-neon/40'}`}>
                  <svg className={`w-6 h-6 transition-colors duration-500 ${member.highlighted ? 'text-rift-neon/70 group-hover:text-rift-neon' : 'text-rift-blood/50 group-hover:text-rift-neon/70'}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                  </svg>
                </div>

                {/* Role Title */}
                <p className={`relative z-10 font-cinematic text-[10px] font-bold uppercase tracking-[0.25em] mb-2 transition-colors duration-500 ${member.highlighted ? 'text-rift-neon group-hover:text-rift-neon' : 'text-rift-blood-light/70 group-hover:text-rift-neon'}`} style={{ textShadow: member.highlighted ? '0 0 10px rgba(0,212,255,0.4)' : '0 0 6px rgba(139,0,0,0.3)' }}>
                  {member.role}
                </p>

                {/* Name */}
                <h4 className={`relative z-10 font-heading text-white uppercase tracking-wider ${member.highlighted ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                  {member.name}
                </h4>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent ${member.highlighted ? 'via-rift-neon/50' : 'via-rift-blood/40'} to-transparent group-hover:w-24 transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
