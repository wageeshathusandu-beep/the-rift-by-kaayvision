export default function NavEnergy() {
  return (
    <div className="nav-energy-container hidden md:block absolute left-[220px] top-0 bottom-0 w-[280px] pointer-events-none overflow-hidden">
      {/* Soft background aura */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-8 bg-rift-neon/4 rounded-full blur-[25px] animate-energy-aura"></div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-24 h-6 bg-rift-blood/5 rounded-full blur-[20px] animate-energy-aura-red"></div>
      </div>

      {/* Horizontal scanning energy line */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1px] overflow-hidden">
        <div className="nav-energy-scan absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-rift-neon/60 to-transparent blur-[0.5px]"></div>
      </div>

      {/* Secondary scan line (red, slower) */}
      <div className="absolute top-[55%] -translate-y-1/2 left-0 right-0 h-[1px] overflow-hidden opacity-50">
        <div className="nav-energy-scan-reverse absolute top-0 right-0 w-16 h-full bg-gradient-to-r from-transparent via-rift-blood-light/50 to-transparent blur-[0.5px]"></div>
      </div>

      {/* Floating holographic energy streaks */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 64" fill="none" preserveAspectRatio="none">
        {/* Electric pulse wave 1 */}
        <path
          className="nav-energy-streak-1"
          d="M0 32 Q30 28, 60 32 T120 30 T180 34 T240 31 T280 32"
          stroke="url(#energyGrad1)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.6"
        />
        {/* Electric pulse wave 2 */}
        <path
          className="nav-energy-streak-2"
          d="M0 34 Q40 38, 80 33 T160 36 T220 30 T280 35"
          stroke="url(#energyGrad2)"
          strokeWidth="0.4"
          fill="none"
          opacity="0.4"
        />
        {/* Glitch distortion line */}
        <path
          className="nav-energy-glitch"
          d="M20 32 L40 32 L42 28 L44 36 L46 30 L48 34 L50 32 L80 32"
          stroke="url(#energyGrad3)"
          strokeWidth="0.6"
          fill="none"
          opacity="0"
        />
        <defs>
          <linearGradient id="energyGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="30%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="energyGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b0000" stopOpacity="0" />
            <stop offset="40%" stopColor="#dc2626" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#ff1a1a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b0000" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="energyGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff1a1a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating neon particles */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full nav-energy-particle"
          style={{
            width: `${1 + (i % 3)}px`,
            height: `${1 + (i % 3)}px`,
            background: i % 2 === 0 ? '#00d4ff' : '#ff1a1a',
            left: `${15 + i * 12}%`,
            top: `${30 + (i % 4) * 10}%`,
            animationDelay: `${i * 0.7}s`,
            boxShadow: i % 2 === 0
              ? '0 0 4px #00d4ff, 0 0 8px #00d4ff'
              : '0 0 4px #ff1a1a, 0 0 8px #ff1a1a',
          }}
        />
      ))}

      {/* Floating embers */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`ember-${i}`}
          className="absolute w-[1px] h-[1px] bg-rift-blood-glow/60 rounded-full nav-energy-ember"
          style={{
            left: `${20 + i * 20}%`,
            bottom: '20%',
            animationDelay: `${i * 1.5}s`,
            boxShadow: '0 0 3px #ff1a1a',
          }}
        />
      ))}

      {/* Smoke trail wisps */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-16 h-4 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent rounded-full blur-[3px] nav-energy-smoke"></div>
      <div className="absolute top-[40%] left-[50%] w-12 h-3 bg-gradient-to-r from-transparent via-rift-neon/[0.03] to-transparent rounded-full blur-[2px] nav-energy-smoke-2"></div>
    </div>
  )
}
