import { GameInfo, PlayerScores } from '@/types'

const EVERDELL_GAMES: PlayerScores = [
  { Соня: 41, Андрей: 65, Илья: 58 },
  { Андрей: 54 },
  { Илья: 70 },
  { Андрей: 40, Илья: 55, Лиля: 49, Соня: 50 },
  { Андрей: 63, Соня: 55, Илья: 64 },
]

export const EVERDELL: GameInfo = {
  games: EVERDELL_GAMES,
  title: 'Эверделл',
  imgPath: 'everdell.jpg',
}
