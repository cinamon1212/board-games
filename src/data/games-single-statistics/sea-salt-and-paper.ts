import { GameInfo, PlayerScores } from '@/types'

const SEA_SALT_AND_PAPER_GAMES: PlayerScores<boolean> = [
  { Соня: true, Лиля: false, Илья: false, Андрей: false },
  { Андрей: true, Илья: false, Тамик: false },
  { Андрей: true, Тамик: false, Соня: false },
]

export const SEA_SALT_AND_PAPER: GameInfo = {
  games: SEA_SALT_AND_PAPER_GAMES,
  title: 'Море, соль, бумага',
  imgPath: 'sea-salt-and-paper.jpg',
  isBoolean: true
}
