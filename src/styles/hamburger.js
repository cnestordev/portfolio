import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Top = styled.span`
  width: 40px;
  border-top: 5px solid #585858;
  display: block;
  transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'none')};
  transition: 300ms;
`

export const Bottom = styled.span`
  width: 40px;
  border-top: 5px solid #585858;
  display: block;
  margin-top: ${props => (props.isOpen ? '-5px' : '10px')};
  transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'none')};
  transition: 300ms;
`
