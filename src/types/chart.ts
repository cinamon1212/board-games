import { Player } from './player'

/**
 * Массив меток для осей графика (обычно номера партий или даты)
 */
export type ChartLabels = Array<string>

/**
 * Набор данных для одного игрока на графике Chart.js
 * Используется для линейных и столбчатых диаграмм
 */
export type DataSet = {
  /** Имя игрока, отображаемое в легенде */
  label: Player
  /** Заполнять ли область под линией графика */
  fill: boolean
  /** Цвет линии графика (может быть градиентом) */
  borderColor: string | CanvasGradient
  /** Кривизна линии (0 - прямая, 1 - максимальная кривизна) */
  tension: number
  /** Массив значений для отображения на графике */
  data: Array<number>
  /** Цвет заливки области под графиком (может быть градиентом) */
  backgroundColor: string | CanvasGradient
  /** Цвет фона точек на графике (может быть градиентом) */
  pointBackgroundColor: string | CanvasGradient
  /** Цвет границы точек на графике (может быть градиентом) */
  pointBorderColor: string | CanvasGradient
  /** Радиус точек на графике в пикселях */
  pointRadius: number
  /** Радиус точек при наведении курсора в пикселях */
  pointHoverRadius: number
}

/**
 * Массив наборов данных для графика
 * Каждый элемент представляет данные одного игрока
 */
export type DataSets = Array<DataSet>

/**
 * Полная структура данных для графика Chart.js
 * Содержит метки осей и наборы данных всех игроков
 */
export type ChartDatasets = {
  /** Метки для оси X (номера партий) */
  labels: ChartLabels
  /** Наборы данных для каждого игрока */
  datasets: DataSets
}
