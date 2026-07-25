import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Trailer() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 }); if (ref.current) o.observe(ref.current); return () => o.disconnect() }, [])

  return (
    <section id="trailer" className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-abyss to-deep"></div>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      <div className="orb orb-purple w-[500px] h-[500px] top-[5%] right-[-10%] opacity-60"></div>
      <div className="orb orb-pink w-[400px] h-[400px] bottom-[10%] left-[-8%] opacity-50"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={vis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="section-title mb-4">Official Trailer</h2>
          <p className="text-center mb-14 font-heading font-light text-base md:text-lg uppercase tracking-[0.2em] text-c-white/70"
             style={{ textShadow: '0 0 10px rgba(0,229,255,0.2), 0 0 20px rgba(124,77,255,0.1)' }}>
            A New Chapter in Sri Lanka Cinema
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={vis ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="group"
        >
          <div className="rainbow-border rounded-2xl">
            <div className="bg-abyss rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="h-10 bg-abyss/80 border-b border-c-purple/10 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-c-cyan animate-pulse-slow"></div>
                  <span className="tech-label">PLAYBACK ACTIVE</span>
                </div>
                <span className="tech-label">4K ULTRA HD</span>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/BjWxnZRaf5E" title="The Rift Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowFullScreen></iframe>
              </div>
              <div className="h-8 bg-abyss/80 border-t border-c-purple/10 flex items-center justify-between px-4">
                <span className="tech-label">SIGNAL: STRONG</span>
                <span className="tech-label text-c-pink/60">CLASSIFIED</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
