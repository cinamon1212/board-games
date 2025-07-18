import React from 'react'

import { GameStatistics, GameStatisticsValueWrapper } from './styles'

import { GameScoreStatistic, ScoreStatsKeys } from '@/types'
import { getColorOrGradient } from '@/helpers'

type GameStatisticsValueProps = {
  value: GameScoreStatistic
  valueTitle: ScoreStatsKeys
}

const GameStatisticsValue = ({ value, valueTitle }: GameStatisticsValueProps) => {
  const { color: colorOrGradient } = getColorOrGradient(value.color)

  return (
    <GameStatisticsValueWrapper>
      {valueTitle} - <GameStatistics $color={colorOrGradient}>{value.score}</GameStatistics>
    </GameStatisticsValueWrapper>
  )
}

export default GameStatisticsValue
