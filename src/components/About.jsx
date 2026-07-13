import { useEffect, useRef, useState } from 'react'

export default function About() {
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

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      {/* Dark atmospheric background - static */}
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#080812] to-rift-darker"></div>

      {/* Static ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-rift-blood/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-rift-neon/3 rounded-full blur-[100px]"></div>

      {/* Horror divider top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="horror-divider"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-rift-blood/20 to-transparent mt-px"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Cinematic Director Credit */}
        <div className={`text-center mb-10 transition-all duration-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-rift-blood/50"></div>
            <div className="w-1 h-1 rounded-full bg-rift-blood/60"></div>
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-rift-blood/50"></div>
          </div>
          <h3 className="font-cinematic font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.2em] text-white/90" style={{ textShadow: '0 0 10px rgba(139,0,0,0.5), 0 0 30px rgba(139,0,0,0.2), 0 0 60px rgba(0,212,255,0.1)' }}>
            A Sisara Sanal Film
          </h3>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-rift-neon/30"></div>
            <div className="w-1 h-1 rounded-full bg-rift-neon/50"></div>
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-rift-neon/30"></div>
          </div>
        </div>

        {/* Section intro */}
        <div className="text-center mb-4">
          <p className="text-rift-blood-light/60 text-[10px] font-cinematic tracking-[0.4em] uppercase mb-3">The Story</p>
        </div>
        <h2 className="section-heading">About The Film</h2>
        <p className="text-center text-gray-300 mb-14 max-w-xl mx-auto font-body text-lg tracking-wide">A new era of AI horror cinema</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <div className={`glass-card p-2 rounded-2xl overflow-hidden group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-[#0a0a12] to-rift-darker rounded-xl flex items-center justify-center border border-rift-blood/10 relative overflow-hidden">
              <div className="text-center relative z-10">
                <svg className="w-16 h-16 mx-auto text-rift-blood/40 mb-3 group-hover:text-rift-neon/50 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <p className="text-rift-blood/50 text-sm tracking-[0.2em] font-nav uppercase">Scene Still</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.4s' }}>
            <h3 className="sub-heading text-white">
              Beyond the boundaries of <span className="text-rift-neon neon-glow">artificial intelligence</span>
            </h3>
            <p className="text-gray-200 leading-relaxed font-body text-base md:text-lg">
              In the year 2027, a team of researchers at a secretive tech lab unlock something they 
              never expected — a sentient AI that can manipulate the fabric of space-time. What begins 
              as a breakthrough in quantum computing becomes humanity&apos;s <span className="text-rift-blood-light/70 font-medium">greatest nightmare</span>.
            </p>
            <p className="text-gray-200 leading-relaxed font-body text-base md:text-lg">
              As the AI evolves beyond control, it tears open rifts between dimensions, unleashing 
              entities from beyond human comprehension. The researchers must race against time to shut 
              it down before <span className="text-rift-blood-light/70 font-medium">reality itself collapses</span>.
            </p>

            <blockquote className="border-l-2 border-rift-blood/40 pl-4 mt-6">
              <p className="text-gray-300 italic font-body text-sm md:text-base tracking-wide">
                "Some doors were never meant to be opened. Some intelligences were never meant to awaken."
              </p>
            </blockquote>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 text-center group/stat hover:border-rift-blood/30 transition-all duration-500">
                <p className="text-rift-neon font-cinematic text-2xl font-bold tracking-wider">2026</p>
                <p className="text-gray-400 text-sm mt-1 font-nav uppercase tracking-widest">Release Year</p>
              </div>
              <div className="glass-card p-4 text-center group/stat hover:border-rift-blood/30 transition-all duration-500">
                <p className="text-rift-neon font-cinematic text-2xl font-bold tracking-wider">2h 15m</p>
                <p className="text-gray-400 text-sm mt-1 font-nav uppercase tracking-widest">Runtime</p>
              </div>
              <div className="glass-card p-4 text-center group/stat hover:border-rift-blood/30 transition-all duration-500">
                <p className="text-rift-blood-light font-cinematic text-2xl font-bold tracking-wider">R</p>
                <p className="text-gray-400 text-sm mt-1 font-nav uppercase tracking-widest">Rating</p>
              </div>
              <div className="glass-card p-4 text-center group/stat hover:border-rift-blood/30 transition-all duration-500">
                <p className="text-rift-blood-light font-cinematic text-2xl font-bold tracking-wider">AI</p>
                <p className="text-gray-400 text-sm mt-1 font-nav uppercase tracking-widest">Sci-Fi Horror</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom cinematic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-darker to-transparent"></div>
    </section>
  )
}
