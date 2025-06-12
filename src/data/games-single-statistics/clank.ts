import { GameInfo, PlayerScores } from '@/types'

const CLANK_GAMES: PlayerScores<number> = [{ Сергей: 108 }, { Илья: 129 }, { Андрей: 70, Илья: 125, Сергей: 52 }]

const CLANK_IN_SPACE_GAMES: PlayerScores<number> = [
  { Андрей: 140 },
  { Андрей: 74, Илья: 0, Соня: 71 },
  { Андрей: 140 },
  { Андрей: 0, Илья: 0, Лиля: 69, Тамик: 53 },
  { Андрей: 112, Илья: 130, Лиля: 112 },
]

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
