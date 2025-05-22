import { CSSProperties } from 'styled-components'
import { PersonMapItem } from './statistics'
import { Player } from './player'

export type TableColumn = {
  headerName: string
  field: keyof PersonMapItem<number> | 'name'
  cellStyle?: CSSProperties
  headerStyle?: CSSProperties
}

export type TableColumns = Array<TableColumn>

export type TableSortKey = 'none' | 'asc' | 'desc'

export type TableData = {
  name: Player
} & Partial<PersonMapItem<number>>

export type TableDataArr = Array<TableData>
