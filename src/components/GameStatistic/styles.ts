import styled from 'styled-components'

export const GameStatisticsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: -50px;
  font-family: 'Geist Mono', 'Geist Mono Fallback';
  color: #696969;
  font-size: 14px;
`

export const GameStatistics = styled.div`
  padding: 8px;
  border-radius: 40%;
  background: #261e16;
  min-width: 40px;
  text-align: center;
  color: ${(props) => props.color};
`

export const GameStatisticsValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
