import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid rgb(219, 219, 219);
  border-radius: 8px;
  margin: 0;
  padding: 1%;
  text-align: center;
  width: 25%;

  h3#title {
    font-size: 1.4rem;
    margin: 0.5rem auto;
  }

  p {
    font-size: 0.9rem;
    margin: 3% auto;
  }

  img {
    width: 70%;
    border-radius: 5px;
    width: 100%;
  }
`

export const Cta = styled.div`
  button {
    border: 1px solid #313131;
    background: transparent;
    border-radius: 4px;
    color: #313131;
    cursor: pointer;
    padding: 2%;
    font-size: 0.9rem;
    width: 25%;
    transition: 300ms;
    text-decoration: none;
    margin: 1% 2%;
  }

  button:hover {
    background: #000;
    color: #fff;
    transition: 300ms;
  }
`
