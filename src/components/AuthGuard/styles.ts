import { BREAK_POINTS } from '@/constants'
import styled from 'styled-components'

export const AuthGuardStyles = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: auto;

  @media (min-width: ${BREAK_POINTS.sm}) {
    gap: 48px;
    padding: 48px;
  }

  @media (min-width: ${BREAK_POINTS.lg}) {
    gap: 64px;
    padding: 64px;
  }
`
