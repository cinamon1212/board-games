import { ScoreStats, StatisticArr } from '@/types'

import { useMemo } from 'react'

export const useScoreStatistics = (statisticArr: StatisticArr): ScoreStats => {
  return useMemo(() => {
    if (!statisticArr.length) {
      return {
        min: { color: '', minGameScore: 0 },
        max: { color: '', maxGameScore: 0 },
        avg: { color: 'white', avgGameScore: 0 },
      }
    }

    // Для вычисления min и max
    let minScore = Infinity
    let maxScore = -Infinity
    let minColor = ''
    let maxColor = ''

    // Для вычисления среднего
    let totalScores = 0
    let totalGames = 0

    statisticArr.forEach(({ scores, color }) => {
      scores.forEach((score) => {
        totalGames++

        if (score) {
          totalScores += score

          if (score < minScore) {
            minScore = score
            minColor = color
          }
          if (score > maxScore) {
            maxScore = score
            maxColor = color
          }
        }
      })
    })

    const avgScore = totalGames > 0 ? Math.floor(totalScores / totalGames) : 0

    return {
      min: {
        color: minColor,
        minGameScore: minScore !== Infinity ? minScore : 0,
      },
      avg: {
        color: 'white',
        avgGameScore: avgScore,
      },
      max: {
        color: maxColor,
        maxGameScore: maxScore !== -Infinity ? maxScore : 0,
      },
    }
  }, [statisticArr])
}
