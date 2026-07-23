import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Trailer', href: '#trailer' },
    { label: 'About', href: '#about' },
    { label: 'Cast', href: '#cast' },
    { label: 'Free Gift', href: '#free-gift' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${scrolled ? 'bg-void/90 backdrop-blur-xl border-b border-alien-cyan/8 shadow-[0_4px_30px_rgba(0,0,0,0.6)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-alien-cyan animate-pulse-slow shadow-cyan"></div>
            <span className="font-display text-lg tracking-[0.2em] text-soft-white group-hover:text-alien-cyan transition-colors duration-300">THE RIFT</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </div>

          {/* Mobile button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-muted hover:text-alien-cyan transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-alien-cyan/10 bg-void/95 backdrop-blur-xl rounded-b-lg">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}
                className="block py-3 px-4 font-heading font-medium uppercase tracking-widest text-xs text-muted hover:text-alien-cyan hover:bg-alien-cyan/5 transition-all duration-300 border-b border-alien-cyan/5 last:border-0">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
