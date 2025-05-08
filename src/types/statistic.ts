export type GameScoreStatistic = {
  color: string
  score: number
}

export type ScoreStatsKeys = 'min' | 'max' | 'avg'

export type ScoreStats = Record<ScoreStatsKeys, GameScoreStatistic>
