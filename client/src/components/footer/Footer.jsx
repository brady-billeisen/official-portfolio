import './footer.css'
import { Link } from 'react-router-dom'
import bradyLogo from '../../assets/logos/BradyLogo.png'

function Footer() {
  return (
    <div className='footer'>

        <div>
            <h3 className='footer-labels'>Links</h3>
            <ul className='footer-links'>
                <li>
                    <Link className='link-items' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='link-items' to='/about'>About</Link>
                </li>
                <li>
                    <Link className='link-items' to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link className='link-items' to='/resume'>Resume</Link>
                </li>
                <li>
                    <Link className='link-items' to='/portfolio'>Portfolio</Link>
                </li>
            </ul>
        </div>

        <div>
            <ul className='footer-logo-container'>
                <li className='location-items'><img className='footer-logo' src={bradyLogo} alt="Brady Logo" /></li>
            </ul>
        </div>

        <div>
            <h3 className='footer-labels'>Location</h3>
            <ul className='footer-items'>
                <li className='location-items'>Indianapolis, IN</li>
            </ul>
        </div>

        <div>
            <h3 className='footer-labels' id='relocation'>Open to relocation</h3>
            <ul className='footer-items'>
                <li className='location-items' id='chicago'>Chicago, IL</li>
                <li className='location-items'>Nashville, TN</li>
            </ul>
        </div>

    </div>
  )
}

export default Footer
