import { GameInfo, PlayerScores } from '@/types'

const EVOLUTION_GAMES: PlayerScores = [{ Сергей: 15, Илья: 15, Андрей: 23, Соня: 25, Лиля: 7 }]

export const EVOLUTION: GameInfo = {
  games: EVOLUTION_GAMES,
  title: 'Эволюция',
  imgPath: 'evolution.jpg',
}
