import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cast from './components/Cast'
import FreeGift from './components/FreeGift'
import Trailer from './components/Trailer'
import UpcomingProjects from './components/UpcomingProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-rift-darker overflow-x-hidden horror-vignette relative">
      {/* Main content - Hollywood movie website flow */}
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
