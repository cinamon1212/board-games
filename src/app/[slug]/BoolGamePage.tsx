import React from 'react'

import { BoolGamePageProps } from './types'

import { BarWrapper, GameTitle, PageWrapper } from './styles'

import { getTransformedDataFromBoolGames } from '@/helpers'

import { Bar } from 'react-chartjs-2'

import { BAR_OPTIONS } from '@/constants'

import { Tops } from '@/components'
import { StatisticWrapper } from '../styles'

export const BoolGamePage = ({ boolGames, title }: BoolGamePageProps) => {
  const { data, tableDataArr } = getTransformedDataFromBoolGames(boolGames)
  
  return (
    <PageWrapper>
      <StatisticWrapper>
        <GameTitle>{title}</GameTitle>
        <Tops tableDataArr={tableDataArr} />
      </StatisticWrapper>
      <BarWrapper>
        <Bar data={data} options={BAR_OPTIONS} />
      </BarWrapper>
    </PageWrapper>
  )
}
