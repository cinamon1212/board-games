import { getGameByPath } from './getGameByPath'
import { transformDatasetsToStatistic } from './transformDatasetsToStatistic'
import { transformGamesForChart } from './transformGamesForChart'

export const getTransformedGameDataByPath = (path: string) => {
  const { title, games, isBoolean } = getGameByPath(path)

  if (isBoolean) {
    return { title }
  } else {
    const gamesForChart = transformGamesForChart(games)

    const { statisticArr, playerWithMaxArithmeticMean } = transformDatasetsToStatistic(gamesForChart.datasets)

    const { name, arithmeticMean, color } = playerWithMaxArithmeticMean

    return { title, statisticArr, gamesForChart, name, arithmeticMean, color }
  }
}
