import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = ['Home', 'About', 'Cast', 'Gallery', 'Trailer', 'Contact']

  return (
    <nav className="fixed top-0 w-full z-50 bg-rift-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="font-cinematic text-xl md:text-2xl font-black tracking-[0.15em] text-white drop-shadow-[0_0_8px_rgba(0,180,216,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(0,180,216,0.7)] transition-all duration-300">
              KAAY <span className="text-rift-glow drop-shadow-[0_0_10px_rgba(0,180,216,0.6)]">VISION</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-300 hover:text-rift-neon transition-colors duration-300 tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-rift-neon transition-colors"
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
          <div className="md:hidden py-4 border-t border-white/5 animate-fade-in">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-rift-neon transition-colors duration-300"
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
