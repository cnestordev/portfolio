import React from 'react'

import Carousel from './Carousel'

import {
  Container,
  Left,
  InfoR,
  InfoL,
  Icons,
  Icon,
  FAIcon,
  SVGIcon,
  About,
  Right,
  Video,
  HeaderL,
  HeaderR,
  SubHeader,
  Brand,
  VideoContainer
} from '../styles/experience'
import { RunwayLogo } from '../styles/mainproject'

const Runway = () => {
  return (
    <Container>
      <Right>
        <Brand>
          <RunwayLogo src="./runwaylogo.png" />
          <div>
            <HeaderR id="title">Runway Proptech</HeaderR>
            <SubHeader className="project-description">
              August 2021 - August 2022
            </SubHeader>
          </div>
        </Brand>
        <About>
          <p>
          Built this project from the ground up using Angular, TypeScript, Sass, and other CSS frameworks.  I worked on this project individually with the oversight of two senior developers, a UI developer, and QA, along with the company's owner, CEO, and their respective clients.  This app allows clients to manage their properties, lots, community maps, amenities, documents, and site availability, as well as setting rules for the home facade configurations.
          </p>
        </About>
      </Right>
      <Left>
            <HeaderL id="title">Runway Proptech</HeaderL>
            <InfoL>
                <i className="fas fa-info-circle" />
                <p className="project-description">
                August 2021 - August 2022
                </p>
            </InfoL>
            <VideoContainer>
              <Video muted width="600" controls>
                  <source src="./runwayapp.mp4" type="video/mp4" />
              </Video>
              <Icons>
                <Icon>
                  <FAIcon className="fab fa-angular"></FAIcon>
                  <p>Angular</p>
                </Icon>
                <Icon>
                  <FAIcon className='fab fa-sass' />
                  <p>Sass</p>
                </Icon>
                <Icon>
                  <SVGIcon src="./typescript.svg" />
                  <p>TypeScript</p>
                </Icon>
                <Icon>
                  <SVGIcon src="./primeng.svg"></SVGIcon>
                  <p>PrimeNG</p>
                </Icon>
              </Icons>
            </VideoContainer>
      </Left>
    </Container>
  )
}

export default Runway
