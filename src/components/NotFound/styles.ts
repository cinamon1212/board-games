import { BREAK_POINTS } from '@/constants'
import styled from 'styled-components'

export const NotFoundTitle = styled.h1`
  margin: 180px auto;
  color: whitesmoke;
  font-size: 18px;
  text-align: center;

  @media (min-width: ${BREAK_POINTS.sm}) {
    font-size: 20px;
  }

  @media (min-width: ${BREAK_POINTS.md}) {
    font-size: 22px;
  }

  @media (min-width: ${BREAK_POINTS.lg}) {
    font-size: 24px;
  }
`
