'use client'

import React from 'react'

import { GamesListWrapper } from './styles'
import { Game } from '../Game'
import { GAMES_LIST } from '@/data'

export const GamesList = () => {
  return (
    <GamesListWrapper>
      {GAMES_LIST.map((game, i) => (
        <Game key={i} {...game} />
      ))}
    </GamesListWrapper>
  )
}
