import { useEffect, useRef, useState } from 'react'

const POSTER_URL = 'https://i.imgur.com/162JyPV.jpeg'

const galleryItems = [
  { title: 'Official Poster', description: 'The Rift - Coming 2025', image: POSTER_URL, featured: true },
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
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#060610] to-rift-darker"></div>

      {/* Horror ambient */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-rift-blood/4 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-rift-neon/3 rounded-full blur-[120px]"></div>

      {/* Fog */}
      <div className="fog-layer">
        <div className="absolute inset-0 bg-gradient-to-l from-rift-blood/3 via-transparent to-rift-neon/2 animate-fog-drift-reverse opacity-30"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">Gallery</h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto font-body text-lg tracking-wide">Exclusive stills from the production</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-rift-blood/15 hover:border-rift-blood-light/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,0,0,0.2)] ${item.featured ? 'sm:col-span-2 lg:col-span-1 ring-1 ring-rift-blood/20' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#0a0a12] to-rift-darker flex items-center justify-center relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                />

                {/* Dark horror overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rift-darker/80 via-transparent to-rift-blood/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rift-darker via-rift-darker/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h4 className="text-white font-heading text-2xl uppercase tracking-wider">{item.title}</h4>
                    <p className="text-rift-blood-light text-sm font-body">{item.description}</p>
                  </div>
                </div>

                {/* Corner blood accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-rift-blood/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-rift-blood/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
