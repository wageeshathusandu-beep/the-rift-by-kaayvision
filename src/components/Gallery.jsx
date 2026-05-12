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
    <section id="gallery" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rift-blue/20 via-rift-dark to-rift-dark"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">Gallery</h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto font-body text-lg tracking-wide">Exclusive stills from the production</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl neon-border cursor-pointer ${item.featured ? 'sm:col-span-2 lg:col-span-1 ring-1 ring-rift-neon/20' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-rift-deep via-rift-blue to-rift-dark flex items-center justify-center relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rift-dark via-rift-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-white font-heading text-2xl uppercase tracking-wider">{item.title}</h4>
                    <p className="text-rift-neon text-sm font-body">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
