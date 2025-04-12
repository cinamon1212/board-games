import React from 'react'
import { StatisticItemLi, StatisticP, StatisticTitleName, Value } from './styles'
import { getArithmeticMean } from '@/helpers'
import { Statistic } from '@/types'
import { StatisticParagraph } from './StatisticParagraph'

export const StatisticItem = ({ scores, name, color }: Statistic) => {
  const arithmeticMean = getArithmeticMean(scores)

  return (
    <StatisticItemLi>
      <StatisticTitleName color={color}>{name}</StatisticTitleName>
      <StatisticParagraph text={'Количество игр:'} value={scores.length} />
      <StatisticParagraph text={'Среднее арифметическое:'} value={arithmeticMean} />
    </StatisticItemLi>
  )
}
