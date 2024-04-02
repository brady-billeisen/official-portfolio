import Projects from '../../utils/Projects'
import './portfolio.css'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <main>
      <div className='card-display'>
        <div className='card-container'>
          {Projects.map((project) => (
            <div key={ project.id }>
              <Link className='card-link' to={ project.endPoint }>
                <div className='card-body'>
                  <img className='card-img' src={ project.src } alt={ project.title } />
                  <h2 className='card-title'>{ project.title }</h2>
                  <p className='card-technologies'>{ project.description }</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Portfolio
