import { BREAK_POINTS } from '@/constants'
import styled from 'styled-components'

export const GameStatisticsWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-family: 'Open Sans', sans-serif;
  color: #696969;
  font-size: 14px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAK_POINTS.sm}) {
    gap: 12px;
  }
`

type GameStatisticsProps = {
  $color: string
}

export const GameStatistics = styled.div<GameStatisticsProps>`
  padding: 8px;
  border-radius: 40%;
  background: #261e16;
  min-width: 40px;
  text-align: center;

  ${({ $color }) =>
    $color &&
    `
      background: ${$color};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  
      background-clip: text;
      color: transparent;
    `}
`

export const GameStatisticsValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
