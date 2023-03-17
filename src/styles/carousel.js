import styled, { keyframes } from 'styled-components'

export const Root = styled.div`
  border: 3px solid #d8d8d8;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 1%;
`

export const Header = styled.div`
  padding: 2%;
`

export const Btn = styled.div`
  background: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 50px;
  width: 10px;
  height: 10px;
  display: inline-block;
  margin: 0 0.75%;
`

export const Body = styled.div`
  margin: 1% auto;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

export const Img = styled.img`
  width: 90%;
  border-radius: 3px;
  display: ${props => (props.loaded ? 'block' : 'none')};
`

export const Info = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  padding: 2%;
  width: 90%;
  margin: 1% auto;

  p {
    color: #505050;
    font-size: 0.9rem;
  }
`

export const NavBtns = styled.div`
  text-align: center;
`

export const NavBtn = styled.span`
  border: 1px solid ${props => (props.current ? '#11dcb6' : '#121212')};
  border-radius: 50px;
  background: ${props => (props.current ? '#11dcb6' : '#121212')};
  cursor: pointer;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 2%;
  -webkit-tap-highlight-color: transparent;
`

export const Arrow = styled.span`
  width: 4%;
  cursor: pointer;
  color: ${props => (props.disabled ? '#c3c3c3' : '#000')};
  -webkit-tap-highlight-color: transparent;
`

export const Animate = keyframes`
  0%{background-position:0% 48%}
  50%{background-position:100% 53%}
  100%{background-position:0% 48%}
`

export const Box = styled.div`
  width: 90%;
  height: 500px;
  background: linear-gradient(271deg, #dbdbdb, #c3c3c3);
  background-size: 400% 400%;

  -webkit-animation: ${Animate} 1s ease infinite;
  -moz-animation: ${Animate} 1s ease infinite;
  animation: ${Animate} 1s ease infinite;
  border-radius: 3px;
  display: ${props => (props.loaded ? 'none' : 'block')};
`
