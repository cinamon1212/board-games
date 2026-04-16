import { Games, GameInfo } from '@/types'

/**
 * Находит игру по URL пути (slug).
 * Извлекает slug из пути и сравнивает с game.slug.
 *
 * @param path - URL путь игры (например, "/games/cascadia" или "/cascadia")
 * @param games - Массив игр для поиска (по умолчанию пустой массив)
 * @returns Объект игры или undefined, если игра не найдена
 */
export const getGameByPath = (
  path: string,
  games: Games = [],
): GameInfo | undefined => {
  if (!Array.isArray(games)) {
    console.warn('[getGameByPath] games is not an array:', games)
    return undefined
  }

  if (!path || typeof path !== 'string') {
    console.warn('[getGameByPath] Invalid path:', path)
    return undefined
  }

  // Извлекаем slug из пути (последний сегмент) и декодируем URL
  const rawSlug = path.split('/').pop()
  const slug = rawSlug ? decodeURIComponent(rawSlug) : undefined

  if (!slug) {
    console.warn('[getGameByPath] Could not extract slug from path:', path)
    return undefined
  }

  const found = games.find((game: GameInfo) => {
    return game && game.slug === slug
  })

  return found
}
