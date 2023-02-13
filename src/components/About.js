import React from 'react'

import { Container } from '../styles'
import {
  Section,
  Header,
  Subheader,
  FlexContainer,
  Left,
  Right,
} from '../styles/about'

function About() {
  return (
    <Section id="about">
      <Container>
        <Header>
          About <span className="gradientText">Me</span>
        </Header>
        <Subheader onClick={() =>  navigator.clipboard.writeText('nestorcdev@gmail.com')}>
          <i class="far fa-envelope"></i> nestorcdev@gmail.com
        </Subheader>
        <FlexContainer>
          <Left>
            <p id="aboutText">
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
          </Left>
          <Right>
            <img src="./camp.png" alt="camp ground" />
          </Right>
        </FlexContainer>
      </Container>
    </Section>
  )
}

export default About
