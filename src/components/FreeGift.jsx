import { useEffect, useRef, useState } from 'react'

export default function FreeGift() {
  const [mobileErr, setMobileErr] = useState(false)
  const [pcErr, setPcErr] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="free-gift" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-abyss to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      <div className="orb orb-cyan w-[350px] h-[350px] top-[10%] right-[-5%] opacity-40"></div>
      <div className="orb orb-purple w-[300px] h-[300px] bottom-[15%] left-[-8%] opacity-30"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[1.5s] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="tech-label text-center mb-3">RECOVERED ARTIFACTS</p>
        <h2 className="section-title mb-4">Free Wallpapers</h2>

        <p className="text-center text-muted mb-14 font-body text-lg tracking-wide">Download exclusive wallpapers from The Rift</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Mobile Wallpaper */}
          <div className={`flex flex-col items-center transition-all duration-[1.2s] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
            <p className="tech-label mb-4">MOBILE // 9:16</p>
            <h3 className="font-display text-xl tracking-widest text-soft-white mb-6">MOBILE WALLPAPER</h3>

            <div className="group relative w-full max-w-[260px] mb-8">
              <div className="glass-card p-0 overflow-hidden rounded-xl">
                <div className="h-8 bg-abyss/80 border-b border-alien-cyan/10 flex items-center justify-between px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-alien-cyan animate-pulse-slow"></div>
                    <span className="tech-label">ARTIFACT</span>
                  </div>
                  <span className="tech-label">9:16</span>
                </div>
                <div className="aspect-[9/16] relative bg-abyss">
                  {mobileErr ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <svg className="w-10 h-10 text-muted/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <p className="tech-label">SIGNAL LOST</p>
                    </div>
                  ) : (
                    <img src="/free-gift/mobile-wallpaper-preview.jpg" alt="Mobile wallpaper"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => setMobileErr(true)} />
                  )}
                </div>
              </div>
            </div>

            <a href="https://drive.google.com/drive/folders/161kz6guAHXy49lCeqrRccabNDi3yEp0U?usp=sharing"
              target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Mobile
            </a>
          </div>


          {/* Desktop Wallpaper */}
          <div className={`flex flex-col items-center transition-all duration-[1.2s] ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.4s' }}>
            <p className="tech-label mb-4">DESKTOP // 16:9</p>
            <h3 className="font-display text-xl tracking-widest text-soft-white mb-6">PC WALLPAPERS</h3>

            <div className="group relative w-full max-w-[420px] mb-8">
              <div className="glass-card p-0 overflow-hidden rounded-xl">
                <div className="h-8 bg-abyss/80 border-b border-alien-cyan/10 flex items-center justify-between px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-alien-cyan animate-pulse-slow"></div>
                    <span className="tech-label">ARTIFACT</span>
                  </div>
                  <span className="tech-label">16:9</span>
                </div>
                <div className="aspect-[16/9] relative bg-abyss">
                  {pcErr ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <svg className="w-10 h-10 text-muted/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <p className="tech-label">SIGNAL LOST</p>
                    </div>
                  ) : (
                    <img src="/free-gift/pc-wallpaper-preview.jpg" alt="PC wallpaper"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={() => setPcErr(true)} />
                  )}
                </div>
              </div>
            </div>

            <a href="https://drive.google.com/uc?export=download&id=1zuSklTnXTTC6hZwwzK5fcUB3p_D1aWRF"
              className="btn-primary text-xs" download>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Desktop
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
