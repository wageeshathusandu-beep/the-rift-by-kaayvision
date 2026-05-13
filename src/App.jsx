import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cast from './components/Cast'
import Gallery from './components/Gallery'
import Trailer from './components/Trailer'
import Contact from './components/Contact'
import Footer from './components/Footer'

function GlobalEffects() {
  // Generate particles once with useMemo for performance
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      size: Math.random() * 3.5 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 14 + Math.random() * 12,
      type: i % 4 === 0 ? 'red' : i % 4 === 1 ? 'blue' : i % 4 === 2 ? 'white' : 'blue',
    }))
  }, [])

  return (
    <>
      {/* Global Fog Layers */}
      <div className="global-fog">
        <div className="global-fog-layer-1"></div>
        <div className="global-fog-layer-2"></div>
        <div className="global-fog-layer-3"></div>
      </div>

      {/* Global Floating Particles */}
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

      {/* Ambient Light Flicker - Cinematic */}
      <div className="ambient-flicker" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,0,0,0.04), transparent 55%), radial-gradient(ellipse at 30% 70%, rgba(0,212,255,0.02), transparent 50%)' }}></div>

      {/* Secondary ambient pulse */}
      <div className="ambient-flicker" style={{ 
        background: 'radial-gradient(ellipse at 70% 30%, rgba(123,47,247,0.02), transparent 50%)',
        animationDelay: '4s',
        animationDuration: '12s'
      }}></div>
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
      <Contact />
      <Footer />
    </div>
  )
}

export default App
