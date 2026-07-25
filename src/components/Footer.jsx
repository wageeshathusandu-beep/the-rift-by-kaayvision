import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.2 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])

  return (
    <footer className="py-12 relative overflow-hidden bg-void" ref={ref}>
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={vis ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-c-cyan animate-pulse-slow"></div>
            <span className="font-display text-sm tracking-widest text-c-white">THE RIFT</span>
            <span className="text-c-muted/30">|</span>
            <span className="text-c-muted/60 text-xs font-body">A KAAY VISION Film</span>
          </div>
          <div className="flex gap-5 text-[10px] font-mono uppercase tracking-widest text-c-muted/50">
            {['Privacy', 'Terms', 'Press Kit'].map((item) => (
              <a key={item} href="#" className="hover:text-c-cyan hover:shadow-[0_0_8px_rgba(0,229,255,0.3)] transition-all duration-300">{item}</a>
            ))}
          </div>
          <p className="text-c-muted/40 text-xs font-mono">&copy; 2026 KAAY VISION</p>
        </div>
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-c-purple/10 to-transparent"></div>
      </motion.div>
    </footer>
  )
}
