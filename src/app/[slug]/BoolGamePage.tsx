'use client'

import React, { useState } from 'react'

import { BoolGamePageProps } from './types'

import { BarWrapper, PageWrapper } from './styles'

import { getTransformedDataFromBoolGames } from '@/helpers'

import { Bar } from 'react-chartjs-2'

import { BAR_OPTIONS } from '@/constants'
import { DropdownFilter, GameButton } from '@/components'

import { StatisticContainer } from './StatisticContainer'

export const BoolGamePage = ({
  boolGames,
  title,
  params,
  slug,
}: BoolGamePageProps) => {
  const [filteredGames, setFilteredGames] = useState(boolGames)

  const { data, tableDataArr } = getTransformedDataFromBoolGames(filteredGames)

  return (
    <PageWrapper>
      <StatisticContainer
        tableDataArr={tableDataArr}
        games={filteredGames}
        title={title}
      />
      <DropdownFilter
        games={boolGames}
        params={params}
        onFilterChange={setFilteredGames}
      />
      <GameButton title={title} slug={slug} isBoolean />
      <BarWrapper>
        <Bar data={data} options={BAR_OPTIONS} />
      </BarWrapper>
    </PageWrapper>
  )
}
