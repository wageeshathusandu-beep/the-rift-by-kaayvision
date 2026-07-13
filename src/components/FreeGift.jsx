import { useEffect, useRef, useState } from 'react'

const POSTER_URL = 'https://i.imgur.com/162JyPV.jpeg'

const wallpaperPreviews = [
  { title: 'The Rift - Dark Portal', aspect: 'Phone', image: POSTER_URL },
  { title: 'The Rift - Neon Abyss', aspect: 'Desktop', image: POSTER_URL },
  { title: 'The Rift - AI Awakening', aspect: 'Phone', image: POSTER_URL },
]

export default function FreeGift() {
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
    <section id="free-gift" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#060610] to-rift-darker"></div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-rift-neon/4 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-rift-blood/4 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-900/3 rounded-full blur-[130px]"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Gift icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-rift-neon/20 rounded-full blur-xl"></div>
              <svg className="relative w-12 h-12 text-rift-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
          </div>
          <h2 className="section-heading mb-4">Free Gift</h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-body tracking-wide leading-relaxed">
            Download exclusive <span className="text-rift-neon/80 font-semibold">The Rift</span> wallpapers for your phone and desktop.
            <span className="block text-gray-400 text-base mt-2">High-resolution artwork from the film — completely free.</span>
          </p>
        </div>

        {/* Wallpaper Preview Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
          {wallpaperPreviews.map((wallpaper, index) => (
            <div
              key={wallpaper.title}
              className="group relative rounded-2xl overflow-hidden border border-rift-neon/15 hover:border-rift-neon/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
              style={{
                transitionDelay: `${0.4 + index * 0.15}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <div className={`${wallpaper.aspect === 'Phone' ? 'aspect-[9/16]' : 'aspect-[16/9]'} bg-gradient-to-br from-[#0a0a12] to-rift-darker relative overflow-hidden`}>
                <img
                  src={wallpaper.image}
                  alt={wallpaper.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rift-darker/80 via-transparent to-rift-neon/5 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-black/60 border border-rift-neon/30 rounded-full text-xs font-nav uppercase tracking-[0.15em] text-rift-neon/80">
                    {wallpaper.aspect}
                  </span>
                  <h4 className="text-white font-heading text-lg uppercase tracking-wider mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {wallpaper.title}
                  </h4>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-rift-neon/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-rift-neon/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
          <a
            href="https://drive.google.com/drive/folders/161kz6guAHXy49lCeqrRccabNDi3yEp0U?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 md:px-12 md:py-5 rounded-full font-nav font-bold uppercase tracking-[0.18em] text-sm md:text-base transition-all duration-500 hover:scale-110 overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-rift-neon via-rift-glow to-rift-neon rounded-full"></span>
            <span className="absolute inset-0 rounded-full border border-rift-neon/50 group-hover:border-white/60 transition-colors duration-500"></span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.2)' }}></span>
            {/* Download icon */}
            <svg className="relative z-10 w-5 h-5 text-black group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="relative z-10 text-black">
              Download Free Wallpaper Pack
            </span>
          </a>
          <p className="text-gray-500 text-xs font-body mt-4 tracking-wide">
            Opens in Google Drive &bull; Multiple resolutions included
          </p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-darker to-transparent"></div>
    </section>
  )
}
