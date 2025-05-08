import styled from 'styled-components'

export const GameTitle = styled.h2`
  font-size: 32px;
  text-align: center;
`

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 64px;
  padding: 16px 32px;

  @media (min-width: 700px) {
    // Для планшетов и выше
    padding: 32px 64px;
  }

  @media (min-width: 1100px) {
    // Для планшетов и выше
    padding: 64px 128px;
  }
`

export const LineWrapper = styled.div`
  width: 100%;
  height: 70vh;
`
export const Name = styled.span`
  color: ${(props) => props.color};
`
