'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from '@/store'
import { fetchGames } from '@/store/slices/gamesSlice'

let hasRequestedGames = false

export function ResultsInitializer() {
  const dispatch = useAppDispatch()
  const authInitialized = useSelector(
    (state: RootState) => state.auth.initialized,
  )
  const loading = useSelector((state: RootState) => state.games.loading)
  const games = useSelector((state: RootState) => state.games.games)

  useEffect(() => {
    if (!authInitialized || hasRequestedGames || loading || games.length > 0) {
      return
    }

    hasRequestedGames = true

    void dispatch(fetchGames())
  }, [authInitialized, games.length, dispatch, loading])

  return null
}
