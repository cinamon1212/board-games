import { BREAK_POINTS } from '@/constants'
import styled from 'styled-components'

export const GamesListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
  list-style: none;
  width: 100%;

  @media (min-width: ${BREAK_POINTS.sm}) {
    gap: 48px;
  }

  @media (min-width: ${BREAK_POINTS.md}) {
    gap: 48px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${BREAK_POINTS.lg}) {
    gap: 64px;
  }

    @media (min-width: ${BREAK_POINTS.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
