import { GameInfo, PlayerScores } from '@/types'

const ORLEAN_GAMES: PlayerScores<number> = [
  { Андрей: 114, Илья: 148 },
  { Андрей: 98, Илья: 128, Соня: 100 },
]

export const ORLEAN: GameInfo = {
  games: ORLEAN_GAMES,
  title: 'Орлеан',
  imgPath: 'orlean.jpg',
}
