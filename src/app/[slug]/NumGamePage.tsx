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
                  position: 'bottom',
                  maxWidth: 400,
                  fullSize: false,
                  labels: {
                    boxWidth: 24,
                    padding: windowWidth > 400 ? 18 : windowWidth > 700 ? 24 : windowWidth > 900 ? 32 : 12,
                  },
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
