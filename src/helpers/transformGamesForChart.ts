import { PlayerScores } from '@/types'

import { createLabelsForChart } from './createLabelsForChart'
import { getPersonsMapGames } from './getPersonsMapGames'
import { createDatasets } from './createDatasets'
import { getPersonsMap } from './getPersonsMap'

export const transformGamesForChart = (games: PlayerScores<number>) => {
  const map = getPersonsMapGames<number>(games)

  const { personsMap, maxScoresCount } = getPersonsMap<number>(map)

  const datasets = createDatasets(personsMap)

  const labels = createLabelsForChart(maxScoresCount)

  const gamesForChart = {
    datasets,
    labels,
  }

  return { gamesForChart, personsMap }
}
