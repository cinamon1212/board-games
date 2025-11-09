import { GameInfo, PlayerScores } from '@/types'

const TOKYO_LORD_GAMES: PlayerScores<number> = []

export const TOKYO_LORD: GameInfo = {
  games: TOKYO_LORD_GAMES,
  title: 'Повелитель Токио: Монстр Бокс',
  imgPath: 'numeric/tokyo-lord-monster-box.jpg',
}
