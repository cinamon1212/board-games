import { GameInfo, PlayerScores } from '@/types'

const ARNAK_GAMES: PlayerScores<number> = [
  { Андрей: 47, Илья: 76, Тамик: 65 },
  { Илья: 68, Тамик: 60 },
  { Илья: 68, Тамик: 64 },
  { Илья: 49, Андрей: 63, Саша: 69, Соня: 76 },
  { Андрей: 61, Илья: 60, Тамик: 51 },
]

export const ARNAK: GameInfo = {
  games: ARNAK_GAMES,
  title: 'Руины острова арнак',
  imgPath: 'arnak.jpg',
}
