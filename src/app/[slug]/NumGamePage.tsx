import React from 'react'
import { GameTitle, LineWrapper, PageWrapper, Name } from './styles'

import { Line } from 'react-chartjs-2'

import { Statistic, StatisticsTable, GameStatistic } from '@/components'
import { getTransformedDataFromNumGames } from '@/helpers'

import { NumGamePageProps } from './types'

export const NumGamePage = ({ numGames, title }: NumGamePageProps) => {
  const { playerWithMaxArithmeticMean, gamesForChart, statisticArr } = getTransformedDataFromNumGames(numGames)

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
      <GameStatistic numGames={numGames} />
      {statisticArr && <Statistic statisticArr={statisticArr} />}
      <StatisticsTable />
    </PageWrapper>
  )
}
