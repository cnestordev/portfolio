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
              'https://docs.google.com/document/d/e/2PACX-1vS4gSYB7GyURCc0olwfCV9gnTx5B38OINY-yL3Kd4WAkIbdm0w6t8E5BrqjYOhcJZ3uj_UcqjziUbmr/pub'
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
