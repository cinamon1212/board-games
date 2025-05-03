import { PlayerScores } from '@/types'
import { transformGamesForChart } from './transformGamesForChart'
import { transformDatasetsToStatistic } from './transformDatasetsToStatistic'
import { getNumGameStatistics } from './getNumGameStatistics'

export const getTransformedDataFromNumGames = (numGames: PlayerScores<number>) => {
  const { personGamesStatistics, gamesForChart } = transformGamesForChart(numGames)

  const { statisticArr, playerWithMaxArithmeticMean } = transformDatasetsToStatistic(gamesForChart.datasets)

  const numGameStatistics = getNumGameStatistics(numGames)

  return { statisticArr, gamesForChart, playerWithMaxArithmeticMean, personGamesStatistics, numGameStatistics }
}
