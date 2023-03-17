import styled from 'styled-components'

export const Section = styled.section`
  background: ghostwhite;
  position: relative;
`
export const Container = styled.div`
  padding: 3% 7%;

  h3#header {
    color: var(--black);
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
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

  @media (max-width: 1010px) {
    h3#header {
      font-size: 2.7rem;
    }
  }

  @media (max-width: 785px) {
    height: 55vh;
  }

  @media (max-width: 585px) {
    height: 135vh;
  }

  @media (max-width: 445px) {
    height: 121vh;
  }

  @media (max-width: 385px) {
    h3#header {
      font-size: 2.3rem;
    }
  }
`

export const SkillsFlexContainer = styled.div`
  display: flex;
`

export const Left = styled.div`
  width: 50%;

  img {
    width: 85%;
  }

  @media (max-width: 785px) {
    position: absolute;
    top: 29%;
    left: 5%;
  }

  @media (max-width: 700px) {
    opacity: 0.7;
  }

  @media (max-width: 585px) {
    top: 20%;
    left: 25%;
    opacity: 1;
  }

  @media (max-width: 445px) {
    top: 5%;
    left: 20%;
    width: 60%;
  }
`

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 785px) {
    position: absolute;
    right: 10%;
  }

  @media (max-width: 700px) {
    width: 60%;
  }

  @media (max-width: 585px) {
    width: 80%;
    right: 10%;
    top: 35%;
    opacity: 0.98;
  }

  @media (max-width: 585px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 445px) {
    width: 80%;
    right: 10%;
    top: 19%;
    opacity: 1;
  }
`

export const Stack = styled.div`
  border-radius: 8px;
  background: #fff;
  width: 40%;
  padding: 4%;
  line-height: 1.5;
  box-sizing: border-box;
  margin: 0 2%;

  h3 {
    font-size: 1.6rem;
    font-weight: bold;
    color: #2c2c2c;
  }

  @media (max-width: 1320px) {
    h3 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1220px) {
    width: 45%;
    padding-left: 5%;

    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1010px) {
    width: 46%;
    padding-left: 5%;

    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 915px) {
    width: 46%;
    padding-left: 5%;

    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 785px) {
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 585px) {
    margin: 2% auto;
    width: 60%;
  }

  @media (max-width: 445px) {
    width: 80%;
  }
`

export const Other = styled.div`
  border-radius: 8px;
  background: #fff;
  width: 84%;
  padding: 4%;
  line-height: 1.3;
  box-sizing: border-box;
  margin: 2%;

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #2c2c2c;
  }

  @media (max-width: 1320px) {
    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1220px) {
    width: 94%;

    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1010px) {
    width: 96%;

    h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 445px) {
    width: 80%;
  }
`

export const Misc = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    margin: 2%;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: 445px) {
    flex-direction: column;
  }
`

export const SVG = styled.svg`
  position: absolute;
`
