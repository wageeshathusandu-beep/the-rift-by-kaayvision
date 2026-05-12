export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="title-cinematic text-sm text-white">
              KAAY <span className="text-rift-glow neon-glow">VISION</span>
            </span>
            <span className="text-gray-600 text-sm">|</span>
            <span className="text-gray-500 text-sm font-body">The Rift Official</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-nav uppercase tracking-[0.12em] text-gray-500">
            <a href="#" className="hover:text-rift-neon transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rift-neon transition-colors">Terms</a>
            <a href="#" className="hover:text-rift-neon transition-colors">Press Kit</a>
          </div>

          <p className="text-gray-600 text-xs font-body">
            &copy; 2025 KAAY VISION Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
