'use client'

import React from 'react'
import { Line } from 'react-chartjs-2'
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
import { getGameByPath, transformGamesForChart } from '@/helpers'
import { GameTitle, PageWrapper } from './styles'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const GamePage = () => {
  const path = usePathname()

  const { title, games } = getGameByPath(path)

  const gamesForChart = transformGamesForChart(games)

  return (
    <PageWrapper>
      <GameTitle>{title}</GameTitle>
      <Line data={gamesForChart} />
    </PageWrapper>
  )
}

export default GamePage
