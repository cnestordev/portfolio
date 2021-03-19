import React from 'react'
import { Container } from '../styles'

function About() {
  return (
    <section className="aboutContainer" id="about">
      <Container>
        <h2 className="aboutHeader subheader">
          About <span className="gradientText">Me</span>
        </h2>
        <div className="aboutFlex">
          <div className="about-left">
            <p className="aboutText">
              I've always had a
              <span className="gradientText"> love for technology</span>. Ever
              since I had my first computer, I was always curious to find out
              how it works under the hood. It amazed me that people can create
              something from nothing, and always had an appreciation for it.
              Being able to be a part of that is what fulfills me. I am a{' '}
              <span className="gradientText">full-stack web developer</span>. I
              have a passion for creating useful and user-friendly applications.
              Other interests of mine include{' '}
              <span className="gradientText">
                camping, traveling, and sightseeing.
              </span>
            </p>
          </div>
          <div className="about-right">
            <img className="camp-img" src="./camp.png" alt="camp ground" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
