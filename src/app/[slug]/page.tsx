'use client'

import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js'

import { usePathname } from 'next/navigation'

import { getGameByPath } from '@/helpers'
import { selectGames } from '@/store'

import { PlayerScores } from '@/types'
import { NumGamePage } from './NumGamePage'
import { BoolGamePage } from './BoolGamePage'
import { AuthGuard } from '../../components'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
)

const GamePage = () => {
  const path = usePathname()

  // Получаем все игры из Redux - стабильный мемоизированный селектор
  const allGames = useSelector(selectGames)

  // Находим игру по пути с использованием useMemo для стабильности
  const game = useMemo(() => {
    return getGameByPath(path, allGames)
  }, [allGames, path])

  if (!game) {
    return <div>Игра не найдена</div>
  }

  const { title, slug, games, isBoolean, params } = game

  // Проверяем что games - это массив
  if (!Array.isArray(games)) {
    console.error('[GamePage] games is not an array:', games)
    return <div>Ошибка: неверный формат данных игры</div>
  }

  if (isBoolean) {
    const boolGames = games as PlayerScores<boolean>
    return (
      <AuthGuard>
        <BoolGamePage
          boolGames={boolGames}
          title={title}
          slug={slug}
          params={params}
        />
      </AuthGuard>
    )
  } else {
    const numGames = games as PlayerScores<number>
    return (
      <AuthGuard>
        <NumGamePage
          title={title}
          slug={slug}
          numGames={numGames}
          params={params}
        />
      </AuthGuard>
    )
  }
}

export default GamePage
