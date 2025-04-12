import styled from 'styled-components'

export const StatisticList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 92px 64px;
  list-style: none;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const StatisticItemLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`
export const StatisticP = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Value = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => props?.color || 'white'};
`

export const StatisticTitleName = styled.h3`
  color: ${(props) => props.color};
  font-size: 24px;
  margin-bottom: 8px;
`
export const StatisticWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 92px;
  width: 100%;
`

export const StatisticTitle = styled.h2`
  font-size: 32px;
`