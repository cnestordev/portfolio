import React from 'react'

import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

function App() {
  return (
      <>
      <Navbar />
      <Home />
      <div className="container">
        <Skills />
        <Projects />
        <About />
      </div>
      </>
  )
}

export default App
