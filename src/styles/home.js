import styled from 'styled-components'
import bg from '../assets/poly.svg'

export const Section = styled.section`
  background: #121212;
  background-image: ${`url(${bg})`};
  background-size: cover;
  background-repeat: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    background: linear-gradient(36deg, #0fff9b, #137cff);
    background-size: 200% 200%;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    margin-bottom: 1.7rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #fff;
    margin-top: 0;
    margin-bottom: 2rem;
    font-weight: 500;
    position: relative;
    z-index: 2;
  }

  /* h3::after {
    content: '';
    height: 4vh;
    width: 106%;
    background: #393636;
    position: absolute;
    z-index: -1;
    left: -3%;
    top: -5%;
    transform: rotate3d(11, -3, 1, 45deg);
  } */

  a {
    border: 2px solid var(--black);
    border-radius: 50px;
    background: var(--black);
    color: #fff;
    cursor: pointer;
    padding: 1rem 1.8rem;
    font-size: 1rem;
    transition: 200ms;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  a:hover {
    background: #0f3624;
    border-color: #0f3624;
    transition: 200ms;
  }

  @media (max-width: 1320px) {
    h1 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 1.35rem;
    }

    a {
      padding: 0.95rem 1.5rem;
    }
  }

  @media (max-width: 385px) {
    h1 {
      font-size: 2.2rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    a {
      padding: 0.75rem 1rem;
      font-size: 1rem;
    }
  }
`
