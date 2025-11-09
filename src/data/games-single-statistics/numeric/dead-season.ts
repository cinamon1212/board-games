import { GameInfo, PlayerScores } from '@/types'

const DEAD_SEASON_GAMES: PlayerScores<number> = []

export const DEAD_SEASON: GameInfo = {
  games: DEAD_SEASON_GAMES,
  title: 'Мертвый сезон',
  imgPath: 'numeric/dead-season.jpg',
}
