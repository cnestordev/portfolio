import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

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
  const borderStyle = {
    borderRadius: '10px',
  }

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
        <Carousel width="75%" dynamicHeight={true}>
          <div>
            <img style={borderStyle} src="./posts.gif" alt="phone" />
            <p className="legend">View Posts</p>
          </div>
          <div>
            <img style={borderStyle} src="./comment.gif" alt="phone" />
            <p className="legend">Like and Comment</p>
          </div>
          <div>
            <img style={borderStyle} src="./create.gif" alt="phone" />
            <p className="legend">Crate a Post</p>
          </div>
          <div>
            <img style={borderStyle} src="./darkmode.gif" alt="phone" />
            <p className="legend">Dark Mode/Light Mode</p>
          </div>
          <div>
            <img style={borderStyle} src="./account.gif" alt="phone" />
            <p className="legend">main</p>
          </div>
        </Carousel>
      </Right>
    </Container>
  )
}

export default MainProject
