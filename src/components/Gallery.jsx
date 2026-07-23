import { useEffect, useRef, useState } from 'react'

const POSTER_URL = 'https://i.imgur.com/162JyPV.jpeg'

const galleryItems = [
  { title: 'Official Poster', description: 'The Rift - Coming 2026', image: POSTER_URL, featured: true },
  { title: 'The Lab', description: 'Where it all began', image: POSTER_URL },
  { title: 'First Contact', description: 'The AI awakens', image: POSTER_URL },
  { title: 'The Rift Opens', description: 'Reality fractures', image: POSTER_URL },
  { title: 'The Team', description: 'United against the unknown', image: POSTER_URL },
  { title: 'Final Stand', description: 'Humanity fights back', image: POSTER_URL },
]

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[#050505]"></div>
      <div className="absolute top-0 left-0 right-0 archive-divider"></div>

      {/* Ambient orbs */}
      <div className="orb-red w-[400px] h-[400px] top-[20%] left-[-8%] opacity-30"></div>
      <div className="orb-cyan w-[350px] h-[350px] bottom-[10%] right-[-10%] opacity-25"></div>
      <div className="orb-amber w-[300px] h-[300px] top-[60%] right-[10%] opacity-20"></div>

      <span className="absolute top-6 left-4 md:left-8 tech-label">ARCHIVE FILE 008 // VISUAL DATA</span>
      <span className="absolute top-6 right-4 md:right-8 tech-label">GALLERY</span>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[1.2s] ease-smooth ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="tech-label text-center mb-2">Visual Archive</p>
        <h2 className="section-heading mb-4">Gallery</h2>
        <p className="text-center text-rift-metal mb-12 max-w-xl mx-auto font-body text-lg tracking-wide">Exclusive stills from the production</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group ind-card p-0 overflow-hidden ${item.featured ? 'border-rift-amber/20' : ''}`}
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)', transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s` }}
            >
              {/* Top bar */}
              <div className="h-6 bg-[#0a0a0a] border-b border-rift-metal/10 flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                  <span className="amber-dot"></span>
                  <span className="tech-label">{item.title.toUpperCase()}</span>
                </div>
                <span className="tech-label">IMG</span>
              </div>

              <div className="aspect-[4/3] relative overflow-hidden bg-[#080808] scanlines">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-smooth group-hover:scale-110 brightness-75 group-hover:brightness-95"
                />

                {/* Dark overlay with colorful gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>

                {/* Colorful tint on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rift-amber/0 via-transparent to-rift-red/0 group-hover:from-rift-amber/5 group-hover:to-rift-red/10 transition-all duration-700"></div>

                {/* Hover overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-rift-offwhite font-display text-xl uppercase tracking-wider">{item.title}</h4>
                    <p className="text-rift-amber/70 text-sm font-body">{item.description}</p>
                  </div>
                </div>

                {/* Corner accents on hover */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-rift-amber/0 group-hover:border-rift-amber/50 transition-all duration-500 rounded-tl-sm"></div>
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-rift-amber/0 group-hover:border-rift-amber/50 transition-all duration-500 rounded-br-sm"></div>
              </div>

              {/* Bottom bar */}
              <div className="h-5 bg-[#0a0a0a] border-t border-rift-metal/10 flex items-center justify-center">
                <span className="tech-label">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
