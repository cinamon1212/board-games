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
import { getGameByPath, transformDatasetsToStatistic, transformGamesForChart } from '@/helpers'
import { GameTitle, PageWrapper } from './styles'
import { Statistic } from '@/components'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const GamePage = () => {
  const path = usePathname()

  const { title, games } = getGameByPath(path)

  const gamesForChart = transformGamesForChart(games)

  const statisticArr = transformDatasetsToStatistic(gamesForChart.datasets)

  return (
    <PageWrapper>
      <GameTitle>{title}</GameTitle>
      <Line data={gamesForChart} />
      <Statistic statisticArr={statisticArr}/>
    </PageWrapper>
  )
}

export default GamePage
