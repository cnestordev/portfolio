import React from 'react'

import { Header, Nav, LogoContainer, Logo } from '../styles/navbar'
import Hamburger from './Hamburger'

function Navbar({ toggler, visible }) {
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
        </ul>
      </Nav>
    </Header>
  )
}

export default Navbar
