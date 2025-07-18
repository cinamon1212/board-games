import { GameInfo, PlayerScores } from '@/types'

const SVINTUS_ZOMBIE_GAMES: PlayerScores<boolean> = [
  { Соня: true, Илья: false, Андрей: false },
  { Илья: false, Андрей: false, Соня: true, Лиля: false, Настя: false },
  { Илья: true, Андрей: false, Соня: false, Лиля: false, Настя: false },
]

export const SVINTUS_ZOMBIE: GameInfo = {
  games: SVINTUS_ZOMBIE_GAMES,
  title: 'Свинтус зомби',
  imgPath: 'svintus-zombie.jpg',
  isBoolean: true,
}
