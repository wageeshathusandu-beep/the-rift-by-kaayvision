import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={ref} className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #030306, #010102)' }}>
      {/* Sci-fi top divider */}
      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      {/* Atmospheric accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-rift-neon/[0.02] rounded-full blur-[60px]"></div>

      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-cinematic font-black uppercase tracking-[0.12em] text-sm md:text-base">
              <span className="bg-gradient-to-r from-white via-rift-neon to-rift-blood-light bg-clip-text text-transparent">THE RIFT</span>
            </span>
            <span className="text-rift-neon/20 text-sm">|</span>
            <span className="text-gray-500 text-sm font-body">A KAAY VISION Film</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-nav uppercase tracking-[0.12em] text-gray-500">
            <a href="#" className="footer-link hover:text-rift-blood-light transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="footer-link hover:text-rift-blood-light transition-colors duration-300">Terms</a>
            <a href="#" className="footer-link hover:text-rift-neon transition-colors duration-300">Press Kit</a>
          </div>

          <p className="text-gray-500 text-xs font-body">
            &copy; 2026 KAAY VISION Productions. All rights reserved.
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(0,180,216,0.15) 30%, rgba(0,212,255,0.3) 50%, rgba(0,180,216,0.15) 70%, transparent 90%)' }}></div>
      </div>
    </footer>
  )
}
