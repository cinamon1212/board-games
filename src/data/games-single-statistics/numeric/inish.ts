import { GameInfo, PlayerScores } from '@/types'

const INISH_GAMES: PlayerScores<number> = []

export const INISH: GameInfo = {
  games: INISH_GAMES,
  title: 'Иниш',
  imgPath: 'numeric/inish.jpg',
}
