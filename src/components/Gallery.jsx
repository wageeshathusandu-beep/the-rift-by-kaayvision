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
      <div className="absolute inset-0 bg-gradient-to-b from-sci-black via-sci-darker to-sci-black"></div>
      <div className="absolute top-0 left-0 right-0 glow-divider"></div>

      {/* Ambient */}
      <div className="orb-cyan w-[400px] h-[400px] top-[30%] left-[-10%] opacity-25"></div>
      <div className="orb-blue w-[500px] h-[500px] bottom-[5%] right-[-15%] opacity-20"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="tech-label text-center mb-3 text-sci-cyan/70">Visual Archive</p>
        <h2 className="section-heading mb-4">Gallery</h2>
        <p className="text-center text-sci-muted mb-14 max-w-xl mx-auto font-body text-lg tracking-wide">Exclusive stills from the production</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${item.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card p-0 overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-60 group-hover:brightness-75"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sci-black/90 via-sci-black/30 to-sci-cyan/5 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                  {/* Hover content */}
                  <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div>
                      <h4 className="text-sci-white font-heading text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-sci-cyan/80 text-xs font-body">{item.description}</p>
                    </div>
                  </div>

                  {/* Corner accents on hover */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-sci-cyan/40 rounded-tl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-sci-cyan/40 rounded-br-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
