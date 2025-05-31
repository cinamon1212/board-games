import styled from 'styled-components'

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 32px;

  @media (min-width: 480px) {
    gap: 48px;
    padding: 48px;
  }

  @media (min-width: 900px) {
    gap: 64px;
    padding: 64px;
  }
`
