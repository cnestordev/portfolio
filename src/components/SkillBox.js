import React from 'react'

import { Container } from '../styles/skillbox'

const SkillBox = ({ skill }) => {
  return (
    <Container>
      <h4>{skill.header}</h4>
      {skill.skills.map(sk => {
        return <p>{sk}</p>
      })}
    </Container>
  )
}

export default SkillBox
