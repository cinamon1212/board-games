import { GameInfo, PlayerScores } from '@/types'

const WINSPAWN_GAMES: PlayerScores<number> = [{ Илья: 81, Андрей: 94, Соня: 84, Лиля: 58 }]

export const WINSPAWN: GameInfo = {
  games: WINSPAWN_GAMES,
  title: 'Крылья',
  imgPath: 'winspawn.jpg',
}
