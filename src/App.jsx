import React from 'react'
import Hero from './components/2.hero/Hero'
import Navbar from './components/1.navbar/Navbar'
import About from './components/3.about/About'
import Services from './components/4.services/Services'
import Mywork from './components/5.mywork/Mywork'
import Contact from './components/6.contact/Contact'
import bgimage from './assets/bgimage.jpg'
import Footer from './components/7.footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
      <div className='bg-image'>
          <img src={bgimage} alt="" />
      </div>
    </div>
  )
}

export default App