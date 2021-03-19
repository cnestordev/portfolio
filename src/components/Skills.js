import React from 'react'

import { Container } from '../styles'

function Skills() {
  return (
    <section
      style={{ background: 'ghostwhite', position: 'relative' }}
      className="skillsContainer"
      id="skills"
    >
      <Container>
        <h3 className="skillsHeader subheader">
          Tech<span className="techText">Skills</span>
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
      <svg className="border" viewBox="0 0 1440 320">
        <path
          fill="#f8f8ff"
          fill-opacity="1"
          d="M0,128L26.7,117.3C53.3,107,107,85,160,90.7C213.3,96,267,128,320,138.7C373.3,149,427,139,480,144C533.3,149,587,171,640,170.7C693.3,171,747,149,800,154.7C853.3,160,907,192,960,170.7C1013.3,149,1067,75,1120,64C1173.3,53,1227,107,1280,112C1333.3,117,1387,75,1413,53.3L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </section>
  )
}

export default Skills
