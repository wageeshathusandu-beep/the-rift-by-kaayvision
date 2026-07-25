import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trailer from './components/Trailer'
import About from './components/About'
import Cast from './components/Cast'
import FreeGift from './components/FreeGift'
import UpcomingProjects from './components/UpcomingProjects'
import TicketBooking from './components/TicketBooking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Particles from './components/Particles'
import { ScrollProgressBar, BackToTop } from './components/ScrollProgress'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className={`min-h-screen bg-void overflow-x-hidden cinema-vignette scan-line ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        <ScrollProgressBar />
        <Particles />
        <Navbar />
        <Hero />
        <Trailer />
        <About />
        <Cast />
        <FreeGift />
        <UpcomingProjects />
        <TicketBooking />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
