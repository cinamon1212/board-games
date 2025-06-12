import { Player } from './player'

export type ChartLabels = Array<string>

export type DataSet = {
  label: Player
  fill: boolean
  borderColor: string | CanvasGradient
  tension: number
  data: Array<number>
  backgroundColor: string | CanvasGradient
  pointBackgroundColor: string | CanvasGradient
  pointBorderColor: string | CanvasGradient
  pointRadius: number
  pointHoverRadius: number
}

export type DataSets = Array<DataSet>

export type ChartDatasets = {
  labels: ChartLabels
  datasets: DataSets
}
