import { Games, GameInfo } from '@/types'

/**
 * Сортирует игры по количеству сыгранных партий.
 * Сначала идут игры с результатами (от большего к меньшему),
 * затем игры без результатов.
 * ВСЕ игры сохраняются в списке.
 *
 * @param games - Массив игр
 * @returns Отсортированный массив игр
 */
export const sortGamesByCount = (games: Games): Games => {
  if (!Array.isArray(games)) {
    console.warn('[sortGamesByCount] games is not an array:', games)
    return []
  }

  return [...games].sort((a: GameInfo, b: GameInfo) => {
    const aCount = a?.games?.length ?? 0
    const bCount = b?.games?.length ?? 0

    // Сначала игры с результатами, затем без результатов
    if (aCount === 0 && bCount > 0) return 1
    if (aCount > 0 && bCount === 0) return -1

    // Внутри групп сортируем по убыванию количества
    return bCount - aCount
  })
}
