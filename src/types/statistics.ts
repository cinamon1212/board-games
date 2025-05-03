import { Player } from './player'

// Типы для результатов игры и объекта GamesByPersonsMap
export type SingleGameResult = number | boolean
export type GameResult = SingleGameResult | Array<SingleGameResult>

export type PlayerScore<T extends GameResult> = Partial<Record<Player, T>>

export type PlayerScores<T extends GameResult> = Array<PlayerScore<T>>

export type GamesByPersonsMap<T extends GameResult> = PlayerScore<T>

export type BoolGamesStatistic = {
  games: Array<boolean>,
  winRate: string
}
export type BoolGamesStatisticMap = Partial<Record<Player, BoolGamesStatistic>>