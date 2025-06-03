import { BREAK_POINTS } from '@/constants'
import styled from 'styled-components'

export const GameTitle = styled.h1`
  font-size: 32px;
  text-align: start;

  @media (max-width: ${BREAK_POINTS.md}) {
    text-align: center;
  }

  @media (max-width: ${BREAK_POINTS.sm}) {
    font-size: 24px;
  }
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
  padding: 32px 32px;

  @media (min-width: ${BREAK_POINTS.md}) {
    padding: 32px 64px;
  }

  @media (min-width: ${BREAK_POINTS.xl}) {
    padding: 64px 128px;
  }
`

export const LineWrapper = styled.div`
  width: 100%;
  height: 70vh;

  @media (max-width: ${BREAK_POINTS.sm}) {
    height: 40vh;
  }
`
export const BarWrapper = styled.div`
  min-height: 70vh;
  height: 70vh;
  width: 100%;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex-direction: column;

  @media (max-width: ${BREAK_POINTS.md}) {
    align-items: center;
  }
`
