import React from 'react'

import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import Skills from './Skills'

function App() {
  return (
      <>
      <Navbar />
      <Home />
      <div className="container">
        <About />
        <Skills />
      </div>
      </>
  )
}

export default App
