import { useEffect, useRef, useState } from 'react'

const castMembers = [
  { name: 'Alex Rivera', role: 'Dr. Sarah Chen', type: 'Lead Researcher' },
  { name: 'Marcus Webb', role: 'Commander Drake', type: 'Military Advisor' },
  { name: 'Elena Voss', role: 'ARIA (AI Voice)', type: 'The AI Entity' },
  { name: 'James Okafor', role: 'Dr. Marcus Hall', type: 'Quantum Physicist' },
  { name: 'Sophia Lin', role: 'Agent Torres', type: 'Government Agent' },
  { name: 'David Chen', role: 'The Witness', type: 'Survivor' },
]

const crewMembers = [
  { name: 'Ryan Mitchell', role: 'Director' },
  { name: 'Sarah Blake', role: 'Screenplay' },
  { name: 'Omar Hassan', role: 'Cinematography' },
  { name: 'Lisa Park', role: 'Visual Effects' },
  { name: 'Tom Richards', role: 'Original Score' },
  { name: 'Nina Volkov', role: 'Production Design' },
]

export default function Cast() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

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

  return (
    <section id="cast" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rift-dark to-rift-blue/20"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">Cast & Crew</h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto font-body text-lg tracking-wide">The visionaries behind The Rift</p>

        {/* Cast */}
        <h3 className="sub-heading text-white mb-8 text-center">
          <span className="text-rift-neon">&#9670;</span> CAST <span className="text-rift-neon">&#9670;</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {castMembers.map((member, index) => (
            <div
              key={member.name}
              className="glass-card p-6 text-center hover:border-rift-neon/30 transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-rift-neon/20 to-rift-neon-purple/20 border border-rift-neon/20 flex items-center justify-center group-hover:border-rift-neon/50 transition-colors">
                <svg className="w-8 h-8 text-rift-neon/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                </svg>
              </div>
              <h4 className="font-nav font-semibold text-white text-sm md:text-base uppercase tracking-wider">{member.name}</h4>
              <p className="text-rift-neon text-xs md:text-sm mt-1 font-body font-medium">{member.role}</p>
              <p className="text-gray-500 text-xs mt-1 font-body">{member.type}</p>
            </div>
          ))}
        </div>

        {/* Crew */}
        <h3 className="sub-heading text-white mb-8 text-center">
          <span className="text-rift-neon-purple">&#9670;</span> CREW <span className="text-rift-neon-purple">&#9670;</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {crewMembers.map((member) => (
            <div key={member.name} className="glass-card p-4 text-center hover:border-rift-neon-purple/30 transition-all duration-300">
              <h4 className="font-nav font-semibold text-white text-sm uppercase tracking-wider">{member.name}</h4>
              <p className="text-rift-neon-purple text-xs mt-1 font-body">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
