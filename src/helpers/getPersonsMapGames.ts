import { PersonsMapGames, Player, PlayerScores, SingleGameResult } from '@/types'

export const getPersonsMapGames = <T extends SingleGameResult>(games: PlayerScores<T>): PersonsMapGames<T> => {
  // заполняем map: ключи - игроки, значения - массив score
  const map: PersonsMapGames<T> = {}

  games.forEach((game) => {
    const values = Object.values(game)
    const max = typeof values[0] === 'number' ? Math.max(...(values as Array<number>)) : null

    for (const person in game) {
      const name = person as Player
      const score = game[name]

      if (score !== undefined) {
        const isWin = (typeof score === 'boolean' && score) || (typeof score === 'number' && score === max)

        if (map[name] && Object.keys(map[name]).length) {
          const currentWinCount = map[name].winCount
          const winCount = isWin ? currentWinCount + 1 : currentWinCount

          map[name].scores.push(score)
          map[name].winCount = winCount
        } else {
          const winCount = isWin ? 1 : 0

          map[name] = {
            scores: [score],
            winCount,
          }
        }
      }
    }
  })

  return map
}
