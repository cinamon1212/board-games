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
import { GameTitle, LineWrapper, PageWrapper } from './styles'
import { Statistic } from '@/components'
import { Name } from '../styles'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const GamePage = () => {
  const path = usePathname()

  const { title, games } = getGameByPath(path)

  const gamesForChart = transformGamesForChart(games)

  const { statisticArr, playerWithMaxArithmeticMean } = transformDatasetsToStatistic(gamesForChart.datasets)

  const { name, arithmeticMean, color } = playerWithMaxArithmeticMean

  return (
    <PageWrapper>
      <GameTitle>
        {title}. <Name color={color}>{name}</Name> - {arithmeticMean}
      </GameTitle>
      <LineWrapper>
        <Line
          data={gamesForChart}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  padding: 32,
                },
              },
            },
          }}
        />
      </LineWrapper>
      <Statistic statisticArr={statisticArr} />
    </PageWrapper>
  )
}

export default GamePage
