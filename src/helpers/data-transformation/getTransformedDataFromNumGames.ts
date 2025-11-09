import { PlayerScores } from '@/types'
import { transformGamesForChart } from './transformGamesForChart'
import { getGameScoreStats } from '../statistics/getGameScoreStats'
import { transformDataForTable } from './transformDataForTable'

/**
 * Полная трансформация данных для числовых игр.
 * Создает данные для графика, статистику (мин, макс, среднее) и данные для таблицы.
 *
 * @param numGames - Массив результатов партий числовой игры
 * @returns Объект с данными для графика, статистикой и данными для таблицы
 */
export const getTransformedDataFromNumGames = (numGames: PlayerScores<number>) => {
  const { gamesForChart, personsMap } = transformGamesForChart(numGames)

  const scoreStats = getGameScoreStats(personsMap)

  const tableDataArr = transformDataForTable(personsMap, 'avg')

  return {
    gamesForChart,
    scoreStats,
    tableDataArr
  }
}

