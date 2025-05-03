import { GameInfo, PlayerScores } from '@/types'

const WINSPAWN_GAMES: PlayerScores<number> = []

export const WINSPAWN: GameInfo = {
  games: WINSPAWN_GAMES,
  title: 'Крылья',
  imgPath: 'winspawn.jpg',
}
