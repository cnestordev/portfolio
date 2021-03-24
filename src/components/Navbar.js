import React from 'react'

import { GradientText } from '../styles'
import { Header, Nav, LogoContainer, Logo } from '../styles/navbar'
import Hamburger from './Hamburger'

function Navbar({ toggler, visible }) {
  const handleClick = () => {
    window.open(
      'https://drive.google.com/file/d/1vFcS6hJX8rvNxkvm9zlQSxP5K1ijJmMB/view?usp=sharing'
    )
  }

  return (
    <Header>
      <Nav>
        <Logo>
          <LogoContainer>
            <p id="LogoLetters">NC</p>
          </LogoContainer>
        </Logo>
        <Hamburger visible={visible} toggler={toggler} />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <GradientText>
              <a onClick={() => handleClick()} href="#">
                Resume
              </a>
            </GradientText>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Navbar
