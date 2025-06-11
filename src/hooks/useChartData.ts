import { ChartDatasets, ChartLabels, DataSet, DataSets } from '@/types'
import { ChartJSOrUndefined } from 'node_modules/react-chartjs-2/dist/types'
import { RefObject, useEffect, useState } from 'react'

export const useChartData = (chartRef: RefObject<ChartJSOrUndefined<'line'> | null>, gamesForChart: ChartDatasets) => {
  const [chartData, setChartData] = useState<{ datasets: DataSets; labels: ChartLabels }>(gamesForChart)

  useEffect(() => {
    const chart = chartRef?.current
    if (!chart) return

    const { ctx, chartArea } = chart

    if (!chartArea) return

    const datasets = gamesForChart.datasets.map(({ borderColor, ...set }) => {
      const dataset: DataSet = { ...set, borderColor }

      if (typeof borderColor === 'string') {
        const splitted = borderColor.split(', ')

        if (splitted.length === 1) return dataset
        else {
          const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0)

          splitted.forEach((color, idx) => {
            gradient.addColorStop(idx, color)
          });

          dataset.borderColor = gradient
          return dataset
        }
      }
      return dataset
    })

    setChartData((prev) => ({ labels: prev.labels, datasets }))
  }, [chartRef.current])

  return chartData
}
