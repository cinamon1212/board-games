import { ChartLabels } from '@/types'

/**
 * Создает массив меток для графика (номера партий).
 * Генерирует последовательность чисел от 1 до labelsLength.
 *
 * @param labelsLength - Количество меток (количество партий)
 * @returns Массив строк с номерами партий ["1", "2", "3", ...]
 */
export const createLabelsForChart = (labelsLength: number) => {
  const labels: ChartLabels = []

  for (let i = 1; i < labelsLength + 1; i++) {
    labels.push(i.toString())
  }

  return labels
}

