import { getImgPathWithoutExt } from '@/helpers'
import { GameCount, GameImg, GameInfo, GameTitle, GameWrapper } from './styles'
import { GameInfo as GameType } from '@/types'

export const Game = ({ title, games, imgPath }: GameType) => {
  const gamesCount = games?.length || 0
  const gameCountStr = `Сыграли раз: ${gamesCount}`

  const gameHref = getImgPathWithoutExt(imgPath);

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
