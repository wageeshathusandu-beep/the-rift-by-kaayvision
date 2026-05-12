export default function BrandLogo({ size = 'lg', className = '' }) {
  const sizeClasses = {
    sm: 'text-sm md:text-base',
    md: 'text-xl md:text-2xl',
    nav: 'text-2xl md:text-3xl',
    lg: 'text-2xl md:text-4xl',
  }

  return (
    <span className={`brand-logo inline-block ${className}`}>
      <span className={`brand-text font-cinematic font-black uppercase tracking-[0.12em] ${sizeClasses[size]} relative inline-block`}>
        {/* Glitch layer - red (CSS infinite) */}
        <span className="brand-glitch-red absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          KAAY <span>VISION</span>
        </span>

        {/* Glitch layer - blue (CSS infinite) */}
        <span className="brand-glitch-blue absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          KAAY <span>VISION</span>
        </span>

        {/* Main visible text */}
        <span className="brand-main-text relative z-10">
          <span className="brand-kaay">KAAY</span>{' '}
          <span className="brand-vision">VISION</span>
        </span>

        {/* Scan line that passes through */}
        <span className="brand-scanline absolute top-0 bottom-0 w-[2px] pointer-events-none z-20"></span>
      </span>
    </span>
  )
}
