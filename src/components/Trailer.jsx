import { useEffect, useRef, useState } from 'react'

export default function Trailer() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="trailer" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-rift-dark via-rift-blue/20 to-rift-dark"></div>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rift-neon/5 rounded-full blur-[100px]"></div>

      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-heading">Official Trailer</h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto font-body text-lg tracking-wide">Experience the terror in high definition</p>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden neon-border shadow-2xl shadow-rift-neon/10">
          <div className="aspect-video bg-gradient-to-br from-rift-deep to-rift-dark flex items-center justify-center relative">
            {/* YouTube placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Play button */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rift-neon/20 border-2 border-rift-neon/50 flex items-center justify-center hover:bg-rift-neon/30 hover:scale-110 transition-all duration-300 cursor-pointer group">
                  <svg className="w-8 h-8 text-rift-neon ml-1 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm font-nav uppercase tracking-[0.2em]">YouTube Video Placeholder</p>
                <p className="text-gray-600 text-xs mt-2 font-body">Replace with your YouTube embed URL</p>
              </div>
            </div>

            {/* Decorative film strip borders */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rift-neon/30 via-rift-neon-purple/30 to-rift-neon/30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-rift-neon/30 via-rift-neon-purple/30 to-rift-neon/30"></div>
          </div>
        </div>

        {/* Below trailer info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400 font-nav uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-rift-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Duration: 2:45
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-rift-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Official Teaser
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-rift-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2m0 2v2m0-2H5.5a2.5 2.5 0 00-2.5 2.5v0A2.5 2.5 0 005.5 9H7m0-5h2m0 0V2m0 2v2m0-2h2.5A2.5 2.5 0 0114 6.5v0A2.5 2.5 0 0111.5 9H10" />
            </svg>
            4K Ultra HD
          </span>
        </div>
      </div>
    </section>
  )
}
