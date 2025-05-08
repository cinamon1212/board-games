import { COLORS } from '@/data'
import { GamesByPersonsMap, Player, PlayerScores, SingleGameResult } from '@/types'

export const getGamesByPersonsMap = <T extends SingleGameResult>(games: PlayerScores<T>): GamesByPersonsMap<T> => {
  const map: GamesByPersonsMap<T> = {}
  let idx = 0

  games.forEach((game) => {
    for (const person in game) {
      const name = person as Player
      const score = game[name]

      if (score) {
        if (map[name] && Object.keys(map[name]).length) {
          map[name].scores.push(score)
        } else {
          const scores = typeof score === 'number' ? [0 as T, score] : [score]

          map[name] = {
            scores: scores,
            color: COLORS[idx],
          }

          idx++
        }
      }
    }
  })
  console.log(map)
  return map
}
