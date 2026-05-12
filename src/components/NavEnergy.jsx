export default function NavEnergy() {
  return (
    <div className="nav-energy-container hidden md:block absolute left-[220px] top-0 bottom-0 w-[200px] pointer-events-none overflow-hidden">
      {/* Single lightweight energy scan line - transform only */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1px] overflow-hidden">
        <div className="nav-energy-scan absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-transparent via-rift-neon/40 to-transparent"></div>
      </div>
    </div>
  )
}
