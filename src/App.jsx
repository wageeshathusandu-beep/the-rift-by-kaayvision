import { useMemo, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cast from './components/Cast'
import Gallery from './components/Gallery'
import Trailer from './components/Trailer'
import UpcomingProjects from './components/UpcomingProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function GlobalEffects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Reduce particles on mobile for 60fps
  const particleCount = isMobile ? 8 : 18
  
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 16 + Math.random() * 10,
      type: i % 3 === 0 ? 'red' : i % 3 === 1 ? 'blue' : 'white',
    }))
  }, [particleCount])

  return (
    <>
      {/* Global Fog Layers */}
      <div className="global-fog">
        <div className="global-fog-layer-1"></div>
        {!isMobile && <div className="global-fog-layer-2"></div>}
        <div className="global-fog-layer-3"></div>
      </div>

      {/* Global Floating Particles - reduced count */}
      <div className="global-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`particle particle-${p.type}`}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              bottom: '-2%',
              animation: `particle-float-up ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient Light Flicker - only on desktop */}
      {!isMobile && (
        <div className="ambient-flicker" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,0,0,0.03), transparent 55%)' }}></div>
      )}
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-rift-darker overflow-x-hidden horror-grain horror-vignette">
      {/* Global cinematic effects */}
      <GlobalEffects />

      {/* Main content */}
      <Navbar />
      <Hero />
      <About />
      <Cast />
      <Gallery />
      <Trailer />
      <UpcomingProjects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
