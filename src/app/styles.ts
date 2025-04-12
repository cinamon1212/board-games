import styled from 'styled-components'

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
  padding: 48px;
`
export const Name = styled.span`
  color: ${(props) => props.color};
`
