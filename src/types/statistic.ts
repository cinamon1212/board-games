import { DataSets } from './chart'
import { Player } from './player'

export type Statistic = {
  scores: Array<number>
  name: Player
  color: string
  arithmeticMean: number
}

export type StatisticArr = Array<Statistic>

export type PlayerWithMaxArithmeticMean = {
  arithmeticMean: number
  name: Player | null
  color: string
}

export type TransformDatasetsToStatistic = (datasets: DataSets) => {
  statisticArr: StatisticArr
  playerWithMaxArithmeticMean: PlayerWithMaxArithmeticMean
}
