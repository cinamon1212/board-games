import { PLAYERS_BY_NAME } from '@/data'
import { PersonsMapGames, Player, PlayerScores, SingleGameResult } from '@/types'
import { getPlayerColor } from '../players/getPlayerColor'
import { sortPlayerName } from '../players/sortPlayerName'

/**
 * Преобразует массив результатов партий в карту игроков с их результатами.
 * Для каждой партии определяет победителя (максимальный результат для числовых игр,
 * true для булевых игр) и подсчитывает количество побед.
 *
 * @param games - Массив результатов партий
 * @returns Карта игроков с массивами результатов, количеством побед и цветами
 */
export const getPersonsMapGames = <T extends SingleGameResult>(games: PlayerScores<T>): PersonsMapGames<T> => {
  const map: PersonsMapGames<T> = {}

  games.forEach((game) => {
    const values = Object.values(game)
    const max = typeof values[0] === 'number' ? Math.max(...(values as Array<number>)) : null

    for (const person in game) {
      if (person === 'params') return

      const name = person as Player
      const sortedName = sortPlayerName(name)

      const color = getPlayerColor(sortedName)

      const score = game[name]
      const fields = PLAYERS_BY_NAME[sortedName] || { color }

      if (score !== undefined) {
        // Определяем победителя: для числовых игр - максимальный результат, для булевых - true
        const isWin = (typeof score === 'boolean' && score) || (typeof score === 'number' && score === max)

        if (map[sortedName] && Object.keys(map[sortedName]).length) {
          const currentWinCount = map[sortedName].winCount
          const winCount = isWin ? currentWinCount + 1 : currentWinCount

          map[sortedName].scores.push(score)
          map[sortedName].winCount = winCount
        } else {
          const winCount = isWin ? 1 : 0

          map[sortedName] = {
            scores: [score],
            winCount,
            ...fields,
          }
        }
      }
    }
  })

  return map
}
