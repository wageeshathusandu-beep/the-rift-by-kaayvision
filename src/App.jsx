import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cast from './components/Cast'
import Gallery from './components/Gallery'
import Trailer from './components/Trailer'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-rift-darker overflow-x-hidden horror-grain horror-vignette">
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
