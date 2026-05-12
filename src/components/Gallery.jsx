import { useEffect, useRef, useState } from 'react'

const galleryItems = [
  { title: 'The Lab', description: 'Where it all began' },
  { title: 'First Contact', description: 'The AI awakens' },
  { title: 'The Rift Opens', description: 'Reality fractures' },
  { title: 'Beyond', description: 'What lies on the other side' },
  { title: 'The Team', description: 'United against the unknown' },
  { title: 'Final Stand', description: 'Humanity fights back' },
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
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">Exclusive stills from the production</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl neon-border cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-rift-deep via-rift-blue to-rift-dark flex items-center justify-center relative">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.1) 0%, transparent 50%)',
                  }}></div>
                </div>

                <div className="text-center relative z-10">
                  <svg className="w-12 h-12 mx-auto text-rift-neon/30 mb-2 group-hover:text-rift-neon/60 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                  <p className="text-gray-500 text-xs tracking-wider">IMAGE PLACEHOLDER</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rift-dark via-rift-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                    <p className="text-rift-neon text-sm">{item.description}</p>
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
