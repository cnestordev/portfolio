import React, { useState } from 'react'

import { Container } from '../styles'
import MainProject from './MainProject'
import ProjectBox from './ProjectBox'

import { projects } from '../util/projects'
import { GradientText } from '../styles'
import { Section, Other } from '../styles/projects'

function Projects() {
  const [projectsSet] = useState(projects)

  const handleOpen = site => {
    window.open(site)
  }

  const projectsArr = projectsSet.map(project => {
    return <ProjectBox handleOpen={handleOpen} project={project} />
  })

  return (
    <Section id="projects">
      <Container>
        <h3 id="header">Projects</h3>
        <MainProject handleOpen={handleOpen} />
        <Other>
          <h2 id="other">
            <GradientText>Other</GradientText> Projects
          </h2>
          {projectsArr}
        </Other>
      </Container>
    </Section>
  )
}

export default Projects
