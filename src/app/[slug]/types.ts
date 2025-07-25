import { GameParams, PlayerScores, ScoreStats, SingleGameResult, TableDataArr } from '@/types'

export type NumGamePageProps = {
  numGames: PlayerScores<number>
  title: string
  params?: GameParams
}

export type BoolGamePageProps = {
  boolGames: PlayerScores<boolean>
  title: string
  params?: GameParams
}

export type StatisticContainerProps = {
  title: string
  games: PlayerScores<SingleGameResult>
  tableDataArr: TableDataArr
  scoreStats?: ScoreStats
}
