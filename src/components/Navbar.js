import React from 'react'

import { GradientText } from '../styles'
import { Header, Nav, Logo } from '../styles/navbar'
import Hamburger from './Hamburger'
import brand from '../assets/newlogo.png'

function Navbar({ toggler, visible }) {
  const handleClick = () => {
    window.open(
      'https://docs.google.com/document/d/e/2PACX-1vS4gSYB7GyURCc0olwfCV9gnTx5B38OINY-yL3Kd4WAkIbdm0w6t8E5BrqjYOhcJZ3uj_UcqjziUbmr/pub'
    )
  }

  return (
    <Header>
      <Nav>
        <Logo>
          <img src={brand} />
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
