import React from 'react'

import { GameStatisticsWrapper } from './styles'

import { ScoreStats, ScoreStatsKeys } from '@/types'

import GameStatisticsValue from './GameStatisticsValue'

type GameStatisticProps = {
  scoreStats: ScoreStats
}

export const GameStatistic = ({ scoreStats }: GameStatisticProps) => {
  const valuesArr: Array<ScoreStatsKeys> = ['max', 'min', 'avg']

  return (
    <GameStatisticsWrapper>
      {valuesArr.map((value) => (
        <GameStatisticsValue value={scoreStats[value]} valueTitle={value} key={value}/>
      ))}
    </GameStatisticsWrapper>
  )
}
