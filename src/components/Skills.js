import React, { useState } from 'react'

import { Container } from '../styles'
import SkillBox from './SkillBox'

function Skills() {
  const [skillSet] = useState([
    {
      header: 'Frontend',
      skills: [
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'Bootstrap',
        'Styled-Components',
        'EJS',
      ],
    },
    {
      header: 'Backend',
      skills: ['Node', 'Express', 'MongoDB', 'Postgres'],
    },
    {
      header: 'Other',
      skills: ['NPM', 'Git', 'Whimsial', 'Figma', 'Notion'],
    },
  ])

  const skillArr = skillSet.map(skill => {
    return <SkillBox skill={skill} />
  })

  return (
    <section
      style={{ background: 'ghostwhite' }}
      className="skillsContainer"
      id="skills"
    >
      <Container>
        <h3 className="skillsHeader subheader">Skills</h3>
        <div className="skillSetContainer">{skillArr}</div>
      </Container>
    </section>
  )
}

export default Skills
