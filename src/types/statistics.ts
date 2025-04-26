import { Player } from './player'

export type PlayerScore = Partial<Record<Player, number | boolean>>

export type PlayerScores = Array<PlayerScore>
