import { PlayerScores } from '@/types'
import { getPersonsMap } from './getPersonsMap'
import { getPersonsMapGames } from './getPersonsMapGames'
import { createDataForPie } from '../charts/createDataForPie'
import { transformDataForTable } from './transformDataForTable'

/**
 * Полная трансформация данных для булевых игр.
 * Создает данные для столбчатой диаграммы (win rate) и данные для таблицы.
 *
 * @param boolGames - Массив результатов партий булевой игры
 * @returns Объект с данными для графика и данными для таблицы
 */
export const getTransformedDataFromBoolGames = (boolGames: PlayerScores<boolean>) => {
  const map = getPersonsMapGames<boolean>(boolGames)

  const { personsMap } = getPersonsMap<boolean>(map)

  const data = createDataForPie(personsMap)
  const tableDataArr = transformDataForTable(personsMap, 'winRate')

  return { data, tableDataArr }
}
