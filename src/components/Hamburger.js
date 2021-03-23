import React from 'react'

import { Container, Top, Bottom } from '../styles/hamburger'

const Hamburger = ({ visible, toggler }) => {
  return (
    <Container onClick={toggler}>
      <Top isOpen={visible}></Top>
      <Bottom isOpen={visible}></Bottom>
    </Container>
  )
}

export default Hamburger
