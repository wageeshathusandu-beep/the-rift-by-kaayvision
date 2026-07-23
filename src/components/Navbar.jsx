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
    { label: 'About', href: '#about' },
    { label: 'Cast', href: '#cast' },
    { label: 'Free Gift', href: '#free-gift' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-smooth ${scrolled ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-rift-amber/8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-[#050505]/80 backdrop-blur-sm border-b border-rift-metal/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="amber-dot group-hover:shadow-amber-glow transition-shadow duration-500"></div>
            <span className="font-display text-xl md:text-2xl tracking-[0.15em] text-rift-offwhite group-hover:text-white transition-colors duration-300">THE RIFT</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="nav-link-ind">{link.label}</a>
            ))}
          </div>

          {/* Mobile button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-rift-metal hover:text-rift-offwhite transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-smooth ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-rift-metal/10">
            {links.map((link, i) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}
                className="block py-2.5 font-nav font-medium uppercase tracking-[0.15em] text-xs text-rift-metal hover:text-rift-amber transition-all duration-300 border-b border-rift-metal/5 last:border-0 hover:pl-2"
                style={{ transitionDelay: `${i * 0.05}s` }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
