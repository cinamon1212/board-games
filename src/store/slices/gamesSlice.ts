import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { get, ref, set } from 'firebase/database'

import { auth, database, normalizeGames } from '@/helpers'
import { Games, GameInfo, GameTitles } from '@/types'
import type { RootState } from '@/store'

/**
 * Тип состояния игр
 */
export type GamesState = {
  loading: boolean
  error: string | null
  games: Games
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
}

/**
 * Убедиться, что Firebase Auth готов
 */
const ensureFirebaseAuthReady = async () => {
  const firebaseAuth = auth as typeof auth & {
    authStateReady?: () => Promise<void>
  }

  if (typeof firebaseAuth.authStateReady === 'function') {
    await firebaseAuth.authStateReady()
  }
}

/**
 * Thunk для загрузки игр из Firebase
 * Загружает данные из results/boolean и results/numeric
 */
export const fetchGames = createAsyncThunk<
  Games,
  void,
  { rejectValue: string }
>('games/fetchGames', async (_, { rejectWithValue }) => {
  try {
    const [booleanSnapshot, numericSnapshot] = await Promise.all([
      get(ref(database, 'results/boolean')),
      get(ref(database, 'results/numeric')),
    ])

    const booleanData = booleanSnapshot.val()
    const numericData = numericSnapshot.val()

    const normalizedGames = normalizeGames(booleanData, numericData)

    return normalizedGames
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

    if (!auth.currentUser) {
      return rejectWithValue('Необходимо авторизоваться.')
    }

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
const gamesSlice = createSlice({
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
        state.games = action.payload
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
  },
})

// Actions
export const { clearGamesError, setGames } = gamesSlice.actions

// Простой селектор для получения всех игр
export const selectGames = (state: RootState) => state.games.games

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

export default gamesSlice.reducer
