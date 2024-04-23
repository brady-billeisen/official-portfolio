import { Link } from "react-router-dom"
import resume from '../../assets/images/Brady-Billeisen-Resume.pdf'
import './socials.css'

function Socials() {
  return (
    <div className="socials-container">
        <div className="soc-card-container">
            <div className='card-outline'>
                <div className='social-card-bg'>
                    <div>
                        <h2 className='socials-title'>Socials</h2>
                        <div className='socials-btn-container'>
                            <div className='soc-btn-bg'>
                                <Link to={'https://www.linkedin.com/in/bradybilleisen/'}>
                                <button className='soc-btn'>LinkedIn</button>
                                </Link>
                            </div>
                            <div className='soc-btn-bg'>
                                <a href={resume}>
                                <button className='soc-btn'>Full Resume</button>
                                </a>
                            </div>
                            <div className='soc-btn-bg'>
                                <Link to={'https://github.com/brady-billeisen'}>
                                <button className='soc-btn'>GitHub</button>
                                </Link>
                            </div>
                            <div className='soc-btn-bg'>
                                <Link to={'https://gitlab.com/brady.billeisen'}>
                                <button className='soc-btn'>GitLab</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Socials
