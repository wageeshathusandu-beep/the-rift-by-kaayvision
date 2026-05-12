import { useEffect, useRef, useState } from 'react'

const mainRole = { name: 'Saduni Amaya', role: 'Main Role' }

const subRoles = [
  { name: 'Sachith Sahan' },
  { name: 'Nipun Nethmal' },
  { name: 'Geeshan Randunu' },
  { name: 'Inuki Akithra' },
  { name: 'Suraj Chanuka' },
]

const otherCasting = [
  { name: 'Chenuthi Nulinsa' },
  { name: 'Reshani Thadisha' },
  { name: 'Yonali Vihangi' },
  { name: 'Ranuki Akithma' },
]

const crewMembers = [
  { name: 'Sisara Sanal', role: 'Director', icon: 'M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z' },
  { name: 'Visal Damsith', role: 'Assistant Director', icon: 'M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125m1.5 3.75c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125' },
  { name: 'Wageesha Thusandu', role: 'Production Manager', icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281zM15 12a3 3 0 11-6 0 3 3 0 016 0z' },
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
    <section id="cast" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#080810] to-rift-darker"></div>

      {/* Horror atmosphere */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rift-blood/4 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rift-neon/3 rounded-full blur-[120px]"></div>

      {/* Fog */}
      <div className="fog-layer">
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-rift-blood/3 to-transparent animate-fog-drift opacity-30"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">Cast & Crew</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto font-body text-lg tracking-wide">The visionaries behind The Rift</p>

        {/* ===== MAIN ROLE - Hero Card ===== */}
        <h3 className="sub-heading text-white mb-8 text-center">
          <span className="text-rift-neon">&#9670;</span> MAIN ROLE <span className="text-rift-neon">&#9670;</span>
        </h3>
        <div className="flex justify-center mb-16">
          <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl p-10 text-center transition-all duration-500 hover:-translate-y-2" style={{ background: 'linear-gradient(135deg, rgba(0, 21, 40, 0.8), rgba(5, 5, 8, 0.95))', border: '1px solid rgba(0, 212, 255, 0.3)' }}>
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
        <h3 className="sub-heading text-white mb-8 text-center">
          <span className="text-rift-blood-light">&#9670;</span> SUB ROLES <span className="text-rift-blood-light">&#9670;</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {subRoles.map((actor, index) => (
            <div
              key={actor.name}
              className="group relative overflow-hidden rounded-xl p-6 text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 15, 25, 0.7), rgba(5, 5, 8, 0.9))',
                border: '1px solid rgba(139, 0, 0, 0.2)',
                animationDelay: `${index * 0.1}s`,
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

        {/* ===== OTHER CASTING ===== */}
        <h3 className="sub-heading text-white mb-8 text-center">
          <span className="text-gray-500">&#9670;</span> OTHER CASTING <span className="text-gray-500">&#9670;</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {otherCasting.map((actor) => (
            <div
              key={actor.name}
              className="group relative overflow-hidden rounded-lg p-4 text-center transition-all duration-400 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, rgba(8, 12, 20, 0.6), rgba(5, 5, 8, 0.8))',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Subtle hover border */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-rift-blood/20 transition-all duration-400"></div>

              {/* Small avatar */}
              <div className="relative z-10 w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-white/5 to-rift-blood/5 border border-white/10 flex items-center justify-center group-hover:border-rift-neon/20 transition-all duration-400">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-rift-neon/50 transition-colors duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                </svg>
              </div>

              {/* Name */}
              <h4 className="relative z-10 font-nav font-semibold text-gray-300 text-xs md:text-sm uppercase tracking-wider group-hover:text-white transition-colors duration-400">
                {actor.name}
              </h4>
            </div>
          ))}
        </div>

        {/* ===== CREW ===== */}
        <h3 className="sub-heading text-white mb-10 text-center">
          <span className="text-rift-neon">&#9670;</span> CREW <span className="text-rift-neon">&#9670;</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crewMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.5}s`,
                background: 'linear-gradient(135deg, rgba(10, 21, 32, 0.7), rgba(5, 5, 8, 0.9))',
                border: '1px solid rgba(139, 0, 0, 0.25)',
              }}
            >
              {/* Horror glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-rift-blood/0 to-rift-neon/0 group-hover:from-rift-blood/8 group-hover:to-rift-neon/5 transition-all duration-700 rounded-2xl"></div>

              {/* Top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-rift-blood-light/60 to-transparent group-hover:w-32 group-hover:via-rift-neon/60 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-rift-blood/15 to-rift-neon/10 border border-rift-blood/30 flex items-center justify-center group-hover:border-rift-neon/50 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] transition-all duration-500">
                <svg className="w-7 h-7 text-rift-blood/60 group-hover:text-rift-neon transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={member.icon} />
                </svg>
              </div>

              {/* Role Title */}
              <p className="relative z-10 font-cinematic text-xs font-bold text-rift-blood-light uppercase tracking-[0.25em] mb-3 group-hover:text-rift-neon transition-colors duration-500" style={{ textShadow: '0 0 8px rgba(139,0,0,0.4)' }}>
                {member.role}
              </p>

              {/* Name */}
              <h4 className="relative z-10 font-heading text-2xl md:text-3xl text-white uppercase tracking-wider">
                {member.name}
              </h4>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-rift-blood/50 to-transparent group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
