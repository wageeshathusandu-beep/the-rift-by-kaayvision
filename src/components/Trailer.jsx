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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rift-dark via-rift-blue/20 to-rift-dark"></div>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rift-neon/5 rounded-full blur-[120px]"></div>

      <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Title */}
        <h2 className="section-heading">Official Trailer</h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">Experience the terror in high definition</p>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden border border-rift-neon/30 shadow-[0_0_60px_rgba(0,212,255,0.1),0_0_120px_rgba(123,47,247,0.05)] group">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rift-neon/60 to-transparent z-10"></div>

          {/* Responsive YouTube Embed */}
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/2URGQBTpOf4"
              title="The Rift - Official Trailer"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rift-neon-purple/60 to-transparent z-10"></div>
        </div>

        {/* Below trailer info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-rift-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Official Trailer
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-rift-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            HD Quality
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-rift-neon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#0a0a0f" />
            </svg>
            Watch on YouTube
          </span>
        </div>
      </div>
    </section>
  )
}
