'use client'

import React, { useRef, useState } from 'react'
import { LineWrapper, PageWrapper } from './styles'

import { Line } from 'react-chartjs-2'

import { DropdownFilter, GameButton, Table } from '@/components'
import { getTransformedDataFromNumGames } from '@/helpers'

import { NumGamePageProps } from './types'

import { useChartData } from '@/hooks'
import { LINE_OPTIONS } from '@/constants'

import { ChartJSOrUndefined } from 'node_modules/react-chartjs-2/dist/types'

import { StatisticContainer } from './StatisticContainer'

export const NumGamePage = ({
  numGames,
  title,
  slug,
  params,
}: NumGamePageProps) => {
  const [filteredGames, setFilteredGames] = useState(numGames)

  const { gamesForChart, scoreStats, tableDataArr } =
    getTransformedDataFromNumGames(filteredGames)

  const chartRef = useRef<ChartJSOrUndefined<'line'> | null>(null)
  const chartData = useChartData(chartRef, gamesForChart)

  return (
    <PageWrapper>
      <StatisticContainer
        tableDataArr={tableDataArr}
        games={filteredGames}
        title={title}
        scoreStats={scoreStats}
      />
      <GameButton title={title} slug={slug} />
      <DropdownFilter
        games={numGames}
        params={params}
        onFilterChange={setFilteredGames}
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
