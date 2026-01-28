'use client'

import React from 'react'

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

import { PlayerScores } from '@/types'
import { NumGamePage } from './NumGamePage'
import { BoolGamePage } from './BoolGamePage'
import { AuthGuard } from '../../components/AuthGuard/AuthGuard'

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
  const game = getGameByPath(path)

  if (!game) {
    return <div>Игра не найдена</div>
  }

  const { title, games, isBoolean, params } = game

  if (isBoolean) {
    const boolGames = games as PlayerScores<boolean>
    return (
      <AuthGuard>
        <BoolGamePage boolGames={boolGames} title={title} params={params} />
      </AuthGuard>
    )
  } else {
    const numGames = games as PlayerScores<number>
    return (
      <AuthGuard>
        <NumGamePage title={title} numGames={numGames} params={params} />
      </AuthGuard>
    )
  }
}

export default GamePage
