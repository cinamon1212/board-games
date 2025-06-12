import React, { useRef } from 'react'
import { GameTitle, LineWrapper, PageWrapper, TitleWrapper, StatisticWrapper } from './styles'

import { Line } from 'react-chartjs-2'

import { Table, GameStatistic, Tops } from '@/components'
import { getTransformedDataFromNumGames } from '@/helpers'

import { NumGamePageProps } from './types'

import { useChartData, useWindowWidth } from '@/hooks'
import { LINE_OPTIONS } from '@/constants'

import { ChartJSOrUndefined } from 'node_modules/react-chartjs-2/dist/types'

export const NumGamePage = ({ numGames, title }: NumGamePageProps) => {
  const { gamesForChart, scoreStats, tableDataArr } = getTransformedDataFromNumGames(numGames)

  const chartRef = useRef<ChartJSOrUndefined<'line'> | null>(null)
  const chartData = useChartData(chartRef, gamesForChart)

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
          <Line data={chartData} options={LINE_OPTIONS} ref={chartRef} />
        </LineWrapper>
      )}
      <Table tableDataArr={tableDataArr} />
    </PageWrapper>
  )
}
