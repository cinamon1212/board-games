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
import {
  getGameByPath,
  getTransformedGameDataByPath,
  transformDatasetsToStatistic,
  transformGamesForChart,
} from '@/helpers'
import { GameTitle, PageWrapper } from './styles'
import { Statistic } from '@/components'
import { Name } from '../styles'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const GamePage = () => {
  const path = usePathname()

  const { title, color, arithmeticMean, gamesForChart, statisticArr, name } = getTransformedGameDataByPath(path)

  return (
    <PageWrapper>
      <GameTitle>
        {title}. <Name color={color}>{name}</Name> - {arithmeticMean}
      </GameTitle>
      {gamesForChart && (
        <Line
          data={gamesForChart}
          options={{
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
      )}
      {statisticArr && <Statistic statisticArr={statisticArr} />}
    </PageWrapper>
  )
}

export default GamePage
