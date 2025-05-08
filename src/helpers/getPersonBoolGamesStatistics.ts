import { BoolGamesStatisticMap, GamesByPersonsMap, Player } from '@/types'

// Считаем статистику игроков для игр победа/поражение

export const getPersonBoolGamesStatistics = (map: GamesByPersonsMap<boolean>) => {
  const mapClone: GamesByPersonsMap<boolean> = structuredClone(map)

  const boolGamesStatisticMap: BoolGamesStatisticMap = {}

  for (const person in mapClone) {
    const name = person as Player
    const currentItem = mapClone[name]

    if (currentItem) {
      let winCount = 0
      const { scores, color } = currentItem

      scores.forEach((result) => {
        if (result) winCount++
      })

      const winRate = Math.ceil(Number(((winCount / scores.length) * 100).toFixed(1))) + '%'

      boolGamesStatisticMap[name] = {
        games: scores,
        gamesCount: scores.length,
        winRate,
        winCount,
        color
      }
    }
  }

  return boolGamesStatisticMap
}
