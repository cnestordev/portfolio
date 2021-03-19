import React, { useState } from 'react'

import { Container } from '../styles'
import MainProject from './MainProject'
import ProjectBox from './ProjectBox'

function Projects() {
  const [projectsSet] = useState([
    {
      name: 'Budget Sharing',
      description: 'track of expenses shared by roommates',
      photoUrl: './accounting.gif',
      url: 'https://ncervapp.herokuapp.com/',
      github: 'https://github.com/cnestordev/accounting-app',
    },
    {
      name: 'Reddit Posts',
      description: 'View Reddit posts from any domain',
      photoUrl: './reddit.gif',
      url: 'https://reddit-generator.herokuapp.com/',
      github: 'https://github.com/cnestordev/reddit-generator',
    },
    {
      name: 'Avatar Inputs',
      description: 'Replaces radio buttons with avatar icons',
      photoUrl: './avatar.gif',
      url: 'https://avatar-input.herokuapp.com/',
      github: 'https://github.com/cnestordev/avatarInputs',
    },
  ])

  const handleOpen = site => {
    window.open(site)
  }

  const projectsArr = projectsSet.map(project => {
    return <ProjectBox handleOpen={handleOpen} project={project} />
  })

  return (
    <section
      style={{ marginTop: '6%' }}
      className="projectsContainer"
      id="projects"
    >
      <Container>
        <h3 className="projectsHeader subheader">Projects</h3>
        <MainProject handleOpen={handleOpen} />
        <div className="projectBoxContainer">
          <h2 className="projects-other">
            <span className="gradientText">Other</span> Projects
          </h2>
          {projectsArr}
        </div>
      </Container>
    </section>
  )
}

export default Projects
