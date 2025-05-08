import { PersonsMap, Player, ScoreStats } from '@/types'

export const getGameScoreStats = (map: PersonsMap<number>): ScoreStats => {
  // Для вычисления min и max
  let minScore = Infinity
  let maxScore = -Infinity
  let minColor = ''
  let maxColor = ''

  // Для вычисления среднего
  let totalScores = 0
  let totalGames = 0

  for (const person in map) {
    const name = person as Player
    const currentItem = map[name]

    currentItem?.scores?.slice(1).forEach((score) => {
      totalGames++

      if (score) {
        totalScores += score

        if (score < minScore) {
          minScore = score
          minColor = currentItem.color
        }
        if (score > maxScore) {
          maxScore = score
          maxColor = currentItem.color
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
