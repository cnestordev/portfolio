import styled from 'styled-components'

export const Section = styled.section`
  background: #fff7e4;
  position: relative;

  @media (max-width: 821px) {
    padding: 10% 0;
  }

  @media (max-width: 617px) {
    padding: 10% 0 15%;
  }

  @media (max-width: 505px) {
    padding: 10% 0 25%;
  }

  @media (max-width: 470px) {
    padding: 10% 0 35%;
  }

  @media (max-width: 445px) {
    padding: 10% 0 50%;
  }

  @media (max-width: 410px) {
    padding: 10% 0 65%;
  }

  @media (max-width: 390px) {
    padding: 10% 0 75%;
  }

  @media (max-width: 375px) {
    padding: 10% 0 85%;
  }

  @media (max-width: 360px) {
    padding: 10% 0 100%;
  }
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

  @media (max-width: 385px) {
    font-size: 2.3rem;
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

  @media (max-width: 560px) {
    padding: 2%;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1040px) {
    position: relative;
    justify-content: center;
  }
`

export const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

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

  @media (max-width: 1040px) {
    position: absolute;
    width: 100%;
    z-index: 2;
    color: #2e2e2e;
    padding-top: 1%;
  }
`

export const Right = styled.div`
  width: 45%;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    opacity: 0.9;
  }

  @media (max-width: 1040px) {
    width: 48%;
    opacity: 0.4;
  }

  @media (max-width: 755px) {
    width: 60%;
  }

  @media (max-width: 616px) {
    width: 75%;
  }
  @media (max-width: 543px) {
    width: 100%;
  }
`
