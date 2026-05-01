import {
  GameParams,
  GameTitles,
  PlayerScores,
  ScoreStats,
  SingleGameResult,
  TableDataArr,
} from '@/types'

export type NumGamePageProps = {
  numGames: PlayerScores<number>
  title: GameTitles
  slug: string
  params?: GameParams
}

export type BoolGamePageProps = {
  boolGames: PlayerScores<boolean>
  title: GameTitles
  slug: string
  params?: GameParams
}

export type StatisticContainerProps = {
  title: string
  games: PlayerScores<SingleGameResult>
  tableDataArr: TableDataArr
  scoreStats?: ScoreStats
}
