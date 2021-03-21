import React from 'react'

import { Header, Nav, LogoContainer } from '../styles/navbar'

function Navbar() {
  return (
    <Header>
      <Nav>
        <LogoContainer>
          <p id="LogoLetters">NC</p>
        </LogoContainer>
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
