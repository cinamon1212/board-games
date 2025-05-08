import { PlayerScore, PlayerScores } from '@/types'

import { createLabelsForChart } from './createLabelsForChart'
import { getGamesByPersonsMap } from './getGamesByPersonsMap'
import { createDatasets } from './createDatasets'

export const transformGamesForChart = (games: PlayerScores<number>) => {
  const map = getGamesByPersonsMap<number>(games)

  const datasets = createDatasets(map)

  const labels = createLabelsForChart(games.length)

  const gamesForChart = {
    datasets,
    labels,
  }

  return { gamesForChart, map }
}
