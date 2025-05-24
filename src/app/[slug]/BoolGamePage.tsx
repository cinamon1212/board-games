import React from 'react'

import { BoolGamePageProps } from './types'
import { BarWrapper, GameTitle, PageWrapper } from './styles'

import { getTransformedDataFromBoolGames } from '@/helpers'

import { Bar } from 'react-chartjs-2'
import { BAR_OPTIONS } from './options'

export const BoolGamePage = ({ boolGames, title }: BoolGamePageProps) => {
  const data = getTransformedDataFromBoolGames(boolGames)

  return (
    <PageWrapper>
      <GameTitle>{title}</GameTitle>
      <BarWrapper>
        <Bar data={data} options={BAR_OPTIONS} />
      </BarWrapper>
    </PageWrapper>
  )
}
