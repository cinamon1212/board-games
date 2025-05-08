import React from 'react'

import { GameStatistics, GameStatisticsValueWrapper } from './styles'

import { GameScoreStatistic, ScoreStatsKeys } from '@/types'

type GameStatisticsValueProps = {
  value: GameScoreStatistic
  valueTitle: ScoreStatsKeys
}

const GameStatisticsValue = ({ value, valueTitle }: GameStatisticsValueProps) => {
  return (
    <GameStatisticsValueWrapper>
      {valueTitle} - <GameStatistics color={value.color}>{value.score}</GameStatistics>
    </GameStatisticsValueWrapper>
  )
}

export default GameStatisticsValue
