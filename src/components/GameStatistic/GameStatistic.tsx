import React from 'react'
import { GameStatisticsWrapper, GameStatisticsValueWrapper, GameStatistics } from './styles'

import { getTransformedDataFromNumGames } from '@/helpers'
import { PlayerScores } from '@/types'

type NumGamePageProps = {
  numGames: PlayerScores<number>
}

export const GameStatistic = ({ numGames }: NumGamePageProps) => {
  const { scoreStats } = getTransformedDataFromNumGames(numGames)

  return (
    <GameStatisticsWrapper>
      <GameStatisticsValueWrapper>
        max - <GameStatistics color={scoreStats.max.color}>{scoreStats.max.maxGameScore}</GameStatistics>
      </GameStatisticsValueWrapper>
      <GameStatisticsValueWrapper>
        avg - <GameStatistics color={scoreStats.avg.color}>{scoreStats.avg.avgGameScore}</GameStatistics>
      </GameStatisticsValueWrapper>
      <GameStatisticsValueWrapper>
        min - <GameStatistics color={scoreStats.min.color}>{scoreStats.min.minGameScore}</GameStatistics>
      </GameStatisticsValueWrapper>
    </GameStatisticsWrapper>
  )
}
