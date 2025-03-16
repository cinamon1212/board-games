import { Game } from './game'
import { Player } from './player'

export type PlayerScore = Partial<Record<Player, number>>

export type PlayerScores = Array<PlayerScore>

export type GamesStatistics = Partial<Record<Game, PlayerScores>>
