import { GameInfo, PlayerScores } from '@/types'

const SEVEN_WONDERS_GAMES: PlayerScores<number> = []

export const SEVEN_WONDERS: GameInfo = {
  games: SEVEN_WONDERS_GAMES,
  title: '7 чудес',
  imgPath: '7-wonders.jpg',
}
