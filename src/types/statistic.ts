export type GameScoreStatistic = {
  color: string
  score: number
}

export type ScoreStatsKeys = 'min' | 'max' | 'avg' | 'count'

export type ScoreStats = Partial<Record<ScoreStatsKeys, GameScoreStatistic>>
