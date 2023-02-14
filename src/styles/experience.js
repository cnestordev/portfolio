import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 12%;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Right = styled.div`
  width: 40%;

  h2#title {
    font-size: 3.2rem;
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

  /* h2#title::after {
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
  } */

  @media (max-width: 1320px) {
    h2#title {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 1075px) {
    width: 40%;

    h2#title {
      font-size: 3.2rem;
    }
  }

  @media (max-width: 915px) {
    h2#title {
      font-size: 2.6rem;
    }

    h2#title::after {
      width: 94%;
      height: 3.4vh;
    }
  }

  @media (max-width: 650px) {
    width: 68%;

    h2#title {
      text-align: center;
    }

    h2#title::after {
      left: 15%;
      width: 70%;
    }
  }

  @media (max-width: 485px) {
    width: 85%;
  }

  @media (max-width: 385px) {
    h2#title::after {
      width: 88%;
      left: 7%;
    }
  }
`

export const InfoR = styled.div`
  margin: 3% auto;
  line-height: 1.2;
  display: block;

  i {
    color: #909090;
  }

  p {
    color: #555555;
    display: inline;
    margin-left: 2%;
  }

  @media (max-width: 915px) {
    p {
      font-size: 0.89rem;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }

`

export const InfoL = styled.div`
  margin: 3% auto;
  line-height: 1.2;
  display: none;

  i {
    color: #909090;
  }

  p {
    color: #555555;
    display: inline;
    margin-left: 2%;
  }

  @media (max-width: 915px) {
    p {
      font-size: 0.89rem;
    }
  }

  @media (max-width: 650px) {
    display: block;
  }

`

export const Icons = styled.div`
  background: #1b1b1b;
  border-radius: 7px;
  position: static;
  display: flex;
  margin: 2% auto;
  justify-content: space-between;
  z-index: -1;
  top: 2%;
  left: -4%;
  padding: 1% 2%;
  width: 95%;

  @media (max-width: 915px) {
    padding: 1% 2%;
  }
`

export const Icon = styled.div`
  width: 20%;
  text-align: center;
  margin: 5% 0.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.8em;
    margin-top: 5%;
    color: rgb(119, 119, 119);
  }

  i {
    font-size: 2.5rem;
    display: inline;
  }

  @media (max-width: 1320px) {
    i {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 915px) {
    i {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.5rem;
    }
  }

  @media (max-width: 650px) {
    margin: 1% 0.5%;

    i {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 385px) {
    i {
      font-size: 1.9rem;
    }
  }
`

export const FAIcon = styled.i`
  color: #61dafb;
`

export const SVGIcon = styled.img`
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

  @media (max-width: 1320px) {
    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 915px) {
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`

export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2#title {
    font-size: 3.2rem;
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

  @media (max-width: 1075px) {
    width: 48%;
  }

  @media (max-width: 915px) {
    width: 55%;
  }

  @media (max-width: 650px) {
    width: 73%;
    margin-bottom: 5%;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 485px) {
    width: 90%;
    margin-bottom: 5%;
  }
`

export const Video = styled.video`
  width: 100%;
  border-radius: 5px;
  margin-top: 2%;
`

export const HeaderL = styled.h2`
  display: none;

  @media (max-width: 650px) {
    display: block;
    flex-direction: columns;
  }
`

export const HeaderR = styled.h2`
  display: block;

  @media (max-width: 650px) {
    display: none;
    flex-direction: columns;
  }
`
