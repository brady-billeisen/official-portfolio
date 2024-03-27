import bradyLogo from '../../assets/logos/BradyLogo.png'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <header>
        <nav>
            <div className='logo-container'>
                <img className='nav-logo' src={bradyLogo} alt="Brady Logo" />
                <h1>Brady Billeisen</h1>
            </div>
            <ul className='nav-items'>
                <li>
                    <Link className='nav-links' to={'/'}>Home</Link>
                </li>
                <li>
                    <Link className='nav-links' to={'/about'}>About</Link>
                </li>
                <li>
                    <Link className='nav-links' to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link className='nav-links' to={'/resume'}>Resume</Link>
                </li>
            </ul>
            <ul className='portfolio-btn'>
                <li className='portfolio-item'>
                    <Link className='portfolio-link' to={'/portfolio'}>Portfolio</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
