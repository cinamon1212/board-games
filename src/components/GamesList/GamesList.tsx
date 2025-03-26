'use client'

import { GamesListWrapper } from './styles'
import { Game } from '../Game'
import { Games } from '@/types'

type GamesListProps = {
  games: Games
}

export const GamesList = ({ games }: GamesListProps) => {
  return (
    <GamesListWrapper>
      {games.map((game, i) => (
        <Game key={i} {...game} />
      ))}
    </GamesListWrapper>
  )
}
