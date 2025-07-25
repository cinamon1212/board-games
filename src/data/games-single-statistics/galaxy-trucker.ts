import { GameInfo, PlayerScores } from '@/types'

const GALAXY_TRUCKER_GAMES: PlayerScores<number> = [
  { Илья: 19, Андрей: 20, Соня: 8, Лиля: 9 },
  { Илья: 3, Тамик: 14 },
  { Илья: 8, Тамик: 9 },
]

export const GALAXY_TRUCKER: GameInfo = {
  games: GALAXY_TRUCKER_GAMES,
  title: 'Космические дальнобойщики',
  imgPath: 'galaxy-trucker.webp',
}
