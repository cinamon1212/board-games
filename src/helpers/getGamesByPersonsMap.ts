import { GamesByPersonsMap, Player, PlayerScores, SingleGameResult } from '@/types'

export const getGamesByPersonsMap = <T extends SingleGameResult>(
  games: PlayerScores<T>,
): GamesByPersonsMap<Array<T>> => {
  const map: GamesByPersonsMap<Array<T>> = {}

  games.forEach((game) => {
    for (const person in game) {
      const name = person as Player
      const score = game[name]

      if (typeof score === 'boolean') {
        if (Array.isArray(map[name])) {
          map[name].push(score)
        } else map[name] = [score]
      } else if (typeof score === 'number') {
        if (Array.isArray(map[name])) {
          map[name].push(score)
        } else map[name] = [0 as T, score]
      }
    }
  })

  return map
}
