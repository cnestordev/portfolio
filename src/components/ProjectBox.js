import React from 'react'

const ProjectBox = ({ project, handleOpen }) => {
  return (
    <div className="projectBox" style={{ width: '25%' }}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <img
        alt="thumbnail of the project"
        className="projectImg"
        src={project.photoUrl}
        style={{ width: '100%' }}
      />
      <div>
        <button
          onClick={() => handleOpen(project.url)}
          className="project-btn sm"
        >
          Visit
        </button>
        <button
          onClick={() => handleOpen(project.github)}
          className="project-btn sm"
        >
          <i className="fab fa-github"></i>
        </button>
      </div>
    </div>
  )
}

export default ProjectBox
