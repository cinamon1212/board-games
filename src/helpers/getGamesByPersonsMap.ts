import { Player, PlayerScores } from '@/types'

export const getGamesByPersonsMap = (games: PlayerScores) => {
  const map: Partial<Record<Player, Array<number>>> = {}

  let gamesCount = 0
  let sumScore = 0

  games.forEach((game) => {
    for (const person in game) {
      const name = person as Player
      const score = game[name]

      if (typeof score === 'number') {
        gamesCount++
        sumScore += score

        if (Array.isArray(map[name])) {
          map[name].push(score)
        } else map[name] = [0, score]
      }
    }
  })

  const gamesArithmeticMean = (sumScore / gamesCount).toFixed()

  return { map, gamesArithmeticMean }
}
