import { GameInfo, PlayerScores } from '@/types'

const PALEO_GAMES: PlayerScores<boolean> = []

export const PALEO: GameInfo = {
  games: PALEO_GAMES,
  title: 'Палео',
  imgPath: 'paleo.jpg',
}
