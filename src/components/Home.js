import React from 'react'

function Home() {
  return (
    <section className="homeContainer" id="home">
      <div className="homeIntro">
        <h1>Hi! I'm Nestor.</h1>
        <h3 className="introSubheader">A Full-Stack Web Developer</h3>
        <a
          href="https://drive.google.com/file/d/1pgbPtdytVL3XyjTTO2_3MZaJeUy-oT7s/view"
          target="_blank"
          className="homeBtn"
          rel="noreferrer noopener"
        >
          View Resume
        </a>
      </div>
    </section>
  )
}

export default Home
