import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 5rem;
  background: #fff7e4;
  position: relative;
`

export const Header = styled.h2`
  color: #484848;
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin: 2.5rem 0;
  margin-bottom: 0.5rem;

  @media (max-width: 1320px) {
    font-size: 2.8rem;
  }
`

export const Subheader = styled.h4`
  background: #f5e7c5;
  color: #555;
  border-radius: 5px;
  font-size: 1.1rem;
  width: max-content;
  margin: 0 auto 2%;
  text-align: center;
  padding: 1% 1.5%;
  display: flex;
  align-items: center;

  i {
    margin-right: 2%;
  }

  @media (max-width: 1320px) {
    font-size: 1rem;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  width: 50%;

  p#aboutText {
    font-size: 1.3rem;
    line-height: 2;
    color: var(--black);
  }

  @media (max-width: 1320px) {
    p#aboutText {
      font-size: 1.1rem;
      padding: 1%;
    }
  }
`

export const Right = styled.div`
  width: 45%;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`

export const Svg = styled.svg`
  position: absolute;
  top: -78%;
  left: 0;
`
