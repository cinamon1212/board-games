import { CSSProperties } from 'styled-components'
import { TableData, TableDataArr, TableSortKey, TopsBooleanDataArr } from '../../types'

export type TableProps = {
  tableDataArr: TableDataArr | TopsBooleanDataArr
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
