export default function Footer() {
  return (
    <footer className="py-10 relative overflow-hidden bg-[#030303]">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 archive-divider"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="amber-dot"></div>
            <span className="font-display text-sm tracking-[0.12em] text-rift-offwhite">THE RIFT</span>
            <span className="text-rift-metal/30">|</span>
            <span className="text-rift-metal/60 text-xs font-body">A KAAY VISION Film</span>
          </div>

          <div className="flex items-center gap-5 text-[10px] font-mono uppercase tracking-[0.15em] text-rift-metal/50">
            <a href="#" className="hover:text-rift-amber transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rift-amber transition-colors">Terms</a>
            <a href="#" className="hover:text-rift-amber transition-colors">Press Kit</a>
          </div>

          <p className="text-rift-metal/40 text-xs font-mono">&copy; 2026 KAAY VISION Productions. All rights reserved.</p>
        </div>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-rift-metal/10 to-transparent"></div>
        <p className="text-center mt-4 tech-label">END TRANSMISSION // SESSION CLOSED</p>
      </div>
    </footer>
  )
}
