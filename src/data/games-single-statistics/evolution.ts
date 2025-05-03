import { GameInfo, PlayerScores } from '@/types'

const EVOLUTION_GAMES: PlayerScores<number> = [
  { Сергей: 15, Илья: 15, Андрей: 23, Соня: 25, Лиля: 7 },
  {
    Андрей: 33,
    Саша: 11,
    Илья: 6,
  },
]

export const EVOLUTION: GameInfo = {
  games: EVOLUTION_GAMES,
  title: 'Эволюция',
  imgPath: 'evolution.jpg',
}
