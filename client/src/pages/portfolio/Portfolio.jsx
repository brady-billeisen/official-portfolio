import Projects from '../../utils/Projects'
import './portfolio.css'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
      <div className='portfolio'>
        <div className='card-display'>
          <div className='all-cards-container'>
            {Projects.map((project) => (
              <div key={ project.id }>
                <Link className='card-link' to={ project.endPoint }>
                  <div className='card-container'>
                    <div className='card-bg'>
                      <div className='card-body-container'>
                        <div className='card-body'>
                          <img className='card-img' src={ project.src } alt={ project.title } />
                            <h1 className='card-title'>{ project.title }</h1>
                          <p className='card-technologies'>{ project.technologies }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Portfolio
