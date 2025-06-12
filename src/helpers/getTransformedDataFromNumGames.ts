import { PlayerScores } from '@/types'

import { transformGamesForChart } from './transformGamesForChart'
import { getGameScoreStats } from './getGameScoreStats'
import { transformDataForTable } from './transformDataForTable'

export const getTransformedDataFromNumGames = (numGames: PlayerScores<number>) => {
  const { gamesForChart, personsMap } = transformGamesForChart(numGames)

  const scoreStats = getGameScoreStats(personsMap)

  const tableDataArr = transformDataForTable(personsMap, 'avg')

  return {
    gamesForChart,
    scoreStats,
    tableDataArr
  }
}
