'use client'

import React, { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'

import {
  GamesList,
  NotFound,
  HomeCarousel,
  Header,
  AuthGuard,
} from '@/components'

import { RadialBackground } from './styles'
import { selectGames, selectGamesLoading } from '@/store/slices/gamesSlice'
import { sortGamesByCount, filterGamesByRegExp } from '@/helpers'
import { useDebounce } from '@/hooks'
import { Games } from '@/types'

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  // Получаем игры из Redux (Firebase) - стабильный мемоизированный селектор
  const baseGames = useSelector(selectGames)
  const loading = useSelector(selectGamesLoading)

  const debouncedValue = useDebounce<string>(inputValue, 300)

  // Сортируем игры по количеству результатов (сначала с результатами)
  const sortedGames: Games = useMemo(() => {
    if (!Array.isArray(baseGames)) {
      console.warn('[Home] baseGames is not an array:', baseGames)
      return []
    }
    return sortGamesByCount(baseGames)
  }, [baseGames])

  // Фильтруем по поисковому запросу
  const games: Games = useMemo(() => {
    if (!Array.isArray(sortedGames)) {
      return []
    }
    return filterGamesByRegExp(sortedGames, debouncedValue)
  }, [sortedGames, debouncedValue])

  // Для карусели ограничиваем 15 играми
  const carouselGames = useMemo(() => {
    return games.slice(0, 15)
  }, [games])

  // Показываем лоадер пока данные загружаются
  if (loading) {
    return (
      <AuthGuard>
        <RadialBackground $top={'-50px'} $left={'-30%'} />
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Загрузка игр...
        </div>
        <RadialBackground $bottom={'-50px'} $right={'-30%'} />
      </AuthGuard>
    )
  }

  return (
    <AuthGuard>
      <RadialBackground $top={'-50px'} $left={'-30%'} />

      <HomeCarousel games={carouselGames} />

      <Header inputValue={inputValue} setInputValue={setInputValue} />

      {Array.isArray(games) && games.length > 0 ? (
        <GamesList games={games} />
      ) : (
        <NotFound />
      )}

      <RadialBackground $bottom={'-50px'} $right={'-30%'} />
    </AuthGuard>
  )
}

export default Home
