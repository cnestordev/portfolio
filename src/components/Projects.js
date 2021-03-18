import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

function Projects() {
  const [projectsSet] = useState([
    {
      name: 'Budget Sharing',
      description: 'track of expenses shared by roommates',
      photoUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Reddit Posts',
      description: 'View Reddit posts from any domain',
      photoUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Avatar Inputs',
      description: 'Replaces radio inputs with icons',
      photoUrl: 'https://picsum.photos/300',
    },
  ])

  const projectsArr = projectsSet.map(project => {
    return (
      <div className="projectBox">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <img
          alt="thumbnail of the project"
          className="projectImg"
          src={project.photoUrl}
        />
      </div>
    )
  })

  const borderStyle = {
    borderRadius: '10px',
  }

  const handleOpen = site => {
    if (site === 'project') {
      window.open('http://threaddit-app.herokuapp.com/')
    } else {
      window.open('https://github.com/cnestordev/PostProject')
    }
  }

  return (
    <section className="projectsContainer" id="projects">
      <h3 className="projectsHeader subheader">Projects</h3>
      <div className="projectContainer">
        <div className="left">
          <h2 className="project-name">Threaddit</h2>
          <div className="project-subheader">
            <i className="fas fa-info-circle" />
            <p className="project-description">
              MERN application for creating and sharing interesting things (Feb
              2021 - Mar 2021)
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
              onClick={() => handleOpen('project')}
              className="project-btn"
            >
              Visit Website <i class="fas fa-external-link-alt"></i>
            </button>
            <button
              onClick={() => handleOpen('github')}
              className="project-btn github"
            >
              <i className="fab fa-github"></i>{' '}
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
      <div className="projectBoxContainer">
        <h2 className="projects-other">Other Projects</h2>
        {projectsArr}
      </div>
    </section>
  )
}

export default Projects
