import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
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
    <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${scrolled ? 'bg-void/90 backdrop-blur-xl border-b border-c-purple/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-c-cyan animate-pulse-slow"></div>
            <span className="font-display text-lg tracking-[0.2em] text-c-white group-hover:text-c-cyan transition-colors duration-300">THE RIFT</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => <a key={l.label} href={l.href} className="nav-link">{l.label}</a>)}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-c-muted hover:text-c-cyan transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-c-purple/10 bg-void/95 backdrop-blur-xl rounded-b-xl">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setIsOpen(false)} className="block py-3 px-4 font-heading uppercase tracking-widest text-xs text-c-muted hover:text-c-cyan transition-colors border-b border-c-purple/5 last:border-0">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
