import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import Benefits from './components/Benefits'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import './responsive.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Benefits />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}

export default App