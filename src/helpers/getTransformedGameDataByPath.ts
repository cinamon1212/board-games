import { getGameByPath } from './getGameByPath'
import { transformDatasetsToStatistic } from './transformDatasetsToStatistic'
import { transformGamesForChart } from './transformGamesForChart'

export const getTransformedGameDataByPath = (path: string) => {
  const { title, games, isBoolean } = getGameByPath(path)

  if (isBoolean) {
    return { title }
  } else {
    const { gamesArithmeticMean, ...gamesForChart } = transformGamesForChart(games)

    const { statisticArr, name, arithmeticMean, color } = transformDatasetsToStatistic(gamesForChart.datasets)

    return { title, statisticArr, gamesForChart, name, arithmeticMean, color, gamesArithmeticMean }
  }
}
