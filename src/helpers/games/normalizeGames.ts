import { Games, GameInfo, GameTitles, PlayerScores } from '@/types'

/**
 * Тип для сырой игры из Firebase (новый формат Record<string, Game>)
 * Ключ — slug, значение — объект игры
 */
export type FirebaseGame = {
  title?: string
  imgPath?: string
  games?: PlayerScores<number | boolean>
  isBoolean?: boolean
  params?: Array<{ key: string; values: string[] }>
}

/**
 * Проверяет, является ли значение валидным объектом игры
 */
const isValidGameObject = (value: unknown): value is FirebaseGame => {
  return typeof value === 'object' && value !== null
}

/**
 * Нормализует данные из Firebase в формат Games
 *
 * Новый формат данных:
 * {
 *   boolean: Record<string, FirebaseGame>
 *   numeric: Record<string, FirebaseGame>
 * }
 *
 * Где ключ — это slug игры
 *
 * @param booleanData - Данные булевых игр из Firebase (results/boolean)
 * @param numericData - Данные числовых игр из Firebase (results/numeric)
 * @returns Нормализованный массив игр в формате Games
 */
export const normalizeGames = (
  booleanData: unknown,
  numericData: unknown,
): Games => {
  const normalizedGames: GameInfo[] = []

  // Обрабатываем булевы игры (Record<string, FirebaseGame>)
  if (booleanData !== null && typeof booleanData === 'object') {
    for (const [slug, game] of Object.entries(booleanData)) {
      if (!isValidGameObject(game)) {
        console.warn('[normalizeGames] Skipping invalid game:', slug, game)
        continue
      }

      // Проверяем обязательные поля
      if (!game.title || typeof game.title !== 'string') {
        console.warn('[normalizeGames] Skipping game without title:', slug)
        continue
      }

      normalizedGames.push({
        slug,
        title: game.title as GameTitles,
        imgPath: typeof game.imgPath === 'string' ? game.imgPath : '',
        games: Array.isArray(game.games) ? game.games : [],
        isBoolean: true,
        params: Array.isArray(game.params) ? game.params : undefined,
      })
    }
  }

  // Обрабатываем числовые игры (Record<string, FirebaseGame>)
  if (numericData !== null && typeof numericData === 'object') {
    for (const [slug, game] of Object.entries(numericData)) {
      if (!isValidGameObject(game)) {
        console.warn('[normalizeGames] Skipping invalid game:', slug, game)
        continue
      }

      // Проверяем обязательные поля
      if (!game.title || typeof game.title !== 'string') {
        console.warn('[normalizeGames] Skipping game without title:', slug)
        continue
      }

      normalizedGames.push({
        slug,
        title: game.title as GameTitles,
        imgPath: typeof game.imgPath === 'string' ? game.imgPath : '',
        games: Array.isArray(game.games) ? game.games : [],
        isBoolean: false,
        params: Array.isArray(game.params) ? game.params : undefined,
      })
    }
  }

  return normalizedGames
}
