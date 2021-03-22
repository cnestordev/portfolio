import React from 'react'

import { Container } from '../styles'
import {
  Section,
  Header,
  Subheader,
  FlexContainer,
  Left,
  Right,
  Svg,
} from '../styles/about'

function About() {
  return (
    <Section id="about">
      <Container>
        <Header>
          About <span className="gradientText">Me</span>
        </Header>
        <Subheader>
          <i class="far fa-envelope"></i> nestor@nestordev.com
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
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff7e4"
            fill-opacity="1"
            d="M0,288L48,282.7C96,277,192,267,288,261.3C384,256,480,256,576,261.3C672,267,768,277,864,288C960,299,1056,309,1152,309.3C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </Svg>
      </Container>
    </Section>
  )
}

export default About
