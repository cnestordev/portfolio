import styled from 'styled-components'

export const Section = styled.section`
  background: var(--gradientColor);
  background: var(--gradient);
  background-position: center;
  background-size: cover;
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
    color: var(--black);
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

  h3::after {
    content: '';
    height: 4vh;
    width: 106%;
    background: #393636;
    position: absolute;
    z-index: -1;
    left: -3%;
    top: -5%;
    transform: rotate3d(11, -3, 1, 45deg);
  }

  a {
    border: 2px solid var(--black);
    border-radius: 50px;
    background: transparent;
    color: var(--black);
    cursor: pointer;
    padding: 1rem 1.8rem;
    font-size: 1rem;
    transition: 200ms;
    text-decoration: none;
  }

  a:hover {
    background: var(--black);
    color: #fff;
    transition: 200ms;
  }
`
