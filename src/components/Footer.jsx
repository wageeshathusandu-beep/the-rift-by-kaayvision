export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden bg-sci-black">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 glow-divider"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-sci-cyan animate-glow-pulse"></div>
            <span className="font-display text-lg tracking-[0.12em] text-sci-white">THE RIFT</span>
            <span className="text-sci-dim">|</span>
            <span className="text-sci-muted text-xs font-body">A KAAY VISION Film</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.15em] text-sci-muted/60">
            <a href="#" className="hover:text-sci-cyan transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-sci-cyan transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-sci-cyan transition-colors duration-300">Press Kit</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { label: 'TikTok', href: 'https://www.tiktok.com/@theriftofficial0', d: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.1V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52V7.5a4.85 4.85 0 01-1-.81z' },
              { label: 'YouTube', href: 'https://www.youtube.com/@theriftsrilankanscifimovie', d: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              { label: 'Instagram', href: 'https://www.instagram.com/the_rift_official0/', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-sci-dim/30 flex items-center justify-center hover:border-sci-cyan/50 hover:bg-sci-cyan/5 transition-all duration-300 group">
                <svg className="w-3.5 h-3.5 text-sci-muted group-hover:text-sci-cyan transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-sci-dim/20 to-transparent"></div>
        <p className="text-center mt-6 text-sci-muted/40 text-xs font-mono">&copy; 2026 KAAY VISION Productions. All rights reserved.</p>
      </div>
    </footer>
  )
}
