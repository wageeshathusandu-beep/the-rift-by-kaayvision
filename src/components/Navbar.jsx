import { useState, useEffect } from 'react'

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
    { label: 'Free Gift', href: '#free-gift' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      scrolled
        ? 'bg-[#030306]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
        : 'bg-[#030306]/70 backdrop-blur-md'
    } border-b border-rift-neon/[0.06]`}>
      {/* Glowing top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-50'}`} style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(0,180,216,0.2) 30%, rgba(0,212,255,0.5) 50%, rgba(0,180,216,0.2) 70%, transparent 90%)', boxShadow: '0 0 8px rgba(0,212,255,0.3)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a href="#" className="relative group z-10">
            <span className="font-cinematic font-black uppercase tracking-[0.12em] text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-white via-rift-neon to-rift-blood-light bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,212,255,0.3)]">THE RIFT</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link font-ui text-[10px] text-gray-400 hover:text-rift-neon transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-rift-neon transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.4)]"
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
          <div className="md:hidden py-4 border-t border-rift-neon/[0.08] bg-[#030306]/95 backdrop-blur-xl">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-nav font-medium uppercase tracking-[0.15em] text-sm text-gray-400 hover:text-rift-neon transition-all duration-300 border-b border-white/[0.03] last:border-0 hover:pl-3 hover:border-l-2 hover:border-l-rift-neon/40"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Bottom glow line when scrolled */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${scrolled ? 'opacity-40' : 'opacity-0'}`} style={{ background: 'linear-gradient(90deg, transparent 20%, rgba(139,0,0,0.3) 40%, rgba(0,212,255,0.15) 60%, rgba(139,0,0,0.3) 80%, transparent)' }}></div>
    </nav>
  )
}
