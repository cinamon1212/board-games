import { GamesByPersonsMap, Player, ScoreStats } from '@/types'

export const getGameScoreStats = (map: GamesByPersonsMap<Array<number>>): ScoreStats => {
  // Для вычисления min и max
  let minScore = Infinity
  let maxScore = -Infinity
  let minColor = 'blue'
  let maxColor = 'blue'

  // Для вычисления среднего
  let totalScores = 0
  let totalGames = 0

  for (const person in map) {
    const name = person as Player

    map[name]?.forEach((score) => {
      totalGames++

      if (score) {
        totalScores += score

        if (score < minScore) {
          minScore = score
        }
        if (score > maxScore) {
          maxScore = score
        }
      }
    })
  }

  const avgScore = totalGames > 0 ? Math.floor(totalScores / totalGames) : 0

  return {
    min: {
      color: minColor,
      score: minScore !== Infinity ? minScore : 0,
    },
    avg: {
      color: 'white',
      score: avgScore,
    },
    max: {
      color: maxColor,
      score: maxScore !== -Infinity ? maxScore : 0,
    },
  }
}
