export default function BrandLogo({ size = 'lg', className = '' }) {
  const sizeClasses = {
    sm: 'text-sm md:text-base',
    md: 'text-xl md:text-2xl',
    nav: 'text-2xl md:text-3xl',
    lg: 'text-2xl md:text-4xl',
  }

  return (
    <span className={`brand-logo inline-block ${className}`}>
      <span className={`font-cinematic font-black uppercase tracking-[0.12em] ${sizeClasses[size]} relative inline-block`}>
        <span className="relative z-10">
          <span className="text-rift-offwhite" style={{ textShadow: '0 0 10px rgba(0,240,255,0.4)' }}>KAAY</span>{' '}
          <span className="text-rift-neon" style={{ textShadow: '0 0 15px rgba(0,240,255,0.6)' }}>VISION</span>
        </span>
      </span>
    </span>
  )
}
