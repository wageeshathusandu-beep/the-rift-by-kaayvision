import { useEffect, useState } from 'react'

const LETTERS_KAAY = ['K', 'A', 'A', 'Y']
const LETTERS_VISION = ['V', 'I', 'S', 'I', 'O', 'N']

export default function BrandLogo({ size = 'lg', className = '' }) {
  const [revealed, setRevealed] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const revealTimer = setTimeout(() => setRevealed(true), 200)
    const introTimer = setTimeout(() => setIntroComplete(true), 2000)
    return () => {
      clearTimeout(revealTimer)
      clearTimeout(introTimer)
    }
  }, [])

  const sizeClasses = {
    sm: 'text-sm md:text-base',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-4xl',
  }

  return (
    <span className={`brand-logo relative inline-block ${className} ${revealed ? 'brand-loaded' : 'opacity-0'}`}>
      {/* Particle sparks around letters */}
      <span className="brand-particles absolute inset-[-8px] pointer-events-none overflow-visible">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-brand-spark"
            style={{
              width: `${1 + (i % 2)}px`,
              height: `${1 + (i % 2)}px`,
              background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#ff1a1a' : '#ffffff',
              left: `${8 + i * 9}%`,
              top: `${15 + (i % 5) * 16}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.2}s`,
              boxShadow: i % 3 === 0
                ? '0 0 3px #00d4ff, 0 0 6px #00d4ff'
                : i % 3 === 1
                ? '0 0 3px #ff1a1a, 0 0 6px #ff1a1a'
                : '0 0 2px #fff',
            }}
          />
        ))}
      </span>

      {/* Main text container */}
      <span className={`brand-text font-cinematic font-black uppercase tracking-[0.12em] ${sizeClasses[size]} relative inline-block`}>

        {/* Chromatic aberration layer - red (left offset) */}
        <span className="brand-chromatic-red absolute inset-0 pointer-events-none" aria-hidden="true">
          <span className="inline-flex">
            {LETTERS_KAAY.map((l, i) => (
              <span key={`cr-${i}`} className="inline-block text-red-500/20">{l}</span>
            ))}
          </span>
          {' '}
          <span className="inline-flex">
            {LETTERS_VISION.map((l, i) => (
              <span key={`cr-v-${i}`} className="inline-block text-red-500/25">{l}</span>
            ))}
          </span>
        </span>

        {/* Chromatic aberration layer - blue (right offset) */}
        <span className="brand-chromatic-blue absolute inset-0 pointer-events-none" aria-hidden="true">
          <span className="inline-flex">
            {LETTERS_KAAY.map((l, i) => (
              <span key={`cb-${i}`} className="inline-block text-cyan-400/20">{l}</span>
            ))}
          </span>
          {' '}
          <span className="inline-flex">
            {LETTERS_VISION.map((l, i) => (
              <span key={`cb-v-${i}`} className="inline-block text-cyan-400/25">{l}</span>
            ))}
          </span>
        </span>

        {/* Glitch layer 1 - red slice */}
        <span className="brand-glitch-layer absolute inset-0 animate-brand-glitch-1 pointer-events-none" aria-hidden="true">
          <span className="text-rift-blood-light/25">KAAY </span>
          <span className="text-rift-blood-light/30">VISION</span>
        </span>

        {/* Glitch layer 2 - blue slice */}
        <span className="brand-glitch-layer absolute inset-0 animate-brand-glitch-2 pointer-events-none" aria-hidden="true">
          <span className="text-rift-neon/25">KAAY </span>
          <span className="text-rift-neon/30">VISION</span>
        </span>

        {/* Main visible text - letter-by-letter reveal */}
        <span className="relative z-10 animate-brand-flicker">
          <span className="inline-flex brand-text-main">
            {LETTERS_KAAY.map((letter, i) => (
              <span
                key={`k-${i}`}
                className="inline-block brand-letter"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0) scaleY(1)' : 'translateY(8px) scaleY(0.3)',
                  transition: `opacity 0.4s ease ${i * 0.1}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="inline-block" style={{ width: '0.3em' }}> </span>
          <span className="inline-flex brand-text-glow">
            {LETTERS_VISION.map((letter, i) => (
              <span
                key={`v-${i}`}
                className="inline-block brand-letter"
                style={{
                  animationDelay: `${(i + 4) * 0.1}s`,
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? 'translateY(0) scaleY(1)' : 'translateY(8px) scaleY(0.3)',
                  transition: `opacity 0.4s ease ${(i + 4) * 0.1}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${(i + 4) * 0.1}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>

        {/* Electric scan line passing through text */}
        <span className="brand-scan-line absolute inset-0 pointer-events-none overflow-hidden z-20">
          <span className="brand-scan-beam absolute top-0 bottom-0 w-[2px]"></span>
        </span>
      </span>

      {/* Glow pulse background aura */}
      <span className="absolute inset-[-4px] -z-10 rounded-lg blur-xl bg-gradient-to-r from-rift-neon/8 via-transparent to-rift-blood/8 animate-brand-glow-pulse"></span>

      {/* Bottom reflection line */}
      <span className="absolute -bottom-[2px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-rift-neon/30 to-transparent animate-brand-glow-pulse"></span>
    </span>
  )
}
