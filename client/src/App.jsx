import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </Router>
  )
}

export default App
