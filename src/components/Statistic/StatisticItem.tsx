import React from 'react'
import { StatisticItemLi, StatisticTitleName } from './styles'
import { Statistic } from '@/types'
import { StatisticParagraph } from './StatisticParagraph'

export const StatisticItem = ({ scores, name, color, arithmeticMean }: Statistic) => {
  return (
    <StatisticItemLi>
      <StatisticTitleName color={color}>{name}</StatisticTitleName>
      <StatisticParagraph text={'Количество игр:'} value={scores.length} />
      <StatisticParagraph text={'Среднее арифметическое:'} value={arithmeticMean} />
    </StatisticItemLi>
  )
}
