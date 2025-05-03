import { GameInfo, PlayerScores } from '@/types'

const MUNCHKIN_GAMES: PlayerScores<boolean> = []

export const MUNCHKIN: GameInfo = {
  games: MUNCHKIN_GAMES,
  title: 'Манчкин',
  imgPath: 'munchkin.jpg',
}
