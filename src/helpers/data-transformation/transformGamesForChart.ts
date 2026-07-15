import { PlayerScores, PlayersById } from '@/types'
import { createLabelsForChart } from '../charts/createLabelsForChart'
import { getPersonsMapGames } from './getPersonsMapGames'
import { createDatasets } from '../charts/createDatasets'
import { getPersonsMap } from './getPersonsMap'

/**
 * Преобразует результаты числовых игр в формат для линейного графика Chart.js.
 * Создает labels (номера партий) и datasets (данные для каждого игрока).
 *
 * @param games - Массив результатов партий числовой игры
 * @returns Объект с данными для графика (gamesForChart) и картой игроков (personsMap)
 */
export const transformGamesForChart = (
  games: PlayerScores<number>,
  playersById: PlayersById,
) => {
  const map = getPersonsMapGames<number>(games, playersById)

  const { personsMap, maxScoresCount } = getPersonsMap<number>(map)

  const datasets = createDatasets(personsMap)

  const labels = createLabelsForChart(maxScoresCount)

  const gamesForChart = {
    datasets,
    labels,
  }

  return { gamesForChart, personsMap }
}
