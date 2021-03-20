import React from 'react'

import { Section, Intro } from '../styles/home'

function Home() {
  return (
    <Section id="home">
      <Intro>
        <h1>Hi! I'm Nestor.</h1>
        <h3>A Full-Stack Web Developer</h3>
        <a
          href="https://drive.google.com/file/d/1pgbPtdytVL3XyjTTO2_3MZaJeUy-oT7s/view"
          target="_blank"
          rel="noreferrer noopener"
        >
          View Resume
        </a>
      </Intro>
    </Section>
  )
}

export default Home
