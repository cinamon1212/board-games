import { GameInfo, PlayerScores } from '@/types'

const INISH_GAMES: PlayerScores<boolean> = []

export const INISH: GameInfo = {
  games: INISH_GAMES,
  title: 'Иниш',
  imgPath: 'inish.jpg',
}
