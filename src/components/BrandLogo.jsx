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

        {/* Glitch layer - cyan offset */}
        <span className="brand-glitch-cyan absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          KAAY <span>VISION</span>
        </span>

        {/* Glitch layer - red offset */}
        <span className="brand-glitch-red absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          KAAY <span>VISION</span>
        </span>

        {/* Main visible text with breathing glow */}
        <span className="brand-main-text relative z-10">
          <span className="brand-kaay">KAAY</span>{' '}
          <span className="brand-vision">VISION</span>
        </span>

        {/* Light sweep overlay */}
        <span className="brand-sweep absolute inset-0 pointer-events-none z-15"></span>

        {/* Scan line */}
        <span className="brand-scanline absolute top-0 bottom-0 w-[1px] pointer-events-none z-20"></span>

        {/* Micro sparks (3 tiny pseudo-elements via CSS) */}
        <span className="brand-spark brand-spark-1 absolute pointer-events-none z-20"></span>
        <span className="brand-spark brand-spark-2 absolute pointer-events-none z-20"></span>
        <span className="brand-spark brand-spark-3 absolute pointer-events-none z-20"></span>
      </span>
    </span>
  )
}
