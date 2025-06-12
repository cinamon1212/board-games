import { CSSProperties } from 'styled-components'
import { TableData, TableDataArr, TableSortKey } from '../../types'

export type TableProps = {
  tableDataArr: TableDataArr
}

export type TableColumn = {
  headerName: string
  cellStyle: CSSProperties
  headerStyle: CSSProperties
}

export type TableColumns = Array<TableColumn>

export type TableSortConfig = {
  key: keyof TableData | null
  direction: TableSortKey
}
