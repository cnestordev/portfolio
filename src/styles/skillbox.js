import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  display: inline-block;
  background: white;
  padding: 2rem;
  text-align: center;
  position: relative;
  width: 20%;

  h4 {
    font-size: 1.6rem;
    background: #393636;
    color: var(--green);
    margin: 0;
    padding: 0.5rem 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 2vh;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    padding: 0.1rem 0;
  }
`
