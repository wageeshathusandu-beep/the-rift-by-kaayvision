import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Trailer', href: '#trailer' },
    { label: 'Story', href: '#synopsis' },
    { label: 'Cast', href: '#cast' },
    { label: 'Gallery', href: '#gallery' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${scrolled ? 'bg-sci-black/95 backdrop-blur-xl border-b border-sci-cyan/10 shadow-[0_4px_30px_rgba(0,240,255,0.05)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-sci-cyan animate-glow-pulse"></div>
            <span className="font-display text-2xl tracking-[0.15em] text-sci-white group-hover:text-sci-cyan transition-colors duration-300">THE RIFT</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </div>

          {/* Mobile button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-sci-muted hover:text-sci-cyan transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sci-cyan/10">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}
                className="block py-3 font-nav font-medium uppercase tracking-[0.15em] text-xs text-sci-muted hover:text-sci-cyan transition-colors duration-300 border-b border-sci-dim/20 last:border-0">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
