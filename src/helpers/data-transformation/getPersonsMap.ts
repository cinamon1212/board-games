import { PersonsMap, PersonsMapGames, Player } from '@/types'
import { SingleGameResult } from '@/types'
import { getArithmeticMean } from '../statistics/getArithmeticMean'

/**
 * Преобразует карту игроков с результатами в расширенную карту со статистикой.
 * Вычисляет среднее значение, минимум, максимум, процент побед для каждого игрока.
 *
 * @param map - Карта игроков с массивами результатов
 * @returns Объект с расширенной картой игроков и максимальным количеством партий
 */
export const getPersonsMap = <T extends SingleGameResult>(map: PersonsMapGames<T>) => {
  const personsMap: PersonsMap<T> = {}
  let idx = 0

  let maxScoresCount = 0

  for (const person in map) {
    const name = person as Player

    if (map[name]) {
      const { scores, winCount, ...fields } = map[name]
      const isBoolean = typeof scores[0] === 'boolean'
      const numScores = scores as Array<number>

      personsMap[name] = {
        scores,
        scoresCount: scores.length,
        avg: isBoolean ? undefined : getArithmeticMean(numScores),
        minScore: isBoolean ? undefined : Math.min(...numScores),
        maxScore: isBoolean ? undefined : Math.max(...numScores),
        winRate: `${Math.ceil((winCount / scores.length) * 100)}%`,
        ...fields,
      }

      if (scores.length > maxScoresCount) maxScoresCount = scores.length
    }

    idx++
  }

  return { personsMap, maxScoresCount }
}

