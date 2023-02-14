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
  HeaderR
} from '../styles/experience'

const Runway = () => {
  return (
    <Container>
        <Left>
            <HeaderL id="title">Runway Proptech</HeaderL>
            <InfoL>
                <i className="fas fa-info-circle" />
                <p className="project-description">
                A web application to manage land inventory, assets, data, and sales history.
                </p>
            </InfoL>
            <Video muted width="600" controls>
                <source src="./runwayapp.mp4" type="video/mp4" />
            </Video>
      </Left>
      <Right>
        <HeaderR id="title">Runway Proptech</HeaderR>
        <InfoR>
          <i className="fas fa-info-circle" />
          <p className="project-description">
            A web application to manage land inventory, assets, data, and sales history.
          </p>
        </InfoR>
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
        <About>
          <h3>About</h3>
          <p>
          Built this project from the ground up using Angular, TypeScript, Sass, and other CSS frameworks.  I worked on this project individually with the oversight of two senior developers, a UI developer, and QA, along with the company's owner, CEO, and their respective clients.  This app allows clients to manage their properties, lots, community maps, amenities, documents, and site availability, as well as setting rules for the home facade configurations.
          </p>
        </About>
      </Right>
    </Container>
  )
}

export default Runway
