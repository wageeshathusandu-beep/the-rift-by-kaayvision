import { useState, useEffect } from 'react'
import BrandLogo from './BrandLogo'
import NavEnergy from './NavEnergy'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = ['Home', 'About', 'Cast', 'Gallery', 'Trailer', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 navbar-cinematic ${scrolled ? 'scrolled' : ''}`}>
      {/* Subtle horror red line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rift-blood/40 to-transparent"></div>

      {/* Cinematic Energy Effect - right of logo */}
      <NavEnergy />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Animated Brand Logo - main visual highlight */}
          <a href="#" className="relative group z-10">
            <BrandLogo size="nav" />
          </a>

          {/* Desktop Nav - with neon underline animation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link-cinematic font-ui text-[10px] text-gray-500 hover:text-rift-neon/90 transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-rift-blood-light transition-colors"
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
          <div className="md:hidden py-4 border-t border-rift-blood/10 animate-fade-in bg-rift-darker/95 backdrop-blur-xl">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-nav font-medium uppercase tracking-[0.12em] text-gray-400 hover:text-rift-neon transition-colors duration-300 border-b border-white/3 last:border-0"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
