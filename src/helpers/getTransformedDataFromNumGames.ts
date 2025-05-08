import { PlayerScores } from '@/types'

import { transformGamesForChart } from './transformGamesForChart'
import { getGameScoreStats } from './getGameScoreStats'

export const getTransformedDataFromNumGames = (numGames: PlayerScores<number>) => {
  const { gamesForChart, map } = transformGamesForChart(numGames)

  const scoreStats = getGameScoreStats(map)

  return {
    gamesForChart,
    scoreStats,
  }
}
