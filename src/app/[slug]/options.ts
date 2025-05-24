import { ChartOptions } from 'chart.js'

export const LINE_OPTIONS: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
}

export const BAR_OPTIONS: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Винрейт Игроков',
      font: {
        size: 24,
        weight: 'bold',
      },
      color: '#696969',
      align: 'center',
      padding: {
        top: 0,
        bottom: 64,
      },
    },
  },
}
