import React from 'react'

import { GradientText } from '../styles'

import {
  Section,
  Container,
  SkillsFlexContainer,
  Left,
  Right,
  Stack,
  Other,
  SVG,
  Misc,
} from '../styles/skills'

function Skills() {
  return (
    <Section id="skills">
      <Container>
        <h3 id="header">
          Tech Skills
        </h3>
        <SkillsFlexContainer>
          <Left>
            <img src="./dev.png" alt="man on desk using computer" />
          </Left>
          <Right>
            <Stack>
              <h3>Frontend</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React</p>
              <p>Redux</p>
              <p>Angular</p>
              <p>Vue</p>
              <p>Cypress</p>
              <p>Axios</p>
              <p>EJS</p>
              <p>Bootstrap</p>
              <p>Styled-Components</p>
            </Stack>
            <Stack>
              <h3>Backend</h3>
              <p>Node</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>MySQL</p>
              <p>PassportJS</p>
              <p>REST</p>
            </Stack>
            <Other>
              <h3>Other</h3>
              <Misc>
                <p>Git</p>
                <p>NPM</p>
                <p>Whimsical</p>
                <p>Agile Project Management</p>
                <p>Figma</p>
                <p>Notion</p>
                <p>Adobe Photoshop</p>
                <p>Deployment</p>
              </Misc>
            </Other>
          </Right>
        </SkillsFlexContainer>
      </Container>
    </Section>
  )
}

export default Skills
