import { Player } from './player'

export type ChartLabels = Array<string>

export type DataSet = {
  label: Player
  fill: boolean
  borderColor: string
  tension: number
  data: Array<number>
}

export type DataSets = Array<DataSet>

export type ChartDatasets = {
  labels: ChartLabels
  datasets: DataSets
}
