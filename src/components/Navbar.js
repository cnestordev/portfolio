import React from 'react'

import { Header, Nav, LogoContainer, Icon } from '../styles/navbar'
import Hamburger from './Hamburger'

function Navbar({ toggler, visible }) {
  return (
    <Header>
      <Nav>
        <LogoContainer>
          <p id="LogoLetters">NC</p>
        </LogoContainer>
        <Hamburger visible={visible} toggler={toggler} />
        {/* <Icon onClick={() => toggler()}>
          <i class="fas fa-bars"></i>
        </Icon> */}
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
