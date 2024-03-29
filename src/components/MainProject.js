import React from 'react'

import Carousel from './Carousel'

import {
  Container,
  Left,
  Info,
  Icons,
  Icon,
  JavaScript,
  ReactIcon,
  Node,
  Mongo,
  About,
  Cta,
  GitContainer,
  ExtIcon,
  Right,
} from '../styles/mainproject'

const MainProject = ({ handleOpen }) => {
  return (
    <Container>
      <Left>
        <h2 id="title">Threaddit</h2>
        <Info>
          <i className="fas fa-info-circle" />
          <p className="project-description">
            A website for sharing interesting things with people around the
            world.
          </p>
        </Info>
        <About>
          <p>
          I created this application from the ground up, employing React for the frontend, Node/Express for the backend, and MongoDB/Mongoose for the database.
          </p>
        </About>
        <Icons>
          <Icon>
            <JavaScript className="fab fa-js-square"></JavaScript>
            <p>JavaScript</p>
          </Icon>
          <Icon>
            <ReactIcon className="fab fa-react"></ReactIcon>
            <p>React</p>
          </Icon>
          <Icon>
            <Node src="./node.svg" />
            <p>Node</p>
          </Icon>
          <Icon>
            <Mongo src="./mongo.svg" />
            <p>MongoDB</p>
          </Icon>
        </Icons>
        <Cta>
          <button
            onClick={() => handleOpen('https://threaddit-app.herokuapp.com/')}
          >
            Visit Website{' '}
            <ExtIcon className="fas fa-external-link-alt"></ExtIcon>
          </button>
          <button
            onClick={() =>
              handleOpen('https://github.com/cnestordev/PostProject')
            }
            id="github"
          >
            <GitContainer>
              <i className="fab fa-github"></i>
              <ExtIcon className="fas fa-external-link-alt"></ExtIcon>
            </GitContainer>
          </button>
        </Cta>
      </Left>
      <Right>
        <Carousel />
      </Right>
    </Container>
  )
}

export default MainProject
