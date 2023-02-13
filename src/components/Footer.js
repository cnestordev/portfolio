import React from 'react'

import { GradientText } from '../styles'
import { Container, Item } from '../styles/footer'

const Footer = () => {
  const handleClick = site => {
    window.open(site)
  }

  return (
    <Container>
      <Item
        onClick={() =>
          handleClick(
            'https://docs.google.com/document/d/e/2PACX-1vS4gSYB7GyURCc0olwfCV9gnTx5B38OINY-yL3Kd4WAkIbdm0w6t8E5BrqjYOhcJZ3uj_UcqjziUbmr/pub'
          )
        }
      >
        <i class="far fa-file"></i>
        <p>
          <GradientText>resume</GradientText>
        </p>
      </Item>
      <Item onClick={() => handleClick('https://github.com/cnestordev')}>
        <i class="fab fa-github"></i>
        <p>
          <GradientText>/</GradientText>cnestordev
        </p>
      </Item>
      <Item
        onClick={() => handleClick('https://www.linkedin.com/in/cnestordev/')}
      >
        <i class="fab fa-linkedin-in"></i>
        <p>
          <GradientText>/</GradientText>in<GradientText>/</GradientText>
          cnestordev
        </p>
      </Item>
      <Item onClick={() => handleClick('mailto:nestorcdev@gmail.com')}>
        <i class="far fa-envelope"></i>
        <p>
        nestorcdev@<GradientText weight="normal">gmail.com</GradientText>
        </p>
      </Item>
    </Container>
  )
}

export default Footer
