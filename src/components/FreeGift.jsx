import { useEffect, useRef, useState } from 'react'

export default function FreeGift() {
  const [isVisible, setIsVisible] = useState(false)
  const [imgError, setImgError] = useState(false)
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

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Small label */}
          <p className="text-rift-neon/80 text-xs md:text-sm font-nav font-semibold uppercase tracking-[0.3em] mb-3">
            Free Gift
          </p>

          {/* Main title */}
          <h2 className="section-heading mb-4">The Rift Mobile Wallpaper</h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-body tracking-wide leading-relaxed">
            Download an exclusive mobile wallpaper from The Rift.
          </p>
        </div>

        {/* Wallpaper Preview - centered, 9:16 portrait */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="group relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
            {/* Glow behind frame */}
            <div className="absolute -inset-4 bg-gradient-to-b from-rift-blood/10 via-rift-neon/5 to-rift-blood/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

            {/* Cinematic frame */}
            <div className="relative rounded-2xl overflow-hidden border border-rift-blood/25 group-hover:border-rift-neon/40 shadow-[0_0_30px_rgba(0,0,0,0.6),0_0_60px_rgba(139,0,0,0.15)] group-hover:shadow-[0_0_40px_rgba(0,212,255,0.15),0_0_60px_rgba(139,0,0,0.2)] transition-all duration-700 group-hover:scale-[1.02]">
              {/* 9:16 aspect ratio container */}
              <div className="aspect-[9/16] bg-gradient-to-br from-[#0a0a12] to-rift-darker relative overflow-hidden">
                {imgError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <svg className="w-12 h-12 text-rift-blood/40 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-gray-500 text-sm font-body">Wallpaper preview unavailable</p>
                  </div>
                ) : (
                  <img
                    src="/free-gift/mobile-wallpaper-preview.jpg"
                    alt="The Rift mobile wallpaper preview"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                )}

                {/* Subtle overlay */}
                {!imgError && (
                  <div className="absolute inset-0 bg-gradient-to-t from-rift-darker/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                )}
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-rift-neon/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-rift-neon/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <a
            href="https://drive.google.com/drive/folders/161kz6guAHXy49lCeqrRccabNDi3yEp0U?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full font-nav font-bold uppercase tracking-[0.15em] text-sm md:text-base transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
          >
            {/* Button background */}
            <span className="absolute inset-0 bg-gradient-to-r from-rift-neon via-rift-glow to-rift-neon rounded-full"></span>
            <span className="absolute inset-0 rounded-full border border-rift-neon/50 group-hover:border-white/60 transition-colors duration-500"></span>
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: '0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.2)' }}
            ></span>

            {/* Download icon */}
            <svg
              className="relative z-10 w-5 h-5 text-black group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>

            {/* Button text */}
            <span className="relative z-10 text-black">Download Mobile Wallpaper</span>
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-darker to-transparent"></div>
    </section>
  )
}
