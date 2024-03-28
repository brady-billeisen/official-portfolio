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

function Home() {
  return (
    <body>
      <div className='home-page'>
        <div className='home-head-containers'>
          <h2 className='headings'>Graduating GPA of 3.85</h2>
          <h2 className='headings'>Experience with 30+ Projects</h2>
          <h2 className='headings'>98% Average Project Score</h2>
        </div>
        <div className='brady-logo-container'>
          <img className='brady-logo' src={bradyLogo} alt="Brady Logo" />
        </div>
        <div className='tech-logo-container'>
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
    </body>
  )
}

export default Home
