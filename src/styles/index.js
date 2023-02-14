import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 10%;
  position: relative;

  #header {
    @media (max-width: 650px) {
      margin-bottom: 7% !important;
    }
  }

  @media (max-width: 915px) {
    padding: 0 5%;
  }
`

export const GradientText = styled.span`
  background: linear-gradient(36deg, #0fff9b, #137cff);
  background-size: 200% 200%;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: ${props => (props.weight === 'normal' ? '500' : 'bold')};
`
