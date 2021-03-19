import React from 'react'
import { Container } from '../styles'

function About() {
  return (
    <section className="aboutContainer" id="about">
      <Container>
        <h2 className="aboutHeader subheader">About Me</h2>
        <p className="aboutText">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </p>
        <div className="iconContainer">
          <i class="fas fa-campground"></i>
          <i class="fas fa-plane"></i>
          <i class="fas fa-gamepad"></i>
          <i class="fas fa-route"></i>
        </div>
      </Container>
    </section>
  )
}

export default About
