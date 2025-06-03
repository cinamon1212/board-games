import React from 'react'
import { GameTitle, LineWrapper, PageWrapper, TitleWrapper } from './styles'
import { StatisticWrapper } from '../styles'

import { Line } from 'react-chartjs-2'

import { Table, GameStatistic, Tops } from '@/components'
import { getTransformedDataFromNumGames } from '@/helpers'

import { NumGamePageProps } from './types'

import { useWindowWidth } from '@/hooks'
import { LINE_OPTIONS } from '@/constants'

export const NumGamePage = ({ numGames, title }: NumGamePageProps) => {
  const { gamesForChart, scoreStats, tableDataArr } = getTransformedDataFromNumGames(numGames)

  const windowWidth = useWindowWidth()

  return (
    <PageWrapper>
      <StatisticWrapper>
        <TitleWrapper>
          <GameTitle>{title}</GameTitle>
          <GameStatistic scoreStats={scoreStats} gamesCount={numGames.length} />
        </TitleWrapper>
        <Tops tableDataArr={tableDataArr} />
      </StatisticWrapper>
      {gamesForChart && (
        <LineWrapper>
          <Line data={gamesForChart} options={LINE_OPTIONS} />
        </LineWrapper>
      )}
      <Table tableDataArr={tableDataArr} />
    </PageWrapper>
  )
}
