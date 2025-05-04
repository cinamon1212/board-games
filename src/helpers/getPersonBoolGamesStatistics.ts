import { BoolGamesStatisticMap, GamesByPersonsMap, Player } from '@/types'

// Считаем статистику игроков для игр победа/поражение

export const getPersonBoolGamesStatistics = (map: GamesByPersonsMap<Array<boolean>>) => {
  const mapClone: GamesByPersonsMap<Array<boolean>> = structuredClone(map)

  const boolGamesStatisticMap: BoolGamesStatisticMap = {}

  for (const person in mapClone) {
    const name = person as Player

    if (mapClone[name]) {
      let winCount = 0

      mapClone[name].forEach((result) => {
        if (result) winCount++
      })

      const winRate = Math.ceil(Number(((winCount / mapClone[name].length) * 100).toFixed(1))) + '%'

      boolGamesStatisticMap[name] = {
        games: mapClone[name],
        gamesCount: mapClone[name].length,
        winRate,
        winCount
      }
    }
  }

  return boolGamesStatisticMap
}
