import { useState } from 'react'

export default function FreeGift() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="free-gift" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rift-darker via-[#050510] to-rift-darker"></div>

      {/* Static ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-rift-neon/4 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rift-blood/4 rounded-full blur-[120px]"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 horror-divider"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — always visible, no animation gating */}
        <div className="text-center mb-14">
          <p className="text-rift-blood-light/60 text-[10px] font-cinematic tracking-[0.4em] uppercase mb-3">
            Free Gift
          </p>
          <h2 className="section-heading">The Rift Mobile Wallpaper</h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto font-body text-lg tracking-wide">
            Download an exclusive mobile wallpaper from The Rift.
          </p>
        </div>

        {/* Wallpaper Preview — 9:16 portrait, centered, always visible */}
        <div className="flex justify-center mb-14">
          <div className="group relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px]">
            {/* Glow behind frame */}
            <div className="absolute -inset-4 bg-gradient-to-b from-rift-blood/10 via-rift-neon/5 to-rift-blood/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

            {/* Cinematic frame */}
            <div className="relative rounded-2xl overflow-hidden border border-rift-blood/25 group-hover:border-rift-neon/40 shadow-[0_0_30px_rgba(0,0,0,0.6),0_0_60px_rgba(139,0,0,0.15)] group-hover:shadow-[0_0_40px_rgba(0,212,255,0.15),0_0_60px_rgba(139,0,0,0.2)] transition-all duration-700 group-hover:scale-[1.02]">
              {/* 9:16 aspect ratio */}
              <div className="aspect-[9/16] bg-gradient-to-br from-[#0a0a12] to-rift-darker relative overflow-hidden">
                {imgError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <svg className="w-12 h-12 text-rift-blood/40 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-gray-500 text-sm font-body">Wallpaper preview unavailable</p>
                  </div>
                ) : (
                  <img
                    src="/free-gift/mobile-wallpaper-preview.jpg"
                    alt="The Rift mobile wallpaper preview"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                )}

                {/* Subtle overlay */}
                {!imgError && (
                  <div className="absolute inset-0 bg-gradient-to-t from-rift-darker/30 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500"></div>
                )}
              </div>

              {/* Film strip borders */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rift-blood/40 via-rift-neon/30 to-rift-blood/40 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rift-blood/40 via-rift-neon/30 to-rift-blood/40 z-10"></div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-rift-neon/40 rounded-tl-2xl z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-rift-neon/40 rounded-tr-2xl z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-rift-blood/50 rounded-bl-2xl z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-rift-blood/50 rounded-br-2xl z-10"></div>
            </div>
          </div>
        </div>

        {/* Download Button — always visible */}
        <div className="text-center">
          <a
            href="https://drive.google.com/drive/folders/161kz6guAHXy49lCeqrRccabNDi3yEp0U?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full font-nav font-bold uppercase tracking-[0.15em] text-sm md:text-base bg-gradient-to-r from-rift-neon to-rift-glow text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.4),0_0_60px_rgba(0,212,255,0.15)]"
          >
            {/* Download icon */}
            <svg
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300"
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
            <span>Download Mobile Wallpaper</span>
          </a>
        </div>
      </div>

      {/* Bottom cinematic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rift-darker to-transparent"></div>
    </section>
  )
}
