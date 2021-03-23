import React, { useState } from 'react'

import About from './About'
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

function App() {
  // display drop down menu for navbar
  const [isVisible, setIsVisible] = useState(false)

  const toggleMenu = () => {
    console.log('clicked')
    setIsVisible(!isVisible)
  }

  return (
    <>
      <Navbar visible={isVisible} toggler={toggleMenu} />
      <Menu visible={isVisible} toggler={toggleMenu} />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

export default App
