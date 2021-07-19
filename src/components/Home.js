import React from 'react'

import { Section, Intro } from '../styles/home'
import bg from '../assets/poly.svg'

function Home() {
  return (
    <Section id="home">
      <Intro>
        <h1>Hi! I'm Nestor.</h1>
        <h3>A Full-Stack Web Developer</h3>
        <a href="#skills">Learn More</a>
      </Intro>
    </Section>
  )
}

export default Home
