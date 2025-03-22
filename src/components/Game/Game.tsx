import React from 'react'
import { GameCount, GameImg, GameInfo, GameTitle, GameWrapper } from './styles'
import { GameInfo as GameType } from '@/types'

export const Game = ({ title, games, imgPath = null }: GameType) => {
  const gamesCount = games?.length || 0
  const gameCountStr = `Сыграли раз: ${gamesCount}`

  const gameHref = title.replaceAll(' ', '-')

  return gamesCount ? (
    <GameWrapper href={gameHref}>
      <GameImg src={imgPath} alt={title} />
      <GameInfo>
        <GameTitle>{title}</GameTitle>
        <GameCount>{gameCountStr}</GameCount>
      </GameInfo>
    </GameWrapper>
  ) : null
}
