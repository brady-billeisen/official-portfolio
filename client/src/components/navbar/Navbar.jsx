import bradyLogo from '../../assets/logos/BradyLogo.png'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <header>
        <div className='nav-flex'>
            <nav className='nav-container'>
                <div className='logo-container'>
                    <Link className='logo-container' to='/'>
                        <img className='nav-logo' src={bradyLogo} alt="Brady Logo" />
                        <h1>Brady Billeisen</h1>
                    </Link>
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
                    <li>
                        <Link className='nav-links' to={'/socials'}>Socials</Link>
                    </li>
                </ul>
                <ul className='portfolio-btn-container'>
                    <Link className='portfolio-item' to={'/portfolio'}>
                        <li>
                            <button className='portfolio-btn'>Portfolio</button>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
