import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Resume from './pages/resume/Resume'
import Portfolio from './pages/portfolio/Portfolio'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import GranularGarden from './pages/granulargarden/GranularGarden'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Resume />} path='/resume' />
        <Route element={<Portfolio />} path='/portfolio' />
        <Route element={<GranularGarden />} path='/granular-garden' />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
