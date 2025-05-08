import { CSSProperties } from 'styled-components'
import { PersonMapItem } from './statistics'

export type TableColumn = {
  headerName: string
  field: keyof PersonMapItem<number> | 'name'
  cellStyle?: CSSProperties
  headerStyle?: CSSProperties
}

export type TableColumns = Array<TableColumn>
