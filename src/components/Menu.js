import React from 'react'

import { GradientText } from '../styles'
import { Container, Item } from '../styles/menu'

const Menu = ({ visible, toggler }) => {
  return (
    <Container display={visible}>
      <Item>
        <a onClick={toggler} href="#home">
          Home
        </a>
      </Item>
      <Item>
        <a onClick={toggler} href="#skills">
          Skills
        </a>
      </Item>
      <Item>
        <a onClick={toggler} href="#projects">
          Projects
        </a>
      </Item>
      <Item>
        <a onClick={toggler} href="#about">
          About
        </a>
      </Item>
      <Item>
        <a
          href="#"
          onClick={() => {
            toggler()
            window.open(
              'https://drive.google.com/file/d/1z7zZGpYL3Ux_B2waldxKgwhlQOY3Gwpk/view?usp=sharing'
            )
          }}
          href="#"
        >
          <GradientText>Resume</GradientText>
        </a>
      </Item>
    </Container>
  )
}

export default Menu
