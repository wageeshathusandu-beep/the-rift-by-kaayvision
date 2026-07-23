export default function BrandLogo({ size = 'lg', className = '' }) {
  const sizeClasses = {
    sm: 'text-sm md:text-base',
    md: 'text-xl md:text-2xl',
    nav: 'text-2xl md:text-3xl',
    lg: 'text-2xl md:text-4xl',
  }

  return (
    <span className={`inline-block ${className}`}>
      <span className={`font-display font-black uppercase tracking-[0.12em] ${sizeClasses[size]} relative inline-block text-rift-offwhite`}>
        <span className="relative z-10">
          <span className="text-rift-amber">KAAY</span>{' '}
          <span className="text-rift-offwhite">VISION</span>
        </span>
      </span>
    </span>
  )
}
