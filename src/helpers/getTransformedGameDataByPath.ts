import { getGameByPath } from './getGameByPath'
import { transformDatasetsToStatistic } from './transformDatasetsToStatistic'
import { transformGamesForChart } from './transformGamesForChart'
import { getNumGameStatistics } from './getNumGameStatistics';
import { getGamesByPersonsMap } from './getGamesByPersonsMap';

import { PlayerScores } from '../types';
import { getPersonBoolGamesStatistics } from './getPersonBoolGamesStatistics';

export const getTransformedGameDataByPath = (path: string) => {
  const { title, games, isBoolean } = getGameByPath(path)

  if (isBoolean) {
    const boolGames = games as PlayerScores<boolean>

    const map = getGamesByPersonsMap<boolean>(boolGames)

    const boolGamesStatisticMap = getPersonBoolGamesStatistics(map)

    return { title, boolGamesStatisticMap }
  } else {
    const numGames = games as PlayerScores<number>

    const { personGamesStatistics, gamesForChart } = transformGamesForChart(numGames)

    const { statisticArr, playerWithMaxArithmeticMean } = transformDatasetsToStatistic(gamesForChart.datasets)

    const numGameStatistics = getNumGameStatistics(numGames)

    return { title, statisticArr, gamesForChart, playerWithMaxArithmeticMean, personGamesStatistics, numGameStatistics }
  }
}
