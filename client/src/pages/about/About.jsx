import Projects from "../../utils/Projects"
import { Link } from "react-router-dom";
import './about.css'

function About() {

  const granular = Projects.find(project => project.title === 'Granular Garden');
  const cozy = Projects.find(project => project.title === 'Cozy Corner')
  const eso = Projects.find(project => project.title === 'ESO ClassGuides')

  return (
    <section>

      <div className='home-cards-container'>
          <div className='cards-container'>

            <div className='gran-card-bg'>
              <div className='gran-card'>
                <div>
                  <div className="gran-img-container">
                    <img className='gran-img' src={ granular.src } alt={ granular.title } />
                  </div>
                  <h2 className='gran-title'>{ granular.title }</h2>
                  <p className='gran-description'>{ granular.description }</p>
                  <div className='featured-btn-container'>
                      <div className='featured-btn-bg'>
                        <Link to={ granular.endPoint }>
                          <button className='featured-btn'>Visit Project</button>
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='gran-card-bg'>
              <div className='gran-card'>
                <div>
                  <div className="gran-img-container">
                    <img className='gran-img' src={ cozy.src } alt={ cozy.title } />
                  </div>
                  <h2 className='gran-title'>{ cozy.title }</h2>
                  <p className='gran-description'>{ cozy.description }</p>
                  <div className='featured-btn-container'>
                      <div className='featured-btn-bg'>
                        <Link to={ cozy.endPoint }>
                          <button className='featured-btn'>Visit Project</button>
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='gran-card-bg'>
              <div className='gran-card'>
                <div>
                  <div className="gran-img-container">
                    <img className='gran-img' src={ eso.src } alt={ eso.title } />
                  </div>
                  <h2 className='gran-title'>{ eso.title }</h2>
                  <p className='gran-description'>{ eso.description }</p>
                  <div className='featured-btn-container'>
                      <div className='featured-btn-bg'>
                        <Link to={ eso.endPoint }>
                          <button className='featured-btn'>Visit Project</button>
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
      </div>

    </section>
  )
}

export default About
