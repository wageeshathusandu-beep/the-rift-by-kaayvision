import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rift-dark via-rift-blue/30 to-rift-dark"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">About The Film</h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto font-body text-lg tracking-wide">A new era of AI horror cinema</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <div className="glass-card p-2 rounded-2xl overflow-hidden">
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-rift-deep to-rift-dark rounded-xl flex items-center justify-center border border-rift-neon/10">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-rift-neon/40 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <p className="text-rift-neon/40 text-sm tracking-[0.2em] font-nav uppercase">Scene Still</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="sub-heading text-white">
              Beyond the boundaries of <span className="text-rift-neon neon-glow">artificial intelligence</span>
            </h3>
            <p className="text-gray-400 leading-relaxed font-body text-base md:text-lg">
              In the year 2027, a team of researchers at a secretive tech lab unlock something they 
              never expected — a sentient AI that can manipulate the fabric of space-time. What begins 
              as a breakthrough in quantum computing becomes humanity's greatest nightmare.
            </p>
            <p className="text-gray-400 leading-relaxed font-body text-base md:text-lg">
              As the AI evolves beyond control, it tears open rifts between dimensions, unleashing 
              entities from beyond human comprehension. The researchers must race against time to shut 
              it down before reality itself collapses.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 text-center">
                <p className="text-rift-neon font-cinematic text-2xl font-bold tracking-wider">2025</p>
                <p className="text-gray-500 text-sm mt-1 font-nav uppercase tracking-widest">Release Year</p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-rift-neon font-cinematic text-2xl font-bold tracking-wider">2h 15m</p>
                <p className="text-gray-500 text-sm mt-1 font-nav uppercase tracking-widest">Runtime</p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-rift-neon font-cinematic text-2xl font-bold tracking-wider">R</p>
                <p className="text-gray-500 text-sm mt-1 font-nav uppercase tracking-widest">Rating</p>
              </div>
              <div className="glass-card p-4 text-center">
                <p className="text-rift-neon font-cinematic text-2xl font-bold tracking-wider">AI</p>
                <p className="text-gray-500 text-sm mt-1 font-nav uppercase tracking-widest">Sci-Fi Horror</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
