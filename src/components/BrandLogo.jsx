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
        <span className="brand-main-text relative z-10">
          <span className="brand-kaay">KAAY</span>{' '}
          <span className="brand-vision">VISION</span>
        </span>
      </span>
    </span>
  )
}
