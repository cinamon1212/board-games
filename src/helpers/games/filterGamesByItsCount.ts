import { Games } from '@/types'

/**
 * Фильтрует игры, оставляя только те, у которых есть хотя бы одна сыгранная партия.
 * Сортирует игры по убыванию количества партий.
 *
 * @param games - Массив всех игр
 * @returns Отфильтрованный и отсортированный массив игр
 */
export const filterGamesByItsCount = (games: Games) =>
  games
    .filter(({ games: gamesList }) => gamesList.length)
    .sort((firstGame, secondGame) =>
      firstGame.games.length < secondGame.games.length ? 1 : -1,
    )
