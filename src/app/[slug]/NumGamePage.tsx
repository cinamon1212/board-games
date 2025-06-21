
import React from 'react'
import { GameTitle, LineWrapper, PageWrapper, TitleWrapper } from './styles'
import { StatisticWrapper } from '../styles'
import React, { useRef } from 'react'


import { Line } from 'react-chartjs-2'

import { Table } from '@/components'
import { getTransformedDataFromNumGames } from '@/helpers'

import { NumGamePageProps } from './types'

import { useChartData, useWindowWidth } from '@/hooks'
import { LINE_OPTIONS } from '@/constants'

import { ChartJSOrUndefined } from 'node_modules/react-chartjs-2/dist/types'

import { StatisticContainer } from './StatisticContainer'

export const NumGamePage = ({ numGames, title }: NumGamePageProps) => {
  const { gamesForChart, scoreStats, tableDataArr } = getTransformedDataFromNumGames(numGames)

  const chartRef = useRef<ChartJSOrUndefined<'line'> | null>(null)
  const chartData = useChartData(chartRef, gamesForChart)

  const windowWidth = useWindowWidth()

  return (
    <PageWrapper>
      <StatisticContainer
        tableDataArr={tableDataArr}
        games={numGames}
        title={title}
        scoreStats={scoreStats}
      />
      {gamesForChart && (
        <LineWrapper>
          <Line data={chartData} options={LINE_OPTIONS} ref={chartRef} />
        </LineWrapper>
      )}
      <Table tableDataArr={tableDataArr} />
    </PageWrapper>
  )
}
