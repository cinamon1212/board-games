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

  @media (max-width: 500px) {
    gap: 12px;
  }
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
