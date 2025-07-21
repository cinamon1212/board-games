import { GameParams } from './game'
import { Player, PlayerProfileWithoutName } from './player'

// Типы для результатов игры и объекта GamesByPersonsMap
export type SingleGameResult = number | boolean
export type GameResult = SingleGameResult | Array<SingleGameResult>

// Дженерик для объектов с ключами - именами
export type PlayerObj<T> = Partial<Record<Player, T>>

// Объект с ключом параметром
export type ParamObj = Partial<Record<'params', GameParams>>

export type PlayerScore<T extends GameResult> = PlayerObj<T> & ParamObj
export type PlayerScores<T extends GameResult> = Array<PlayerScore<T>>

// Типы для функции getPersonsMap
export type PersonMapItem<T extends SingleGameResult> = {
  scores: Array<T>
  scoresCount: number
  winRate: string
  avg?: number
  minScore?: number
  maxScore?: number
} & PlayerProfileWithoutName

export type PersonsMap<T extends SingleGameResult> = PlayerObj<PersonMapItem<T>>

// Типы для функции getPersonsMapGames
export type PersonMapGameItem<T extends SingleGameResult> = {
  scores: Array<T>
  winCount: number
} & PlayerProfileWithoutName

export type PersonsMapGames<T extends SingleGameResult> = PlayerObj<PersonMapGameItem<T>>
