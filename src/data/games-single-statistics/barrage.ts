import { GameInfo, PlayerScores } from '@/types'

const BARRAGE_GAMES: PlayerScores<number> = [{ Андрей: 104 }]

export const BARRAGE: GameInfo = {
  games: BARRAGE_GAMES,
  title: 'Плотина',
  imgPath: 'barrage.jpg',
}
