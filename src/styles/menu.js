import styled from 'styled-components'

export const Container = styled.div`
  background: #121212;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  color: white;
  flex-direction: column;
  padding: 0% 5% 5%;
  position: fixed;
  top: 8.5%;
  right: 0%;
  display: ${props => (props.display ? 'block' : 'none')};
  width: 30%;
  z-index: 5;

  @media (max-width: 390px) {
    padding: 5% 8% 5%;
    width: 35%;
  }

  @media (max-width: 330px) {
    padding: 5% 10% 5%;
  }
`

export const Item = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 30% auto;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`
