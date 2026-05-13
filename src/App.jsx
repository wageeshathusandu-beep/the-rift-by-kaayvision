import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cast from './components/Cast'
import Gallery from './components/Gallery'
import Trailer from './components/Trailer'
import UpcomingProjects from './components/UpcomingProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-rift-darker overflow-x-hidden horror-vignette">
      {/* Main content - Hollywood movie website flow */}
      <Navbar />
      <Hero />
      <Trailer />
      <About />
      <Cast />
      <Gallery />
      <UpcomingProjects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
