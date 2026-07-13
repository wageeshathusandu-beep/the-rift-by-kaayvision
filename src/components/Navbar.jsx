import { useState, useEffect } from 'react'
import NavEnergy from './NavEnergy'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
    { label: 'Free Gift', href: '#free-gift' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
      scrolled 
        ? 'bg-rift-darker/98 shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
        : 'bg-rift-darker/90'
    } border-b border-rift-blood/10`}>
      {/* Animated top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${scrolled ? 'opacity-100' : 'opacity-60'}`} style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(139,0,0,0.4) 30%, rgba(0,212,255,0.3) 50%, rgba(139,0,0,0.4) 70%, transparent 95%)' }}></div>

      {/* Cinematic Energy Effect */}
      <NavEnergy />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Animated Brand Logo */}
          <a href="#" className="relative group z-10">
            <span className="font-cinematic font-black uppercase tracking-[0.12em] text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-white via-rift-neon to-rift-blood-light bg-clip-text text-transparent">THE RIFT</span>
            </span>
          </a>

          {/* Desktop Nav with animated underlines */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link font-ui text-[10px] text-gray-300 hover:text-white transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
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
          <div className="md:hidden py-4 border-t border-rift-blood/10 bg-rift-darker/98">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-nav font-medium uppercase tracking-[0.12em] text-gray-300 hover:text-white transition-all duration-300 border-b border-white/5 last:border-0 hover:pl-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
