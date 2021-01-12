import React from 'react'

import About from './About'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
      <>
      <Navbar />
      <Home />
      <div className="container">
        <About />
      </div>
      </>
  )
}

export default App
