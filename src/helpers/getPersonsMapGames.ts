import { PersonsMapGames, Player, PlayerScores, SingleGameResult } from '@/types'

export const getPersonsMapGames = <T extends SingleGameResult>(games: PlayerScores<T>): PersonsMapGames<T> => {
  // заполняем map: ключи - игроки, значения - массив score
  const map: PersonsMapGames<T> = {}

  games.forEach((game) => {
    for (const person in game) {
      const name = person as Player
      const score = game[name]

      if (score) {
        if (map[name] && Object.keys(map[name]).length) {
          map[name].push(score)
        } else {
          const scores = typeof score === 'number' ? [0 as T, score] : [score]
          map[name] = scores
        }
      }
    }
  })

  return map
}
