import React from 'react'

import { Container, Cta } from '../styles/projectbox'

const ProjectBox = ({ project, handleOpen }) => {
  return (
    <Container>
      <h3 id="title">{project.name}</h3>
      <p>{project.description}</p>
      <img alt="thumbnail of the project" src={project.photoUrl} />
      <Cta>
        <button onClick={() => handleOpen(project.url)}>Visit</button>
        <button onClick={() => handleOpen(project.github)}>
          <i className="fab fa-github"></i>
        </button>
      </Cta>
    </Container>
  )
}

export default ProjectBox
