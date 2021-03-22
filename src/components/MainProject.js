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
            A website for posting and sharing interesting things.
          </p>
        </Info>
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
        <About>
          <h3>About</h3>
          <p>
            I built this application from scratch using React for my frontend,
            Node/Express for my backend, and MongoDB/Mongoose for my database.
          </p>
        </About>
        <Cta>
          <button
            onClick={() => handleOpen('http://threaddit-app.herokuapp.com/')}
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
