import { TABLE_SORT_STATES } from '@/constants'

/**
 * Возвращает следующее состояние сортировки таблицы.
 * Цикл: none → asc → desc → none
 *
 * @param current - Текущее состояние сортировки
 * @returns Следующее состояние сортировки
 */
export const getNextSortState = (current: keyof typeof TABLE_SORT_STATES) => {
  const { asc, desc, none } = TABLE_SORT_STATES

  switch (current) {
    case none:
      return asc
    case asc:
      return desc
    case desc:
      return none
    default:
      return none
  }
}
