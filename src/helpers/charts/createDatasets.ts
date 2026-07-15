import { DataSets, PersonsMap } from '@/types'

/**
 * Создает наборы данных для линейного графика Chart.js.
 * Преобразует карту игроков в формат datasets для Chart.js.
 *
 * @param map - Карта игроков с их результатами и цветами
 * @returns Массив datasets для Chart.js
 */
export const createDatasets = (map: PersonsMap<number>) => {
  const datasets: DataSets = []

  for (const person in map) {
    const currentItem = map[person]

    if (currentItem) {
      datasets.push({
        label: currentItem.name,
        data: currentItem.scores || [],
        fill: false,
        tension: 0.3,
        borderColor: currentItem.color,
        backgroundColor: currentItem.color,
        pointBackgroundColor: currentItem.color,
        pointBorderColor: currentItem.color,
        pointRadius: 4,
        pointHoverRadius: 6,
      })
    }
  }

  return datasets
}
