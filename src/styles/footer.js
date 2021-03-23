import styled from 'styled-components'

export const Container = styled.section`
  background: #121212;
  display: flex;
  justify-content: center;

  @media (max-width: 861px) {
    justify-content: space-around;
  }

  @media (max-width: 590px) {
    flex-direction: column;
  }
`

export const Item = styled.div`
  color: #fff;
  margin: 0 2%;
  display: flex;
  align-items: center;

  i {
    font-size: 1.2rem;
    margin-right: 5%;
  }

  p {
    display: inline-block;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 590px) {
    margin: 1% auto;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
