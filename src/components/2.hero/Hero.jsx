import React from 'react'
import './hero.css'
import hero from '../../assets/hero.jpg'
import {Typewriter} from 'react-simple-typewriter'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={hero} alt="" />
    <h2> <div>I'm Dharanidharan,</div>
        A passionate Frontend <h3>
          <span style={{ color: '#ff914d' }}>
            <Typewriter
              words={['Web Developer', 'React Developer']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </h3>
    </h2>
    <p>I craft beautiful, responsive web experiences using modern technologies, with a passion for designing intuitive user interfaces that makes an impact</p>
    <div className='hero-action'>
      <div className="hero-connection"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
      <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero