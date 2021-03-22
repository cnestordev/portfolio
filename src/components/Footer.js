import React from 'react'

import { GradientText } from '../styles'
import { Container, Item } from '../styles/footer'

const Footer = () => {
  const handleClick = site => {
    window.open(site)
  }

  return (
    <Container>
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
      <Item onClick={() => handleClick('mailto:nestor@nestordev.com')}>
        <i class="far fa-envelope"></i>
        <p>
          nestor@<GradientText weight="normal">nestordev.com</GradientText>
        </p>
      </Item>
    </Container>
  )
}

export default Footer