import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[99998] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00e5ff, #7c4dff, #e040fb)',
      }}
    />
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[9990] w-12 h-12 rounded-full bg-abyss/80 border border-c-cyan/30 backdrop-blur-md flex items-center justify-center hover:border-c-cyan/60 hover:shadow-neon-cyan transition-all duration-300 group"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 text-c-cyan/70 group-hover:text-c-cyan transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
