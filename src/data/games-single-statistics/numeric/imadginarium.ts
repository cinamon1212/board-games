import { GameInfo, PlayerScores } from '@/types'

const IMADGINARIUM_GAMES: PlayerScores<number> = []

export const IMADGINARIUM: GameInfo = {
  games: IMADGINARIUM_GAMES,
  title: 'Имаджинариум',
  imgPath: 'imadginarium.jpg',
}
