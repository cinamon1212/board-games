import React from 'react'
import { Value, StatisticP } from './styles'
import { StatisticParagraphProps } from './types'

export const StatisticParagraph = ({ text, value, color }: StatisticParagraphProps) => {
  return (
    <StatisticP>
      {text} <Value color={color}>{value}</Value>
    </StatisticP>
  )
}
