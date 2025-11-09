import { CSSProperties } from 'styled-components'
import { PersonMapItem } from './statistics'
import { Player } from './player'

/**
 * Конфигурация колонки таблицы со статистикой
 */
export type TableColumn = {
  /** Заголовок колонки, отображаемый в таблице */
  headerName: string
  /** Поле из PersonMapItem, которое отображается в этой колонке, или 'name' для имени игрока */
  field: keyof PersonMapItem<number> | 'name'
  /** Стили для ячеек колонки (опционально) */
  cellStyle?: CSSProperties
  /** Стили для заголовка колонки (опционально) */
  headerStyle?: CSSProperties
}

/**
 * Массив конфигураций колонок таблицы
 */
export type TableColumns = Array<TableColumn>

/**
 * Состояние сортировки таблицы
 * - 'none' - без сортировки (исходный порядок)
 * - 'asc' - по возрастанию
 * - 'desc' - по убыванию
 */
export type TableSortKey = 'none' | 'asc' | 'desc'

/**
 * Данные одной строки таблицы со статистикой игрока
 * Содержит имя игрока и статистику (среднее, минимум, максимум, количество игр, win rate)
 */
export type TableData = {
  /** Имя игрока или команды */
  name: Player
} & Partial<PersonMapItem<number | boolean>>

/**
 * Массив данных для таблицы со статистикой
 * Каждый элемент представляет строку с данными одного игрока
 */
export type TableDataArr = Array<TableData>
