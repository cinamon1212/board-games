import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { get, ref, set } from 'firebase/database'

import {
  getFirebaseAuth,
  getFirebaseDatabase,
  normalizeGames,
  normalizePlayers,
} from '@/helpers'
import { Games, GameInfo, GameTitles, PlayerList, PlayersById } from '@/types'
import type { RootState } from '@/store'

import { logout } from './authSlice'

/**
 * Тип состояния игр
 */
export type GamesState = {
  loading: boolean
  error: string | null
  games: Games
  playersById: PlayersById
}

type FetchGamesPayload = {
  games: Games
  playersById: PlayersById
}

/**
 * Тип для сохранения результата игры
 */
export type SaveGameResultPayload = {
  title: GameTitles
  slug: string
  isBoolean: boolean
  results: Record<string, number | boolean>
}

const initialState: GamesState = {
  loading: false,
  error: null,
  games: [],
  playersById: {},
}

/**
 * Убедиться, что Firebase Auth готов
 */
const ensureFirebaseAuthReady = async () => {
  const firebaseAuth = getFirebaseAuth() as ReturnType<
    typeof getFirebaseAuth
  > & {
    authStateReady?: () => Promise<void>
  }

  if (typeof firebaseAuth.authStateReady === 'function') {
    await firebaseAuth.authStateReady()
  }
}

/**
 * Безопасно читает узел; при Permission denied или другом отказе возвращает null,
 * чтобы один заблокированный путь не валил всю загрузку.
 */
const safeGet = async (
  database: ReturnType<typeof getFirebaseDatabase>,
  path: string,
): Promise<unknown> => {
  try {
    const snapshot = await get(ref(database, path))
    return snapshot.val()
  } catch (error) {
    console.warn(`[fetchGames] Не удалось прочитать "${path}":`, error)
    return null
  }
}

/**
 * Thunk для загрузки игр и игроков из Firebase.
 *
 * Новая структура данных:
 *   results/boolean/{slug}/{title, games, isBoolean, imgPath, params}
 *   results/numeric/{slug}/{title, games, isBoolean, imgPath, params}
 *   players/{playerId}/{name, color, avatar, userUid, createdAt}
 *
 * games — массив объектов формата Record<playerId, number|boolean>
 * (или { teams: [{ players: [...ids], score }] } для командных игр).
 */
export const fetchGames = createAsyncThunk<
  FetchGamesPayload,
  void,
  { rejectValue: string }
>('games/fetchGames', async (_, { rejectWithValue }) => {
  try {
    // Redux может уже знать JWT из localStorage, а Firebase Auth ещё восстанавливает currentUser — без этого Realtime Database даёт Permission denied
    await ensureFirebaseAuthReady()

    const firebaseAuth = getFirebaseAuth()
    if (!firebaseAuth.currentUser) {
      return rejectWithValue(
        'Сессия Firebase не восстановлена. Выйдите и войдите снова.',
      )
    }

    const database = getFirebaseDatabase()

    const [booleanData, numericData, playersData] = await Promise.all([
      safeGet(database, 'results/boolean'),
      safeGet(database, 'results/numeric'),
      safeGet(database, 'players'),
    ])

    if (booleanData === null && numericData === null && playersData === null) {
      return rejectWithValue(
        'Не удалось прочитать данные из Firebase. Проверьте правила безопасности Realtime Database.',
      )
    }

    const normalizedGames = normalizeGames(booleanData, numericData)
    const playersById = normalizePlayers(playersData)

    return { games: normalizedGames, playersById }
  } catch (error) {
    console.error('[fetchGames] Error:', error)
    return rejectWithValue('Не удалось загрузить игры из Firebase.')
  }
})

/**
 * Thunk для сохранения результата игры
 * Добавляет результат в массив games по пути results/{type}/{slug}/games
 */
export const saveGameResult = createAsyncThunk<
  void,
  SaveGameResultPayload,
  { rejectValue: string }
>('games/saveGameResult', async (payload, { rejectWithValue, dispatch }) => {
  try {
    await ensureFirebaseAuthReady()

    const firebaseAuth = getFirebaseAuth()
    if (!firebaseAuth.currentUser) {
      return rejectWithValue('Необходимо авторизоваться.')
    }

    const database = getFirebaseDatabase()
    const type = payload.isBoolean ? 'boolean' : 'numeric'
    const { slug, title, results } = payload

    // Защита от undefined slug - не писать в "undefined" ветку
    if (!slug) {
      console.error('[saveGameResult] slug is undefined or empty')
      return rejectWithValue('Ошибка: идентификатор игры не определен.')
    }

    // Получаем текущий массив games
    const gameRef = ref(database, `results/${type}/${slug}`)
    const snapshot = await get(gameRef)
    const currentData = snapshot.val()

    // Объединяем существующие игры с новой или создаём новый массив
    const updatedGames = currentData?.games
      ? [...currentData.games, results]
      : [results]

    // Формируем полные данные игры
    const gameData = {
      title,
      games: updatedGames,
      isBoolean: payload.isBoolean,
      ...(currentData?.imgPath ? { imgPath: currentData.imgPath } : {}),
      ...(currentData?.params ? { params: currentData.params } : {}),
    }

    // Записываем обновлённые данные
    await set(gameRef, gameData)

    await dispatch(fetchGames())
  } catch (error) {
    console.error('[saveGameResult] Error:', error)
    return rejectWithValue('Не удалось сохранить результат игры.')
  }
})

/**
 * Games slice
 */
export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    clearGamesError: (state) => {
      state.error = null
    },
    setGames: (state, action: PayloadAction<Games>) => {
      state.games = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false
        state.games = action.payload.games
        state.playersById = action.payload.playersById
        state.error = null
      })
      .addCase(fetchGames.rejected, (state, action) => {
        console.error('[gamesSlice] fetchGames.rejected:', action.payload)
        state.loading = false
        state.error = action.payload ?? 'Не удалось загрузить игры из Firebase.'
      })
      .addCase(saveGameResult.rejected, (state, action) => {
        console.error('[gamesSlice] saveGameResult.rejected:', action.payload)
        state.error = action.payload ?? 'Не удалось сохранить результат игры.'
      })
      .addCase(logout.fulfilled, (state) => {
        // После выхода сбрасываем кэш, чтобы при следующем входе снова загрузить актуальные данные
        state.games = []
        state.playersById = {}
        state.error = null
        state.loading = false
      })
  },
})

// Actions
export const { clearGamesError, setGames } = gamesSlice.actions

// Простой селектор для получения всех игр
export const selectGames = (state: RootState) => state.games.games

export const selectPlayersById = (state: RootState) => state.games.playersById

export const selectPlayersList = createSelector(
  [selectPlayersById],
  (playersById): PlayerList => Object.values(playersById),
)

// Селектор для получения состояния загрузки
export const selectGamesLoading = (state: RootState) => state.games.loading

// Селектор для получения ошибки
export const selectGamesError = (state: RootState) => state.games.error

/**
 * Селектор для получения игры по пути (slug)
 */
export const selectGameByPath = createSelector(
  [selectGames, (_state: RootState, path: string) => path],
  (games, path): GameInfo | undefined => {
    if (!Array.isArray(games) || !path) {
      return undefined
    }

    // Извлекаем slug из пути и декодируем URL
    const rawSlug = path.split('/').pop()
    const slug = rawSlug ? decodeURIComponent(rawSlug) : undefined

    if (!slug) {
      return undefined
    }

    return games.find((g: GameInfo) => g?.slug === slug)
  },
)
