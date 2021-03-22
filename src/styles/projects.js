import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  margin-top: 6%;

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
`
