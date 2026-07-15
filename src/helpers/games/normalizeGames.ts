import {
  Games,
  GameInfo,
  GameTitles,
  PlayerProfile,
  PlayerScores,
  PlayersById,
} from '@/types'

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
 * Сырая запись игрока из Firebase.
 * По новой схеме все пять полей всегда присутствуют, но мы принимаем
 * `unknown` на входе и валидируем только форму объекта.
 */
export type FirebasePlayer = {
  name: string
  color: string
  avatar: string
  userUid: string | null
  createdAt: number
}

const isFirebaseGame = (value: unknown): value is FirebaseGame =>
  typeof value === 'object' && value !== null

const isFirebasePlayer = (value: unknown): value is FirebasePlayer =>
  typeof value === 'object' && value !== null

export const normalizePlayers = (playersData: unknown): PlayersById => {
  const playersById: PlayersById = {}

  if (playersData === null || typeof playersData !== 'object') {
    return playersById
  }

  for (const [id, player] of Object.entries(playersData)) {
    if (!isFirebasePlayer(player)) {
      console.warn('[normalizePlayers] Skipping invalid player:', id, player)
      continue
    }

    const profile: PlayerProfile = {
      id,
      name: player.name,
      color: player.color,
      avatar: player.avatar,
      userUid: player.userUid,
      createdAt: player.createdAt,
    }

    playersById[id] = profile
  }

  return playersById
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
      if (!isFirebaseGame(game)) {
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
      if (!isFirebaseGame(game)) {
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
