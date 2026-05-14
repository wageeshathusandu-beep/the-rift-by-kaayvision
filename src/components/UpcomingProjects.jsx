import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'Project 01',
    status: 'Classified',
    statusColor: 'text-rift-blood-light',
    borderColor: 'border-rift-blood/30',
    glowColor: 'rgba(139,0,0,0.3)',
  },
  {
    id: '02',
    title: 'Project 02',
    status: 'In Development',
    statusColor: 'text-rift-neon',
    borderColor: 'border-rift-neon/30',
    glowColor: 'rgba(0,212,255,0.3)',
  },
  {
    id: '03',
    title: 'Project 03',
    status: 'Coming Soon',
    statusColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    glowColor: 'rgba(123,47,247,0.3)',
  },
]

export default function UpcomingProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleContactClick = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="upcoming" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#060610] to-rift-darker"></div>

      {/* Static ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-rift-blood/4 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rift-neon/3 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/3 rounded-full blur-[130px]"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-heading mb-4">Upcoming Projects</h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-body tracking-wide leading-relaxed">
            Interested in producing or collaborating with our upcoming films?{' '}
            <span className="text-rift-neon/80 font-semibold">Contact KAAY VISION.</span>
          </p>
        </div>

        {/* Project Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`upcoming-project-card group relative rounded-2xl border ${project.borderColor} overflow-hidden transition-all duration-700`}
              style={{
                transitionDelay: `${0.4 + index * 0.15}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                background: 'linear-gradient(135deg, rgba(10, 15, 25, 0.7), rgba(5, 5, 8, 0.9))',
                boxShadow: '0 0 15px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,0,0,0.3)',
              }}
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 25px ${project.glowColor}, inset 0 0 20px rgba(0,0,0,0.3)` }}></div>

              <div className="relative z-10 p-8 md:p-10 text-center">
                {/* Project number */}
                <div className="mb-4">
                  <span className="text-6xl md:text-7xl font-cinematic font-black text-white/5 select-none">{project.id}</span>
                </div>

                {/* Project title */}
                <h3 className="text-xl md:text-2xl font-heading uppercase tracking-[0.15em] text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Status badge */}
                <div className="inline-flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${project.id === '01' ? 'bg-red-500' : project.id === '02' ? 'bg-cyan-400' : 'bg-purple-400'} animate-pulse`}></span>
                  <span className={`text-sm font-nav uppercase tracking-[0.2em] ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Icons */}
                {project.id === '01' && (
                  <div className="mt-6 flex justify-center">
                    <svg className="w-8 h-8 text-rift-blood/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                )}
                {project.id === '02' && (
                  <div className="mt-6 flex justify-center">
                    <svg className="w-8 h-8 text-rift-neon/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-2.625 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-2.625 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5c0 .621-.504 1.125-1.125 1.125m1.5 0h12m-12 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m12-3.75c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5m1.5 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m0-3.75h-12" />
                    </svg>
                  </div>
                )}
                {project.id === '03' && (
                  <div className="mt-6 flex justify-center">
                    <svg className="w-8 h-8 text-purple-400/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration text */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.7s' }}>
          <p className="text-gray-300 text-base md:text-lg font-body tracking-wide max-w-2xl mx-auto italic">
            "We are open for film collaborations, production partnerships, and creative projects."
          </p>
        </div>

        {/* Contact for Producing Button */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.9s' }}>
          <button
            onClick={handleContactClick}
            className="upcoming-contact-btn group relative inline-flex items-center gap-3 px-10 py-4 md:px-12 md:py-5 rounded-full font-nav font-bold uppercase tracking-[0.18em] text-sm md:text-base transition-all duration-500 hover:scale-110 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-rift-blood via-red-800 to-rift-blood rounded-full"></span>
            <span className="absolute inset-0 rounded-full border border-rift-blood-light/50 group-hover:border-rift-neon/60 transition-colors duration-500"></span>
            <span className="absolute inset-0 rounded-full upcoming-btn-sweep"></span>
            <span className="relative z-10 text-white group-hover:text-white">
              Contact For Producing
            </span>
            <svg className="relative z-10 w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* More Films Coming Soon */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.1s' }}>
          <p className="text-gray-400 text-xs font-cinematic tracking-[0.4em] uppercase">
            More Films Coming Soon
          </p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-darker to-transparent"></div>
    </section>
  )
}
