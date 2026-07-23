import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trailer from './components/Trailer'
import Synopsis from './components/Synopsis'
import Cast from './components/Cast'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-sci-black overflow-x-hidden cinema-vignette">
      <Navbar />
      <Hero />
      <Trailer />
      <Synopsis />
      <Cast />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
