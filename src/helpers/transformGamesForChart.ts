import { DataSets, Player, PlayerScores } from '@/types'
import { createLabelsForChart } from './createLabelsForChart'
import { COLORS } from '@/data'

export const transformGamesForChart = (games: PlayerScores) => {
  const map: Partial<Record<Player, Array<number>>> = {}

  const datasets: DataSets = []

  games.forEach((game) => {
    for (const person in game) {
      const name = person as Player
      const score = game[name]

      if (typeof score === 'number') {
        if (Array.isArray(map[name])) {
          map[name].push(score)
        } else map[name] = [0, score]
      }
    }
  })

  let personCount = 0;

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

  return { labels, datasets }
}
