import { useEffect, useState } from 'react'

export default function BrandLogo({ size = 'lg', className = '' }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const sizeClasses = {
    sm: 'text-sm md:text-base',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-4xl',
  }

  return (
    <span className={`brand-logo relative inline-block ${className} ${loaded ? 'brand-loaded' : 'opacity-0'}`}>
      {/* Particle sparks around text */}
      <span className="brand-particles absolute inset-0 pointer-events-none overflow-visible">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full animate-brand-spark"
            style={{
              background: i % 2 === 0 ? '#00d4ff' : '#ff1a1a',
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${2.5 + i * 0.3}s`,
            }}
          />
        ))}
      </span>

      {/* Main text with glitch layers */}
      <span className={`brand-text font-cinematic font-black uppercase tracking-[0.12em] ${sizeClasses[size]} relative inline-block`}>
        {/* Glitch layer 1 - red offset */}
        <span className="brand-glitch-1 absolute inset-0 text-rift-blood-light/30 animate-brand-glitch-1" aria-hidden="true">
          KAAY <span className="text-rift-blood-light/40">VISION</span>
        </span>

        {/* Glitch layer 2 - blue offset */}
        <span className="brand-glitch-2 absolute inset-0 text-rift-neon/30 animate-brand-glitch-2" aria-hidden="true">
          KAAY <span className="text-rift-neon/40">VISION</span>
        </span>

        {/* Main visible text */}
        <span className="relative z-10 animate-brand-flicker">
          <span className="text-white brand-text-main">KAAY</span>{' '}
          <span className="text-rift-glow brand-text-glow">VISION</span>
        </span>
      </span>

      {/* Glow pulse background */}
      <span className="absolute inset-0 -z-10 rounded-full blur-xl bg-gradient-to-r from-rift-neon/10 via-transparent to-rift-blood/10 animate-brand-glow-pulse"></span>
    </span>
  )
}
