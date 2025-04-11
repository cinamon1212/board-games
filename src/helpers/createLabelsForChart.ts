import { ChartLabels } from '@/types'

export const createLabelsForChart = (labelsLength: number) => {
  const labels: ChartLabels = []

  for (let i = 0; i < labelsLength + 1; i++) {
    labels.push(i.toString())
  }

  return labels
}
