import {
  GameParams,
  GameTitles,
  PlayerScores,
  PlayersById,
  ScoreStats,
  SingleGameResult,
  TableDataArr,
} from '@/types'

export type NumGamePageProps = {
  numGames: PlayerScores<number>
  title: GameTitles
  slug: string
  params?: GameParams
  playersById: PlayersById
}

export type BoolGamePageProps = {
  boolGames: PlayerScores<boolean>
  title: GameTitles
  slug: string
  params?: GameParams
  playersById: PlayersById
}

export type StatisticContainerProps = {
  title: string
  games: PlayerScores<SingleGameResult>
  tableDataArr: TableDataArr
  scoreStats?: ScoreStats
}
