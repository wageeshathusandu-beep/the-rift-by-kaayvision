import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const sections = ['home', 'trailer', 'about', 'cast', 'free-gift', 'upcoming', 'ticket-booking', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const links = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Trailer', href: '#trailer', id: 'trailer' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Crew & Cast', href: '#cast', id: 'cast' },
    { label: 'Free Gift', href: '#free-gift', id: 'free-gift' },
    { label: 'Our Projects', href: '#upcoming', id: 'upcoming' },
    { label: 'Tickets', href: '#ticket-booking', id: 'ticket-booking' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 w-full z-[9999] transition-all duration-700 ease-out ${scrolled ? 'bg-void/50 backdrop-blur-xl border-b border-c-cyan/8 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-c-cyan animate-pulse-slow"></div>
            <span className="font-display text-lg tracking-[0.2em] text-c-white group-hover:text-c-cyan transition-colors duration-300">THE RIFT</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-link relative ${activeSection === l.id ? 'text-c-cyan' : ''}`}
              >
                {l.label}
                {activeSection === l.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-[6px] left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-c-cyan via-c-purple to-c-magenta shadow-[0_0_8px_rgba(0,229,255,0.5)]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-c-muted hover:text-c-cyan transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-c-purple/10 bg-void/95 backdrop-blur-xl rounded-b-xl">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className={`block py-3 px-4 font-heading uppercase tracking-widest text-xs transition-colors border-b border-c-purple/5 last:border-0 ${activeSection === l.id ? 'text-c-cyan' : 'text-c-muted hover:text-c-cyan'}`}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
