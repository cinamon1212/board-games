import { Player, PlayerScores } from '@/types'

export const getNumGameStatistics = (games: PlayerScores<number>) => {
  const numGames = games as PlayerScores<number>

  let minGameScore = Infinity
  let maxGameScore = 0
  let gamesCount = 0
  let scoresSum = 0

  numGames.forEach((game) => {
    for (const person in game) {
      gamesCount++

      const name = person as Player
      const score = game[name]

      if (score) {
        scoresSum += score

        if (minGameScore > score) minGameScore = score
        if (maxGameScore < score) maxGameScore = score
      }
    }
  })

  const gameArithmeticMean = (scoresSum / gamesCount).toFixed()

  return { minGameScore, maxGameScore, gameArithmeticMean }
}
