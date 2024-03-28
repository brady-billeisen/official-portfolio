import './footer.css'
import { Link } from 'react-router-dom'
import bradyLogo from '../../assets/logos/BradyLogo.png'

function Footer() {
  return (
    <div className='footer'>

        {/* <div className='footer-logo-container'>
            <img className='footer-logo' src={bradyLogo} alt="Brady Logo" />
        </div> */}

        <div className='column-one'>
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
    </div>
  )
}

export default Footer
