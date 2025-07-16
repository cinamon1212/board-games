import { GameInfo, PlayerScores } from '@/types'

const TALES_OF_TAILS_GAMES: PlayerScores<number> = [
  { Соня: 5, Андрей: 3, Илья: 17 },
  { Илья: 16, Андрей: 12 },
  { Андрей: 20, Илья: 13 },
]

export const TALES_OF_TAILS: GameInfo = {
  games: TALES_OF_TAILS_GAMES,
  title: 'Подземелья и пёсики',
  imgPath: 'tales-of-tails.jpg',
}
