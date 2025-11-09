import { GameInfo, PlayerScores } from '@/types'

const CASCADIA_GAMES: PlayerScores<number> = [
  { Илья: 87, Андрей: 87, Соня: 88, Тамик: 92 },
  { Илья: 95, Тамик: 78 },
  { Илья: 93, Тамик: 88, Соня: 88, Андрей: 79 },
  { Илья: 92, Тамик: 91 },
  { Илья: 87, Андрей: 95, Соня: 88, Тамик: 83 },
  { Илья: 90, Андрей: 98, Соня: 105, Лиля: 65 },
]

export const CASCADIA: GameInfo = {
  games: CASCADIA_GAMES,
  title: 'Каскадия',
  imgPath: 'cascadia.png',
}
