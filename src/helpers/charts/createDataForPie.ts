import { PersonsMap } from '@/types'
import { ChartData } from 'chart.js'

/**
 * Создает данные для столбчатой диаграммы (bar chart) из булевых игр.
 * Преобразует процент побед игроков в формат Chart.js.
 *
 * @param personsMap - Карта игроков с их win rate
 * @returns Данные для Chart.js в формате bar chart
 */
export const createDataForPie = (personsMap: PersonsMap<boolean>) => {
  const data: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  }

  const winRates: Array<number> = []
  const backgroundColor: Array<string> = []

  for (const person in personsMap) {
    const current = personsMap[person]

    data.labels?.push(current?.name ?? person)
    winRates.push(Number(current?.winRate.slice(0, -1)))
    if (current?.color) backgroundColor.push(current?.color)
  }

  data.datasets.push({
    data: winRates,
    backgroundColor,
    borderWidth: 0,
  })

  return data
}
