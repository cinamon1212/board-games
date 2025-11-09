import { Games } from '@/types'

/**
 * Фильтрует игры по регулярному выражению (для поиска по названию).
 * Поиск выполняется без учета регистра.
 *
 * @param games - Массив всех игр
 * @param regExpStr - Строка регулярного выражения для поиска
 * @returns Отфильтрованный массив игр, названия которых соответствуют регулярному выражению
 */
export const filterGamesByRegExp = (games: Games, regExpStr: string) => {
  const regex = new RegExp(regExpStr, 'i')

  return games.filter((game) => regex.test(game.title))
}

