import { TableData, TableDataArr, TableSortKey } from '../../types'

export type TableProps = {
  tableDataArr: TableDataArr
}

export type TableSortConfig = {
  key: keyof TableData | null
  direction: TableSortKey
}
