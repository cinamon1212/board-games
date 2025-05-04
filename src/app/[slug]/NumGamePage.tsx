import React from 'react'
import { GameTitle, LineWrapper, PageWrapper, Name } from './styles'

import { Line } from 'react-chartjs-2'

import { Statistic } from '@/components'
import { getTransformedDataFromNumGames } from '@/helpers'

import { NumGamePageProps } from './types'

export const NumGamePage = ({ numGames, title }: NumGamePageProps) => {
  //TODO: сделать дизайн и отрендерить numGameStatistics и personGamesStatistics

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
