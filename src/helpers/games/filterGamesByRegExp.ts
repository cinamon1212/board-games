import { Games, GameInfo } from '@/types'

/**
 * Фильтрует игры по регулярному выражению (для поиска по названию).
 * Поиск выполняется без учета регистра.
 *
 * @param games - Массив всех игр
 * @param regExpStr - Строка регулярного выражения для поиска
 * @returns Отфильтрованный массив игр, названия которых соответствуют регулярному выражению
 */
export const filterGamesByRegExp = (games: Games, regExpStr: string): Games => {
  if (!Array.isArray(games)) {
    return []
  }

  if (!regExpStr || typeof regExpStr !== 'string') {
    return games
  }

  try {
    const regex = new RegExp(regExpStr, 'i')

    const filtered = games.filter((game: GameInfo) => {
      if (!game || typeof game.title !== 'string') {
        return false
      }
      return regex.test(game.title)
    })

    return filtered
  } catch {
    return games
  }
}
