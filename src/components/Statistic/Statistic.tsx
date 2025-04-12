import React from 'react'
import { StatisticList, StatisticTitle, StatisticWrapper } from './styles'
import { StatisticItem } from './StatisticItem'
import { StatisticProps } from './types'

export const Statistic = ({ statisticArr }: StatisticProps) => {
  return (
    <StatisticWrapper>
      <StatisticTitle>Статистика</StatisticTitle>
      <StatisticList>
        {statisticArr.map((statistic) => (
          <StatisticItem {...statistic} key={statistic.name} />
        ))}
      </StatisticList>
    </StatisticWrapper>
  )
}
