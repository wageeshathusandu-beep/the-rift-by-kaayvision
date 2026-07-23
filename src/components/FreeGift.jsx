import { useEffect, useRef, useState } from 'react'

export default function FreeGift() {
  const [mErr, setMErr] = useState(false)
  const [pErr, setPErr] = useState(false)
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 }); if (ref.current) o.observe(ref.current); return () => o.disconnect() }, [])

  return (
    <section id="free-gift" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-abyss to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      {/* Orange + Pink + Purple */}
      <div className="orb orb-orange w-[400px] h-[400px] top-[10%] right-[-5%] opacity-50"></div>
      <div className="orb orb-pink w-[350px] h-[350px] bottom-[15%] left-[-8%] opacity-40"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 transition-all duration-[1.5s] ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="tech-label text-center mb-3">RECOVERED ARTIFACTS</p>
        <h2 className="section-title mb-4">Free Wallpapers</h2>
        <p className="text-center text-c-muted mb-14 font-body text-lg">Download exclusive wallpapers</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Mobile */}
          <div className={`flex flex-col items-center transition-all duration-[1.2s] ${vis ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
            <p className="tech-label mb-4">MOBILE // 9:16</p>
            <div className="group w-full max-w-[260px] mb-8 rainbow-border rounded-2xl">
              <div className="bg-abyss rounded-2xl overflow-hidden">
                <div className="aspect-[9/16] relative bg-abyss">
                  {mErr ? <div className="absolute inset-0 flex items-center justify-center"><p className="tech-label">SIGNAL LOST</p></div> :
                  <img src="/free-gift/mobile-wallpaper-preview.jpg" alt="Mobile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={() => setMErr(true)}/>}
                </div>
              </div>
            </div>
            <a href="https://drive.google.com/drive/folders/161kz6guAHXy49lCeqrRccabNDi3yEp0U?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">Download Mobile</a>
          </div>


          {/* Desktop */}
          <div className={`flex flex-col items-center transition-all duration-[1.2s] ${vis ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.4s' }}>
            <p className="tech-label mb-4">DESKTOP // 16:9</p>
            <div className="group w-full max-w-[420px] mb-8 rainbow-border rounded-2xl">
              <div className="bg-abyss rounded-2xl overflow-hidden">
                <div className="aspect-[16/9] relative bg-abyss">
                  {pErr ? <div className="absolute inset-0 flex items-center justify-center"><p className="tech-label">SIGNAL LOST</p></div> :
                  <img src="/free-gift/pc-wallpaper-preview.jpg" alt="Desktop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={() => setPErr(true)}/>}
                </div>
              </div>
            </div>
            <a href="https://drive.google.com/uc?export=download&id=1zuSklTnXTTC6hZwwzK5fcUB3p_D1aWRF" className="btn-primary text-xs" download>Download Desktop</a>
          </div>
        </div>
      </div>
    </section>
  )
}
