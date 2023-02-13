import styled from 'styled-components'

export const Header = styled.header`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #121212;
  z-index: 3;
  position: fixed;
  padding: 2.5rem 0;
`

export const Nav = styled.nav`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 80%;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  ul {
    display: flex;
  }

  ul li {
    padding: 1rem 1.2rem;
  }

  ul li:hover {
    background: #0f3624;
    border-radius: 5px;
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

  @media (max-width: 630px) {
    ul {
      display: none;
    }
  }
`

export const Logo = styled.div`
  padding: 1%;
  transform: scale(0.8);
  width: 4em;

  img {
    width: 100%;
  }

  /* @media (max-width: 420px) {
    width: 20%;
  }

  @media (max-width: 420px) {
    width: 20%;
  } */
`

export const Icon = styled.span`
  display: none;
  align-items: center;
  justify-content: center;

  i {
    font-size: 2rem;
    color: #8a8a8a;
  }

  @media (max-width: 630px) {
    display: flex;
  }
`
