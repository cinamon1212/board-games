import React from 'react'

import { BoolGamePageProps } from './types'

import { BarWrapper, PageWrapper } from './styles'

import { getTransformedDataFromBoolGames } from '@/helpers'

import { Bar } from 'react-chartjs-2'

import { BAR_OPTIONS } from '@/constants'

import { StatisticContainer } from './StatisticContainer'

export const BoolGamePage = ({ boolGames, title }: BoolGamePageProps) => {
  const { data, tableDataArr } = getTransformedDataFromBoolGames(boolGames)

  return (
    <PageWrapper>
      <StatisticContainer tableDataArr={tableDataArr} games={boolGames} title={title} />
      <BarWrapper>
        <Bar data={data} options={BAR_OPTIONS} />
      </BarWrapper>
    </PageWrapper>
  )
}
