import { GamesByPersonsMap, Player } from '@/types'

export const getPersonGamesStatistics = (map: GamesByPersonsMap<Array<number>>) => {
  let gamesCount = 0
  let sumScore = 0
  let personMinScore = Infinity
  let personMaxScore = 0

  for (const person in map) {
    const name = person as Player
    const scores = map[name]

    scores?.forEach((score) => {
      if (score) {
        gamesCount++
        sumScore += score

        if (score < personMinScore) personMinScore = score
        if (score > personMaxScore) personMaxScore = score
      }
    })
  }

  const personArithmeticMean = (sumScore / gamesCount).toFixed()

  return { personArithmeticMean, personMaxScore, personMinScore }
}
