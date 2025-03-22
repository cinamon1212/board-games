import { GameInfo, PlayerScores } from '@/types'

const CLANK_GAMES: PlayerScores = [{ Сергей: 108 }, { Илья: 129 }]

const CLANK_IN_SPACE_GAMES: PlayerScores = [{ Андрей: 140 }, { Андрей: 74, Илья: 0, Соня: 71 }, { Андрей: 140 }]

export const CLANK: GameInfo = {
  games: CLANK_GAMES,
  title: 'Кланк!',
  imgPath: 'clank.png',
}

export const CLANK_IN_SPACE: GameInfo = {
  games: CLANK_IN_SPACE_GAMES,
  title: 'Кланк! В! Космосе!',
  imgPath: 'clank-in-space.jpg',
}
