export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden bg-void">
      <div className="absolute top-0 left-0 right-0 alien-divider"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-alien-cyan animate-pulse-slow"></div>
            <span className="font-display text-sm tracking-[0.2em] text-soft-white">THE RIFT</span>
            <span className="text-muted/30">|</span>
            <span className="text-muted/60 text-xs font-body">A KAAY VISION Film</span>
          </div>

          <div className="flex items-center gap-5 text-[10px] font-mono uppercase tracking-widest text-muted/50">
            <a href="#" className="hover:text-alien-cyan transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-alien-cyan transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-alien-cyan transition-colors duration-300">Press Kit</a>
          </div>

          <p className="text-muted/40 text-xs font-mono">&copy; 2026 KAAY VISION</p>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-muted/10 to-transparent"></div>
        <p className="text-center mt-5 tech-label">END TRANSMISSION // CONNECTION SEVERED</p>
      </div>
    </footer>
  )
}
