import React from 'react'

import { BoolGamePageProps } from './types'

import { GameTitle, PageWrapper } from './styles'

import { getTransformedDataFromBoolGames } from '@/helpers'

export const BoolGamePage = ({ boolGames, title }: BoolGamePageProps) => {
  const boolGamesStatisticMap = getTransformedDataFromBoolGames(boolGames)
  console.log(boolGamesStatisticMap)

  return (
    <PageWrapper>
      <GameTitle>{title}</GameTitle>
    </PageWrapper>
  )
}
