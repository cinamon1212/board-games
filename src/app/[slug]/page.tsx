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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement)

const GamePage = () => {
  const path = usePathname()

  const { title, games, isBoolean, params } = getGameByPath(path)

  if (isBoolean) {
    const boolGames = games as PlayerScores<boolean>
    return <BoolGamePage boolGames={boolGames} title={title} params={params} />
  } else {
    const numGames = games as PlayerScores<number>
    return <NumGamePage title={title} numGames={numGames} params={params} />
  }
}

export default GamePage
