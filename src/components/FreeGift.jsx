import { useState } from 'react'

export default function FreeGift() {
  const [mobileImgError, setMobileImgError] = useState(false)
  const [pcImgError, setPcImgError] = useState(false)

  return (
    <section id="free-gift" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-[#060610] to-[#050507]"></div>
      <div className="absolute top-0 left-0 right-0 archive-divider"></div>

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-rift-neon/3 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-0 w-[250px] h-[250px] bg-rift-red/4 rounded-full blur-[100px]"></div>

      <span className="absolute top-6 left-4 md:left-8 tech-label">ARCHIVE FILE 005 // RECOVERED MEDIA</span>
      <span className="absolute top-6 right-4 md:right-8 tech-label flex items-center gap-1.5"><span className="amber-dot"></span> DOWNLOAD READY</span>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="tech-label mb-3">Free Gift</p>
          <h2 className="section-heading mb-3">The Rift Wallpapers</h2>
          <p className="text-rift-metal font-body text-lg tracking-wide">Download exclusive wallpapers from The Rift.</p>
        </div>

        {/* Single centered wallpaper preview */}
        <div className="flex flex-col items-center">
          {/* Mobile preview panel - centered */}
          <div className="group relative w-full max-w-[280px] sm:max-w-[300px] mb-10">
            <div className="ind-card p-0 overflow-hidden">
              {/* Top bar */}
              <div className="h-7 bg-[#060610] border-b border-rift-neon/10 flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                  <span className="amber-dot"></span>
                  <span className="tech-label">RECOVERED MEDIA</span>
                </div>
                <span className="tech-label">9:16</span>
              </div>

              {/* 9:16 Image */}
              <div className="aspect-[9/16] relative bg-[#060610] scanlines">
                {mobileImgError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <svg className="w-10 h-10 text-rift-neon/15 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="tech-label">File unavailable</p>
                  </div>
                ) : (
                  <img src="/free-gift/mobile-wallpaper-preview.jpg" alt="The Rift mobile wallpaper preview"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    onError={() => setMobileImgError(true)} />
                )}
              </div>

              {/* Bottom bar */}
              <div className="h-6 bg-[#060610] border-t border-rift-neon/10 flex items-center justify-center">
                <span className="tech-label">RES: 1080x1920 // FORMAT: JPG</span>
              </div>
            </div>
          </div>

          {/* Download buttons - centered below */}
          <a href="https://drive.google.com/drive/folders/161kz6guAHXy49lCeqrRccabNDi3yEp0U?usp=sharing"
            target="_blank" rel="noopener noreferrer" className="btn-industrial mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Mobile Wallpaper
          </a>

          <a href="https://drive.google.com/uc?export=download&id=1zuSklTnXTTC6hZwwzK5fcUB3p_D1aWRF"
            className="btn-industrial" download>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Desktop Wallpapers
          </a>
        </div>
      </div>
    </section>
  )
}
