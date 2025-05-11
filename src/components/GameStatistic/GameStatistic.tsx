import React from 'react'

import { GameStatisticsWrapper } from './styles'

import { ScoreStats, ScoreStatsKeys } from '@/types'

import GameStatisticsValue from './GameStatisticsValue'

type GameStatisticProps = {
  scoreStats: ScoreStats
  gamesCount: number
}

export const GameStatistic = ({ scoreStats, gamesCount }: GameStatisticProps) => {
  const valuesArr: Array<ScoreStatsKeys> = ['max', 'min', 'avg', 'count']

  const countValue = {
    color: 'white',
    score: gamesCount,
  }

  return (
    <GameStatisticsWrapper>
      {valuesArr.map((val) => {
        const value = val === 'count' ? countValue : scoreStats[val]

        if (value && val !== 'count') {
          return <GameStatisticsValue value={value} valueTitle={val} key={val} />
        }
      })}
    </GameStatisticsWrapper>
  )
}
