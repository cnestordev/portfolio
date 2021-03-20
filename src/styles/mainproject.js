import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  width: 35%;

  h2#title {
    font-size: 4rem;
    font-weight: 700;
    background: linear-gradient(23deg, #00ff95, #0066ff, #ff00ff);
    background-size: 400% 400%;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: AnimationName 12s ease infinite;
    -moz-animation: AnimationName 12s ease infinite;
    animation: AnimationName 12s ease infinite;
    margin: 2% 0;
  }

  h2#title::after {
    content: '';
    display: block;
    width: 95%;
    height: 5vh;
    background: black;
    position: absolute;
    top: 15%;
    z-index: -1;
    left: 0%;
    transform: rotate3d(11, -3, 1, 45deg);
  }
`

export const Info = styled.div`
  margin: 2% auto;

  i {
    color: #909090;
  }

  p {
    color: #555555;
    display: inline;
    margin-left: 2%;
  }
`

export const Icons = styled.div`
  background: #1b1b1b;
  border-radius: 7px;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: -1;
  top: 2%;
  left: -4%;
  padding: 1% 3%;
  width: 95%;
`

export const Icon = styled.div`
  width: 20%;
  text-align: center;
  display: inline-block;
  margin: 5% 0.5%;

  p {
    font-size: 0.8em;
    margin-top: 5%;
    color: rgb(119, 119, 119);
  }

  i {
    font-size: 2.5rem;
    display: inline;
  }
`

export const JavaScript = styled.i`
  color: #fddf17;
`

export const ReactIcon = styled.i`
  color: #61dafb;
`

export const Node = styled.img`
  width: 54%;
`

export const Mongo = styled.img`
  width: 58%;
`

export const About = styled.div`
  color: #272727;
  background: #eeeded;
  border-radius: 8px;
  padding: 4%;
  position: relative;

  h3 {
    color: inherit;
    font-size: 1.5rem;
    margin: 2% auto;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
    color: inherit;
    padding: 1% 0 6%;
  }
`

export const Cta = styled.div`
  text-align: right;

  button {
    border: 1px solid #313131;
    background: transparent;
    border-radius: 4px;
    color: #313131;
    cursor: pointer;
    padding: 2%;
    font-size: 1.2rem;
    width: 50%;
    transition: 300ms;
    text-decoration: none;
    margin: 3% 1%;
  }

  button:hover {
    background: #000;
    color: #fff;
    transition: 300ms;
  }

  button#github {
    width: 20%;
    margin-right: 0;
  }
`

export const GitContainer = styled.span`
  display: flex;
  justify-content: space-evenly;
`

export const ExtIcon = styled.i`
  margin-left: 2%;
  font-size: 1rem;
  color: rgb(119, 119, 119);
`

export const Right = styled.div`
  width: 70%;
`
