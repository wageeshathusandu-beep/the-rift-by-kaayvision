import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 200); return () => clearTimeout(t) }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const handleMouse = (e) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMouse({ x: x * 8, y: y * 8 })
    }
    const el = sectionRef.current
    if (el) el.addEventListener('mousemove', handleMouse, { passive: true })
    return () => { if (el) el.removeEventListener('mousemove', handleMouse) }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-deep"></div>
      {/* Multicolor orbs with subtle parallax */}
      <div className="orb orb-cyan w-[600px] h-[600px] top-[-15%] left-[-10%] opacity-80" style={{ transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)` }}></div>
      <div className="orb orb-purple w-[500px] h-[500px] bottom-[-10%] right-[-8%] opacity-70" style={{ transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)` }}></div>
      <div className="orb orb-blue w-[400px] h-[400px] top-[40%] right-[5%] opacity-60" style={{ transform: `translate(${mouse.x * 0.4}px, ${mouse.y * 0.4}px)` }}></div>
      <div className="orb orb-pink w-[350px] h-[350px] bottom-[20%] left-[10%] opacity-50" style={{ transform: `translate(${mouse.x * -0.2}px, ${mouse.y * -0.2}px)` }}></div>
      {/* Fog */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-void via-void/80 to-transparent"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-[2.5s] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

        {/* Production Credit Block */}
        <motion.div
          className="mt-10 md:mt-12 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-c-white/70 font-mono mb-3">A Production By</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.15em] mb-3">
            <span className="text-c-white">KAAY</span>{' '}
            <span className="text-c-cyan" style={{ textShadow: '0 0 15px rgba(0,229,255,0.6), 0 0 30px rgba(0,229,255,0.3), 0 0 60px rgba(0,229,255,0.15)' }}>VISION</span>
          </h2>

          {/* Decorative line with glowing dot */}
          <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-c-cyan/30"></div>
            <div className="w-2 h-2 rounded-full bg-c-cyan shadow-neon-cyan animate-pulse-slow"></div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-c-cyan/30"></div>
          </div>
        </motion.div>

        {/* Poster with rainbow border */}
        <motion.div
          className="relative inline-block mb-10 animate-float-slow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="rainbow-border p-[2px] rounded-2xl">
            <img src="https://i.imgur.com/162JyPV.jpeg" alt="The Rift Poster" className="w-full max-w-xs sm:max-w-sm rounded-2xl shadow-glass"/>
          </div>
        </motion.div>

        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-c-white mb-4 animate-glow"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={loaded ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          THE RIFT
        </motion.h1>

        <motion.div
          className="max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="font-sinhala text-xl md:text-2xl lg:text-[1.7rem] font-medium leading-relaxed text-c-white/90 tracking-wide"
             style={{ textShadow: '0 0 12px rgba(0,229,255,0.35), 0 0 25px rgba(0,229,255,0.15)' }}>
            ගවේෂණය අවසන්...
          </p>
          <p className="font-sinhala text-xl md:text-2xl lg:text-[1.7rem] font-medium leading-relaxed text-c-white/90 tracking-wide mt-1"
             style={{ textShadow: '0 0 12px rgba(0,229,255,0.35), 0 0 25px rgba(0,229,255,0.15)' }}>
            දැන් ඇත්තේ ජීවිතය බේරා ගැනීමේ සටනක් පමණයි!
          </p>
          <p className="font-display text-[11px] md:text-xs uppercase tracking-[0.3em] text-c-cyan/70 mt-4"
             style={{ textShadow: '0 0 8px rgba(0,229,255,0.25)' }}>
            Artificial Sci-Fi Horror Sinhala Film
          </p>
        </motion.div>

        <motion.p
          className="text-sm font-heading font-light tracking-[0.25em] mb-10 uppercase text-c-white/60"
          style={{ textShadow: '0 0 10px rgba(0,229,255,0.2), 0 0 20px rgba(0,229,255,0.08)' }}
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Some places are never meant to be explored.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <a href="#trailer" className="btn-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Watch Trailer
          </a>
          <a href="#about" className="btn-secondary">Explore The Film</a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 text-c-muted/60"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 2.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="font-mono text-xs">2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-c-cyan/50 animate-pulse-slow"></span>
          <span className="font-mono text-xs">SCI-FI HORROR</span>
          <span className="w-1.5 h-1.5 rounded-full bg-c-purple/50 animate-pulse-slow"></span>
          <span className="font-mono text-xs">AI</span>
        </motion.div>
      </div>
    </section>
  )
}
