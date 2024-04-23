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
import CozyCorner from './pages/cozycorner/CozyCorner'
import EsoClassGuides from './pages/esoclassguides/EsoClassGuides'
import ReactPortfolio from './pages/reactportfolio/ReactPortfolio'
import WeatherDashboard from './pages/weatherdashboard/WeatherDashboard'
import CodeQuiz from './pages/codequiz/CodeQuiz'
import WorkDayScheduler from './pages/workdayscheduler/WorkDayScheduler'
import PasswordGenerator from './pages/passwordgenerator/PasswordGenerator'
import Jate from './pages/jate/Jate'
import HoriseonCodeRefactor from './pages/horiseon/HoriseonCodeRefactor'
import ReadMeGenerator from './pages/readmegenerator/ReadMeGenerator'
import ECommerceBackEnd from './pages/ecommercebackend/ECommerceBackEnd'
import EmployeeTracker from './pages/employeetracker/EmployeeTracker'
import SvgLogoMaker from './pages/svglogomaker/SvgLogoMaker'
import Socials from './pages/socials/Socials'

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
        <Route element={<CozyCorner />} path='/cozy-corner' />
        <Route element={<EsoClassGuides />} path='/eso-class-guides' />
        <Route element={<ReactPortfolio />} path='/react-portfolio' />
        <Route element={<WeatherDashboard />} path='/weather-dashboard' />
        <Route element={<CodeQuiz />} path='/code-quiz' />
        <Route element={<WorkDayScheduler />} path='/work-day-scheduler' />
        <Route element={<PasswordGenerator />} path='/password-generator' />
        <Route element={<Jate />} path='/jate' />
        <Route element={<HoriseonCodeRefactor />} path='/horiseon-code-refactor' />
        <Route element={<ReadMeGenerator />} path='/readme-generator' />
        <Route element={<ECommerceBackEnd />} path='/e-commerce-back-end' />
        <Route element={<EmployeeTracker />} path='/employee-tracker' />
        <Route element={<SvgLogoMaker />} path='/svg-logo-maker' />
        <Route element={<Socials />} path='/socials' />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
