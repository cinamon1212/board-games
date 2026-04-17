import {
  GameCount,
  GameImg,
  GameInfo,
  GameLink,
  GameTitle,
  GameWrapper,
} from './styles'
import { GameInfo as GameType } from '@/types'
import { GameButton } from '../GameButton/GameButton'

export const Game = ({ title, games, imgPath, slug, isBoolean }: GameType) => {
  const gamesCount = games?.length || 0
  const gameCountStr = `Количество игр: ${gamesCount}`

  return (
    <GameWrapper>
      <GameLink href={slug} aria-label={`Открыть страницу игры ${title}`} />
      <GameImg src={imgPath} alt={title} />
      <GameInfo>
        <GameTitle>{title}</GameTitle>
        <GameButton title={title} slug={slug} isBoolean={isBoolean} />
        <GameCount>{gameCountStr}</GameCount>
      </GameInfo>
    </GameWrapper>
  )
}
