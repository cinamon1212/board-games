import styled from 'styled-components'

export const GamesListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  list-style: none;
  width: 100%;

  @media (min-width: 480px) {
    gap: 48px;
  }

  @media (min-width: 700px) {
    gap: 48px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    gap: 64px;
  }

    @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
