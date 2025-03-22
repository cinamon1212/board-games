import { GameInfo, PlayerScores } from '@/types'

const EVERDELL_GAMES: PlayerScores = [{ Соня: 41, Андрей: 65, Илья: 58 }, { Андрей: 54 }, { Илья: 70 }]

export const EVERDELL: GameInfo = {
  games: EVERDELL_GAMES,
  title: 'Эверделл',
  imgPath: 'everdell.jpg',
}
