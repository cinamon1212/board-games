import { GameInfo, PlayerScores } from '@/types'

const ARNAK_GAMES: PlayerScores<number> = []

export const ARNAK: GameInfo = {
  games: ARNAK_GAMES,
  title: 'Руины острова арнак',
  imgPath: 'arnak.jpg',
}
