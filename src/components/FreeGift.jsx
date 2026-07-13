import { useState } from 'react'

export default function FreeGift() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="free-gift" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#030308] to-rift-darker"></div>

      {/* Fog layer */}
      <div className="fog-layer"></div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-rift-neon/[0.03] rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rift-blood/[0.03] rounded-full blur-[120px]"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-rift-toxic/60 text-[10px] font-cinematic tracking-[0.4em] uppercase mb-3">
            Free Gift
          </p>
          <h2 className="section-heading">The Rift Mobile Wallpaper</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto font-body text-lg tracking-wide">
            Download an exclusive mobile wallpaper from The Rift.
          </p>
        </div>

        {/* Wallpaper Preview — futuristic display panel */}
        <div className="flex justify-center mb-14">
          <div className="group relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px]">
            {/* Glow behind frame */}
            <div className="absolute -inset-6 bg-gradient-to-b from-rift-neon/[0.06] via-rift-toxic/[0.03] to-rift-neon/[0.04] rounded-2xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Futuristic display panel frame */}
            <div className="relative rounded-xl overflow-hidden border border-rift-neon/15 group-hover:border-rift-neon/35 shadow-[0_0_40px_rgba(0,0,0,0.8),0_0_15px_rgba(0,212,255,0.05)] group-hover:shadow-[0_0_50px_rgba(0,212,255,0.1),0_0_80px_rgba(0,0,0,0.7)] transition-all duration-700 group-hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, rgba(4,8,16,0.95), rgba(2,2,4,0.98))' }}>

              {/* Top display bar */}
              <div className="h-6 bg-gradient-to-r from-rift-charcoal via-[#0a0f18] to-rift-charcoal border-b border-rift-neon/10 flex items-center justify-between px-3">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-rift-toxic/50"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-rift-neon/30"></div>
                </div>
                <span className="text-[7px] font-cinematic text-rift-neon/40 tracking-[0.3em] uppercase">Display</span>
                <div className="w-4 h-[1px] bg-rift-neon/20"></div>
              </div>

              {/* 9:16 aspect ratio */}
              <div className="aspect-[9/16] relative overflow-hidden">
                {imgError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-[#0a0a12] to-rift-darker">
                    <svg className="w-12 h-12 text-rift-steel/30 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-gray-600 text-sm font-body">Wallpaper preview unavailable</p>
                  </div>
                ) : (
                  <img
                    src="/free-gift/mobile-wallpaper-preview.jpg"
                    alt="The Rift mobile wallpaper preview"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                )}

                {/* Scanline overlay on image */}
                {!imgError && <div className="absolute inset-0 scanline-overlay pointer-events-none"></div>}

                {/* Subtle gradient overlay */}
                {!imgError && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030306]/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
                )}
              </div>

              {/* Bottom status bar */}
              <div className="h-5 bg-gradient-to-r from-rift-charcoal via-[#0a0f18] to-rift-charcoal border-t border-rift-neon/10 flex items-center justify-center">
                <span className="text-[7px] font-cinematic text-rift-neon/30 tracking-[0.2em]">9:16 • MOBILE</span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-6 left-0 w-6 h-6 border-t border-l border-rift-neon/30 z-10"></div>
              <div className="absolute top-6 right-0 w-6 h-6 border-t border-r border-rift-neon/30 z-10"></div>
              <div className="absolute bottom-5 left-0 w-6 h-6 border-b border-l border-rift-blood/30 z-10"></div>
              <div className="absolute bottom-5 right-0 w-6 h-6 border-b border-r border-rift-blood/30 z-10"></div>
            </div>
          </div>
        </div>

        {/* Download Button — glowing metallic */}
        <div className="text-center">
          <a
            href="https://drive.google.com/drive/folders/161kz6guAHXy49lCeqrRccabNDi3yEp0U?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-lg font-nav font-bold uppercase tracking-[0.15em] text-sm md:text-base transition-all duration-300 hover:scale-105 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(0,180,216,0.9), rgba(0,212,255,0.8))', boxShadow: '0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1), inset 0 1px 0 rgba(255,255,255,0.15)' }}
          >
            {/* Download icon */}
            <svg
              className="w-5 h-5 text-black group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span className="text-black font-bold">Download Mobile Wallpaper</span>
          </a>
        </div>
      </div>

      {/* Bottom cinematic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-darker to-transparent"></div>
    </section>
  )
}
