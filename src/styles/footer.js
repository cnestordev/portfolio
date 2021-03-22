import styled from 'styled-components'

export const Container = styled.section`
  background: #121212;
  display: flex;
  justify-content: center;
`

export const Item = styled.div`
  color: #fff;
  margin: 0 2%;
  width: 17%;
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
`
