import { getGameByPath } from './getGameByPath'
import { transformDatasetsToStatistic } from './transformDatasetsToStatistic'
import { transformGamesForChart } from './transformGamesForChart'
import { PlayerScores } from '../types';

export const getTransformedGameDataByPath = (path: string) => {
  const { title, games, isBoolean } = getGameByPath(path)

  if (isBoolean) {
    return { title }
  } else {
    const numGames = games as PlayerScores<number>
    const { personGamesStatistics, gamesForChart } = transformGamesForChart(numGames)

    const { statisticArr, playerWithMaxArithmeticMean } = transformDatasetsToStatistic(gamesForChart.datasets)

    return { title, statisticArr, gamesForChart, playerWithMaxArithmeticMean, personGamesStatistics }
  }
}
