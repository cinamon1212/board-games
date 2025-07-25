import { getImgPathWithoutExt } from '@/helpers'
import { GameCount, GameImg, GameInfo, GameTitle, GameWrapper } from './styles'
import { GameInfo as GameType } from '@/types'

export const Game = ({ title, games, imgPath }: GameType) => {
  const gamesCount = games?.length || 0
  const gameCountStr = `Количество игр: ${gamesCount}`

  const gameHref = getImgPathWithoutExt(imgPath)

  // const titleSliced = title.length > 25 ? title.slice(0, 25) + '...' : title

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
