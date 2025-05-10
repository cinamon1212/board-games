import React from 'react'
import { GameTitle, LineWrapper, PageWrapper } from './styles'

import { Line } from 'react-chartjs-2'

import { Table, GameStatistic } from '@/components'
import { getTransformedDataFromNumGames } from '@/helpers'

import { NumGamePageProps } from './types'
import { useWindowWidth } from '@/hooks'

export const NumGamePage = ({ numGames, title }: NumGamePageProps) => {
  const { gamesForChart, scoreStats, tableDataArr } = getTransformedDataFromNumGames(numGames)

  const windowWidth = useWindowWidth()

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
                  display: false
                },
              },
            }}
          />
        </LineWrapper>
      )}
      <Table tableDataArr={tableDataArr} />
    </PageWrapper>
  )
}
