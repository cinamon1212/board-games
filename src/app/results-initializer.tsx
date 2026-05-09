'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from '@/store'
import {
  selectAuthInitialized,
  selectIsAuthenticated,
  fetchGames,
} from '@/store'

let hasRequestedGames = false

export function ResultsInitializer() {
  const dispatch = useAppDispatch()
  const authInitialized = useSelector(selectAuthInitialized)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const loading = useSelector((state: RootState) => state.games.loading)
  const games = useSelector((state: RootState) => state.games.games)

  useEffect(() => {
    // Не грузим Firebase, пока пользователь не вошёл (в т.ч. на страницах логина/регистрации)
    if (!isAuthenticated) {
      hasRequestedGames = false
      return
    }

    if (!authInitialized || hasRequestedGames || loading || games.length > 0) {
      return
    }

    hasRequestedGames = true

    void dispatch(fetchGames())
      .unwrap()
      .catch(() => {
        // После отклонения (в т.ч. Permission denied) даём возможность повторить запрос
        hasRequestedGames = false
      })
  }, [authInitialized, dispatch, games.length, isAuthenticated, loading])

  return null
}
