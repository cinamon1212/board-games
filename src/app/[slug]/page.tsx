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
} from 'chart.js'

import { usePathname } from 'next/navigation'

import { getGameByPath, getTransformedDataFromBoolGames } from '@/helpers'

import { PlayerScores } from '@/types'
import { NumGamePage } from './NumGamePage'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const GamePage = () => {
  const path = usePathname()

  const { title, games, isBoolean } = getGameByPath(path)

  if (isBoolean) {
    //TODO: сверстать и отрендерить страничку с играми победа/поражение

    const boolGames = games as PlayerScores<boolean>
    const boolGamesStatisticMap = getTransformedDataFromBoolGames(boolGames)
    console.log(boolGamesStatisticMap)
  } else {
    //TODO: сделать дизайн и отрендерить numGameStatistics и personGamesStatistics

    const numGames = games as PlayerScores<number>
    
    return <NumGamePage title={title} numGames={numGames}/>
  }
}

export default GamePage
