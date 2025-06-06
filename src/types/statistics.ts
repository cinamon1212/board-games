import { Player } from './player'

// Типы для результатов игры и объекта GamesByPersonsMap
export type SingleGameResult = number | boolean
export type GameResult = SingleGameResult | Array<SingleGameResult>

export type PlayerScore<T extends GameResult> = Partial<Record<Player, T>>

export type PlayerScores<T extends GameResult> = Array<PlayerScore<T>>

export type PersonMapItem<T extends SingleGameResult> = {
  scores: Array<T>
  color: string
  scoresCount: number
  winRate: string
  avg?: number
  minScore?: number
  maxScore?: number
}

export type PersonMapGameItem<T extends SingleGameResult> = {
  scores: Array<T>,
  winCount: number
}

export type PersonsMapGames<T extends SingleGameResult> = Partial<Record<Player, PersonMapGameItem<T>>>

export type PersonsMap<T extends SingleGameResult> = Partial<Record<Player, PersonMapItem<T>>>

export type BoolGamesStatistic = {
  games: Array<boolean>
  winRate: string
  gamesCount: number
  winCount: number
  color: string
}
export type BoolGamesStatisticMap = Partial<Record<Player, BoolGamesStatistic>>
