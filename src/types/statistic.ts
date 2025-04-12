import { Player } from './player'

export type Statistic = {
  scores: Array<number>
  name: Player
  color: string
}

export type StatisticArr = Array<Statistic>
