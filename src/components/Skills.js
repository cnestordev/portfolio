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

  // const skillArr = skillSet.map(skill => {
  //   return <SkillBox skill={skill} />
  // })

  return (
    <section
      style={{ background: 'ghostwhite' }}
      className="skillsContainer"
      id="skills"
    >
      <Container>
        <h3 className="skillsHeader subheader">
          Tec <span className="techText">Skills</span>
        </h3>
        <div className="skills-flex">
          <div className="skills-left side">
            <img className="devImg" src="./dev.png" />
          </div>
          <div className="skills-right side">
            <div className="frontend tech">
              <h3>Frontend</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>EJS</p>
              <p>Bootstrap</p>
              <p>Styled-Components</p>
            </div>
            <div className="backend tech">
              <h3>Backend</h3>
              <p>Node</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>Postgres</p>
              <p>PassportJS</p>
              <p>REST</p>
            </div>
            <div className="other">
              <h3>Other</h3>
              <div className="misc">
                <p>Git</p>
                <p>NPM</p>
                <p>Whimsical</p>
                <p>Figma</p>
                <p>Notion</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
