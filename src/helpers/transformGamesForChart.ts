import { DataSets, Player, PlayerScores } from '@/types'
import { createLabelsForChart } from './createLabelsForChart'
import { COLORS } from '@/data'
import { getGamesByPersonsMap } from './getGamesByPersonsMap'

export const transformGamesForChart = (games: PlayerScores) => {
  const { map, gamesArithmeticMean } = getGamesByPersonsMap(games)

  const datasets: DataSets = []

  let personCount = 0

  for (const person in map) {
    const name = person as Player

    datasets.push({
      label: name,
      data: map[name] || [],
      fill: false,
      tension: 0.3,
      borderColor: COLORS[personCount],
    })

    personCount++
  }

  const labels = createLabelsForChart(games.length)

  return { labels, datasets, gamesArithmeticMean }
}
