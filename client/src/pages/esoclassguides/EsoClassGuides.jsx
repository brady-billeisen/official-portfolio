import { Link } from 'react-router-dom'
import Projects from '../../utils/Projects'
import './eso-class-guides.css'

function EsoClassGuides() {

    const projectInfo = Projects.find(project => project.title === 'ESO ClassGuides')

  return (
    <main>

      <section className='page-container'>
        <div className='content-container'>
          <div className='page-columns'>
            <div className='column-one'>
              <div>
                <div className='img-bg'>
                  <img className='page-img' src={ projectInfo.src } alt={ projectInfo.title } />
                </div>
                <p className='technologies'>{ projectInfo.technologies }</p>
              </div>
            </div>

            <div className='column-two-bg'>
              <div className='column-two'>
                <div>
                  <h2 className='proj-title'>{ projectInfo.title }</h2>
                  <p className='proj-description'>{ projectInfo.description }</p>

                  { projectInfo.deployed === '' ? (
                    <div className='btn-container'>
                      <div className='btn-bg'>
                        <Link to={ projectInfo.gitHub }>
                          <button className='btn'>GitHub Repo</button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className='btn-container'>
                      <div className='btn-bg'>
                        <Link to={ projectInfo.deployed }>
                          <button className='btn'>Deployed Site</button>
                        </Link>
                      </div>
                      <div className='btn-bg'>
                        <Link to={ projectInfo.gitHub }>
                          <button className='btn'>GitHub Repo</button>
                        </Link>
                      </div>
                    </div>
                  ) }

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  )
}

export default EsoClassGuides
