import styled from 'styled-components'

export const Section = styled.section`
  background: ghostwhite;
  position: relative;
`
export const Container = styled.div`
  padding: 0 10%;

  h3#header {
    color: var(--black);
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    margin: 2.5rem 0;
    margin-bottom: 3rem;
  }

  @media (max-width: 1320px) {
    h3#header {
      font-size: 3.2rem;
    }
  }
`

export const SkillsFlexContainer = styled.div`
  display: flex;
`

export const Left = styled.div`
  width: 50%;

  img {
    width: 80%;
  }
`

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
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
`

export const Misc = styled.div`
  display: flex;

  p {
    margin: 2%;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const SVG = styled.svg`
  position: absolute;
`
