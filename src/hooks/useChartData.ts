import { ChartDatasets, DataSet } from '@/types'
import { ChartJSOrUndefined } from 'node_modules/react-chartjs-2/dist/types'

import { RefObject, useEffect, useState } from 'react'

export const useChartData = (chartRef: RefObject<ChartJSOrUndefined<'line'> | null>, gamesForChart: ChartDatasets) => {
  const [chartData, setChartData] = useState<ChartDatasets>(gamesForChart)

  useEffect(() => {
    const chart = chartRef?.current
    if (!chart || !chart.ctx) return

    const checkAndSet = () => {
      const { ctx, chartArea } = chart

      if (!chartArea || !ctx) {
        requestAnimationFrame(checkAndSet)
        return
      }

      const datasets = gamesForChart.datasets.map(({ borderColor, ...set }) => {
        const dataset: DataSet = { ...set, borderColor }

        const setDatasetProps = (value: string | CanvasGradient) => {
          dataset.borderColor = value
          dataset.backgroundColor = value
          dataset.pointBackgroundColor = value
          dataset.pointBorderColor = value
        }

        if (typeof borderColor === 'string') {
          const colors = borderColor.split(', ')

          if (colors.length === 1) {
            setDatasetProps(colors[0])
          } else {
            const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0)

            colors.forEach((color, idx) => {
              const stop = idx / (colors.length - 1)
              gradient.addColorStop(stop, color)
            })

            setDatasetProps(gradient)
          }
        }

        return dataset
      })

      setChartData({ labels: gamesForChart.labels, datasets })
    }

    requestAnimationFrame(checkAndSet)
  }, [gamesForChart])

  return chartData
}
