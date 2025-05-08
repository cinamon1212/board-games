import React from 'react'

import { BoolGamePageProps } from './types'

import { GameTitle, Name, PageWrapper } from './styles'

import { getTransformedDataFromBoolGames } from '@/helpers'

export const BoolGamePage = ({ boolGames, title }: BoolGamePageProps) => {
  const boolGamesStatisticMap = getTransformedDataFromBoolGames(boolGames)
  console.log(boolGames)
  // const { color, arithmeticMean, name } = boolGamesStatisticMap

  return (
    <PageWrapper>
      {/* <GameTitle>
        {title}. <Name color={color}>{name}</Name> - {arithmeticMean}
      </GameTitle> */}
    </PageWrapper>
  )
}
