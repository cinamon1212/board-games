import { GameInfo, PlayerScores } from '@/types'

const CHALLENGERS_GAMES: PlayerScores<boolean> = [
  {
    Соня: true,
    Саша: false,
    Илья: false,
    Андрей: false,
    Лиля: false,
  },
]

export const CHALLENGERS: GameInfo = {
  title: 'Challengers',
  imgPath: 'challengers.png',
  games: CHALLENGERS_GAMES,
  isBoolean: true
}
