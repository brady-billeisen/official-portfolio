import React from 'react'
import './home.css'
import bradyLogo from '../../assets/logos/BradyLogo.png'
import javascript from '../../assets/logos/javascript.svg'
import python from '../../assets/logos/python.svg'
import html from '../../assets/logos/html.svg'
import mysql from '../../assets/logos/mysql.svg'
import css from '../../assets/logos/css.svg'
import mongodb from '../../assets/logos/mongodb.svg'
import node from '../../assets/logos/node.svg'
import heroku from '../../assets/logos/heroku.svg'
import express from '../../assets/logos/express.svg'
import netlify from '../../assets/logos/netlify.svg'
import granularGarden from '../../assets/images/Granular-Garden.png'
import cozyCorner from '../../assets/images/Cozy-Corner.png'
import esoClassGuides from '../../assets/images/ESO-Class-Guides.png'
import Projects from '../../utils/Projects'

function Home() {

  const granular = Projects.find(project => project.title === 'Granular Garden');
  const cozy = Projects.find(project => project.title === 'Cozy Corner');
  const eso = Projects.find(project => project.title === 'ESO ClassGuides');

  return (
      <div className='home-page'>

        <section className='landing'>
          <div className='home-head-containers'>
            <h2 className='headings'>Graduating GPA of 3.85</h2>
            <h2 className='headings'>Experience with 30+ Projects</h2>
            <h2 className='headings'>98% Average Project Score</h2>
          </div>
          <div className='brady-logo-container'>
            <img className='brady-logo' src={bradyLogo} alt="Brady Logo" />
          </div>
          <div className='tech-logo-container'>
            <div className='tech-logo-grid'>
              <img className='tech-logo' src={javascript} alt="javascript logo" />
              <img className='tech-logo' src={python} alt="python logo" />
              <img className='tech-logo' src={html} alt="html logo" />
              <img className='tech-logo' src={mysql} alt="mysql logo" />
              <img className='tech-logo' src={css} alt="css logo" />
              <img className='tech-logo' src={mongodb} alt="mongodb logo" />
              <img className='tech-logo' src={node} alt="node logo" />
              <img className='tech-logo' src={heroku} alt="heroku logo" />
              <img className='tech-logo' src={express} alt="express logo" />
              <img className='tech-logo' src={netlify} alt="netlify logo" />
            </div>
          </div>
        </section>

        <section className='granular'>
          <div className='granular-top-container'>
            <img className='featured-img' src={granularGarden} alt="Granular Garden" />
            <div>
              <h1 className='granular-title-one'>Granular</h1>
              <h1 className='granular-title-two'>Garden</h1>
            </div>
          </div>
          <div className='granular-bottom-container'>
            <p className='granular-description'>
            Granular Garden, a vibrant and groundbreaking application that embraces the soul of music
            creation and fosters a thriving community of artists, producers, and music enthusiasts. A platform made using the newest
            development technologies to combine the finest elements of SoundCloud, Splice, and Twitter, crafting an immersive experience
            that revolutionizes the way artists collaborate, share, and express themselves.
            </p>
          </div>
        </section>

        <section className='cozy'>
          <div className='cozy-container'>
            <ul className='cozy-flex'>
              <p className='cozy-description'>
              Cozy Corner is a web application that helps readers connect with the reading world. These connections are made through fellow
              readers on the app and suggest reads based on the current popular books. The reader can also keep up with their own reading
              progress and see their reading history.
              </p>
              <div className='cozy-content'>
                <img className='featured-img' src={cozyCorner} alt="Cozy Corner" />
                <div>
                  <h2 className='cozy-title-one'>Cozy</h2>
                  <h2 className='cozy-title-two'>Corner</h2>
                </div>
              </div>
            </ul>
          </div>
        </section>

        <section className='class-guides'>
          <div className='eso-container'>
            <ul className='eso-flex'>
              <div className='eso-content'>
                <img className='featured-img' src={esoClassGuides} alt="ESO ClassGuides" />
                <div>
                  <h2 className='eso-title-one'>ESO</h2>
                  <h2 className='eso-title-two'>ClassGuides</h2>
                </div>
              </div>
              <p className='eso-description'>
              Whether you're a seasoned adventurer or just starting your journey, ESO ClassGuides is your go-to tool for staying
              informed, improving your gameplay, and unlocking the full potential of your character. Let the application guide you
              through the vast universe of Elder Scrolls Online, helping you conquer any challenge that comes your way.
              Elevate your ESO adventure like never before with ESO ClassGuides!
              </p>
            </ul>
          </div>
        </section>

      </div>
  )
}

export default Home
