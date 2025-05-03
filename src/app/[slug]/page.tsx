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

import { getGameByPath, getTransformedDataFromBoolGames, getTransformedDataFromNumGames } from '@/helpers'

import { GameTitle, LineWrapper, PageWrapper } from './styles'
import { Statistic } from '@/components'

import { Name } from '../styles'
import { PlayerScores } from '@/types'

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
    const { playerWithMaxArithmeticMean, gamesForChart, statisticArr, personGamesStatistics, numGameStatistics } =
      getTransformedDataFromNumGames(numGames)

    const { color, arithmeticMean, name } = playerWithMaxArithmeticMean

    return (
      <PageWrapper>
        <GameTitle>
          {title}. <Name color={color}>{name}</Name> - {arithmeticMean}
        </GameTitle>
        {gamesForChart && (
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
        )}
        {statisticArr && <Statistic statisticArr={statisticArr} />}
      </PageWrapper>
    )
  }
}

export default GamePage
