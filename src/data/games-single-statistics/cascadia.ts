import { GameInfo, PlayerScores } from '@/types'

const CASCADIA_GAMES: PlayerScores<number> = []

export const CASCADIA: GameInfo = {
  games: CASCADIA_GAMES,
  title: 'Каскадия',
  imgPath: 'cascadia.png',
}
