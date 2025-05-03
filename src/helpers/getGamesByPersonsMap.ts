import { GamesByPersonsMap, Player, PlayerScores, SingleGameResult } from '@/types'

export const getGamesByPersonsMap = <T extends SingleGameResult>(
  games: PlayerScores<T>,
): GamesByPersonsMap<Array<T>> => {
  const map: GamesByPersonsMap<Array<T>> = {}

  games.forEach((game) => {
    for (const person in game) {
      const name = person as Player
      const score = game[name]

      if (score) {
        let currentScores = map[name]
        const isArray = Array.isArray(currentScores)

        if (currentScores) {
          if (typeof score === 'boolean') {
            if (isArray) {
              currentScores.push(score)
            } else currentScores = [score]
          } else if (typeof score === 'number') {
            if (isArray) {
              currentScores.push(score)
            } else currentScores = [0 as T, score]
          }
        }
      }
    }
  })

  return map
}
