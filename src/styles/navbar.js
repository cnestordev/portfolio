import styled from 'styled-components'

export const Header = styled.header`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6vh;
  background: #121212;
  z-index: 3;
  position: fixed;
  padding: 0.65rem 0;
`

export const Nav = styled.nav`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 80%;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  ul {
    display: flex;
  }

  ul li {
    margin: 1rem 1.2rem;
  }

  ul li:last-of-type {
    margin-right: 0;
  }

  ul li a {
    color: inherit;
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
  }

  ul li a:hover {
    color: var(--green);
    transition: 500ms;
  }
`

export const LogoContainer = styled.div`
  border: 2px solid #fff;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  display: inline-block;
  padding: 1.5rem;
  position: relative;

  p#LogoLetters {
    color: inherit;
    font-family: 'Sen';
    padding: 0;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover,
  p#LogoLetters:hover {
    color: var(--gradientColor);
    border-color: var(--gradientColor);
    transition: 200ms;
  }
`
