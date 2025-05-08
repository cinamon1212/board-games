import React from 'react'
import { GameTitle, LineWrapper, PageWrapper } from './styles'

import { Line } from 'react-chartjs-2'

import { StatisticsTable, GameStatistic } from '@/components'
import { getTransformedDataFromNumGames } from '@/helpers'

import { NumGamePageProps } from './types'

export const NumGamePage = ({ numGames, title }: NumGamePageProps) => {
  const { gamesForChart, scoreStats, tableDataArr } = getTransformedDataFromNumGames(numGames)

  return (
    <PageWrapper>
      <GameTitle>
        {title}
      </GameTitle>
      <GameStatistic scoreStats={scoreStats} />
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
      <StatisticsTable tableDataArr={tableDataArr} />
    </PageWrapper>
  )
}
