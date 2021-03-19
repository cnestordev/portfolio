import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const MainProject = ({ handleOpen }) => {
  const borderStyle = {
    borderRadius: '10px',
  }

  return (
    <div className="projectContainer">
      <div className="left">
        <h2 className="project-name">Threaddit</h2>
        <div className="project-subheader">
          <i className="fas fa-info-circle" />
          <p className="project-description">
            A website for posting and sharing interesting things.
          </p>
        </div>
        <div className="project-icons">
          <div className="icon-container">
            <i class="fab fa-js-square"></i>
            <p>JavaScript</p>
          </div>
          <div className="icon-container">
            <i class="fab fa-react"></i>
            <p>React</p>
          </div>
          <div className="icon-container">
            <img className="node-icon" src="./node.svg" />
            <p>Node</p>
          </div>
          <div className="icon-container">
            <img className="mongo-icon" src="./mongo.svg" />
            <p>MongoDB</p>
          </div>
        </div>
        <div className="project-about">
          <h3>About</h3>
          <p>
            I built this application from scratch using React for my frontend,
            Node/Express for my backend, and MongoDB/Mongoose for my database.
          </p>
        </div>
        <div className="project-cta">
          <button
            onClick={() => handleOpen('http://threaddit-app.herokuapp.com/')}
            className="project-btn"
          >
            Visit Website <i class="fas fa-external-link-alt"></i>
          </button>
          <button
            onClick={() =>
              handleOpen('https://github.com/cnestordev/PostProject')
            }
            className="project-btn github"
          >
            <i className="fab fa-github"></i>
            <i className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
      <div className="right">
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
      </div>
    </div>
  )
}

export default MainProject
