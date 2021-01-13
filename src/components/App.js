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
        <About />
        <Skills />
        <Projects />
      </div>
      </>
  )
}

export default App
