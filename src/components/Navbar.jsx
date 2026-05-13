import { useState, useEffect, useRef } from 'react'
import BrandLogo from './BrandLogo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['home', 'trailer', 'about', 'cast', 'gallery', 'upcoming', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Trailer', href: '#trailer' },
    { label: 'About', href: '#about' },
    { label: 'Cast', href: '#cast' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Upcoming Projects', href: '#upcoming' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
      scrolled 
        ? 'bg-rift-darker/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(139,0,0,0.1)]' 
        : 'bg-rift-darker/70 backdrop-blur-xl'
    } border-b border-rift-blood/10`}>

      {/* Animated top neon energy line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(139,0,0,0.3) 30%, rgba(0,212,255,0.25) 50%, rgba(139,0,0,0.3) 70%, transparent 95%)' }}></div>
        <div className="nav-energy-sweep absolute top-0 left-0 h-full w-24" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.8), rgba(255,255,255,0.4), rgba(0,212,255,0.8), transparent)' }}></div>
      </div>

      {/* Bottom accent energy line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden opacity-40">
        <div className="nav-energy-sweep-reverse absolute top-0 right-0 h-full w-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,0,0,0.7), rgba(255,100,100,0.3), transparent)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo - unchanged */}
          <a href="#" className="relative group z-10">
            <BrandLogo size="nav" />
          </a>

          {/* Desktop Nav - cinematic animated */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 relative">
            {/* Background energy pulse behind links */}
            <div className="absolute inset-0 -inset-x-4 overflow-hidden pointer-events-none">
              <div className="nav-bg-pulse absolute top-1/2 -translate-y-1/2 left-0 right-0 h-8 opacity-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.04), transparent 70%)' }}></div>
            </div>

            {links.map((link, index) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  className={`nav-item-cinematic relative font-ui text-[10px] py-2 transition-all duration-300 ${
                    isActive 
                      ? 'text-rift-neon' 
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {/* Scan pulse on hover */}
                  <span className={`absolute inset-0 rounded transition-opacity duration-200 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.06), transparent 70%)' }}></span>

                  {/* Link text with glitch data attribute */}
                  <span className="relative z-10 nav-text-glitch" data-text={link.label}>
                    {link.label}
                  </span>

                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] rounded-full transition-all duration-400 ${
                    isActive 
                      ? 'w-full bg-gradient-to-r from-transparent via-rift-neon to-transparent shadow-[0_0_6px_rgba(0,212,255,0.5)]' 
                      : hoveredIndex === index 
                        ? 'w-full bg-gradient-to-r from-transparent via-rift-blood-light/70 to-transparent shadow-[0_0_4px_rgba(139,0,0,0.4)]' 
                        : 'w-0 bg-rift-neon/50'
                  }`}></span>

                  {/* Active glow dot */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rift-neon shadow-[0_0_4px_rgba(0,212,255,0.8)] nav-active-dot"></span>
                  )}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-rift-blood-light transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-rift-blood/10 bg-rift-darker/95 backdrop-blur-2xl">
            {links.map((link, index) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 font-nav font-medium uppercase tracking-[0.12em] transition-all duration-300 border-b border-white/3 last:border-0 hover:pl-2 ${
                    isActive 
                      ? 'text-rift-neon border-rift-neon/20 pl-2' 
                      : 'text-gray-400 hover:text-rift-neon hover:border-rift-neon/20'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {isActive && <span className="inline-block w-1.5 h-1.5 rounded-full bg-rift-neon mr-2 shadow-[0_0_4px_rgba(0,212,255,0.6)]"></span>}
                  {link.label}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
