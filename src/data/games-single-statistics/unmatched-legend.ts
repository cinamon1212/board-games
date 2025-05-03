import { GameInfo, PlayerScores } from '@/types'

const UNMATCHED_LEGEND_GAMES: PlayerScores<boolean> = []

export const UNMATCHED_LEGEND: GameInfo = {
  games: UNMATCHED_LEGEND_GAMES,
  title: 'Unmatched: битва легенд',
  imgPath: 'unmatched-legend.jpg',
}
