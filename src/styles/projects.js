import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  margin-top: 6%;
  padding-bottom: 12%;

  h3#header {
    color: var(--black);
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    margin: 6% 0 5%;
  }

  @media (max-width: 1320px) {
    h3#header {
      font-size: 3.2rem;
    }
  }

  @media (max-width: 1220px) {
    h3#header {
      font-size: 3.1rem;
    }
  }

  @media (max-width: 1010px) {
    h3#header {
      font-size: 3rem;
    }
  }

  @media (max-width: 915px) {
    h3#header {
      font-size: 2.7rem;
    }
  }

  @media (max-width: 385px) {
    h3#header {
      font-size: 2.3rem;
    }
  }
`

export const Other = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  flex-wrap: wrap;

  h2#other {
    color: var(--black);
    font-size: 2.2rem;
    font-weight: 700;
    flex-basis: 100%;
    padding: 2% 0;
  }

  @media (max-width: 915px) {
    h2#other {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 510px) {
    justify-content: center;

    h2#other {
      text-align: center;
      margin: 2%;
    }
  }
`

export const Svg = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`
