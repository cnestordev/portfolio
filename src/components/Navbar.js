import React from 'react'

import { GradientText } from '../styles'
import { Header, Nav, Logo } from '../styles/navbar'
import Hamburger from './Hamburger'
import brand from '../assets/newlogo.svg'

function Navbar({ toggler, visible }) {
  const handleClick = () => {
    window.open(
      'https://drive.google.com/file/d/1SjenGKi2gbPH6NK9UO5ub0aiHCzVaKrz/view?usp=sharing'
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
