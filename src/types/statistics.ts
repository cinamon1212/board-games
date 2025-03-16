import { Player } from './player'

export type PlayerScore = Partial<Record<Player, number>>

export type PlayerScores = Array<PlayerScore>
