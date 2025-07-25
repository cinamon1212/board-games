import { GameInfo, PlayerScores } from '@/types'

const EVERDELL_GAMES: PlayerScores<number> = [
  { Соня: 41, Андрей: 65, Илья: 58, params: [{ key: 'сложность', values: ['средняя'] }] },
  { Андрей: 54 },
  { Илья: 70 },
  { Андрей: 40, Илья: 55, Лиля: 49, Соня: 50 },
  { Андрей: 63, Соня: 55, Илья: 64 },
  { Андрей: 61, Илья: 67, Соня: 66 },
  { Андрей: 64, Илья: 68, Соня: 54 },
]

export const EVERDELL: GameInfo = {
  games: EVERDELL_GAMES,
  title: 'Эверделл',
  imgPath: 'everdell.jpg',
  params: [
    { key: 'сложность', values: ['легкая', 'средняя', 'тяжелая'] },
    { key: 'босс', values: ['кал', 'буэ', 'соня'] },
  ],
}
