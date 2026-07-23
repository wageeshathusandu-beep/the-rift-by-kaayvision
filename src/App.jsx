import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trailer from './components/Trailer'
import About from './components/About'
import Cast from './components/Cast'
import FreeGift from './components/FreeGift'
import UpcomingProjects from './components/UpcomingProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-void overflow-x-hidden cinema-vignette scan-line">
      <Navbar />
      <Hero />
      <Trailer />
      <About />
      <Cast />
      <FreeGift />
      <UpcomingProjects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
