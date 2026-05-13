import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="footer-cinematic py-10 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #050508, #020203)' }}>
      {/* Horror top divider - handled by footer-cinematic::before */}

      {/* Subtle fog */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-rift-blood/3 to-transparent opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <span className="text-rift-blood/40 text-sm">|</span>
            <span className="text-gray-600 text-sm font-body">The Rift Official</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-nav uppercase tracking-[0.12em] text-gray-600">
            <a href="#" className="hover:text-rift-blood-light transition-colors duration-300 hover:drop-shadow-[0_0_4px_rgba(139,0,0,0.4)]">Privacy Policy</a>
            <a href="#" className="hover:text-rift-blood-light transition-colors duration-300 hover:drop-shadow-[0_0_4px_rgba(139,0,0,0.4)]">Terms</a>
            <a href="#" className="hover:text-rift-neon transition-colors duration-300 hover:drop-shadow-[0_0_4px_rgba(0,212,255,0.4)]">Press Kit</a>
          </div>

          <p className="text-gray-700 text-xs font-body">
            &copy; 2025 KAAY VISION Productions. All rights reserved.
          </p>
        </div>

        {/* Bottom blood accent line */}
        <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-rift-blood/20 to-transparent"></div>
      </div>
    </footer>
  )
}
