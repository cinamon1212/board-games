import { TableData } from '@/types'
import { ColDef } from 'ag-grid-community'

export const TABLE_COLUMNS: ColDef<TableData>[] = [
  { field: 'id', headerName: 'ID', sortable: false },
  { field: 'name', headerName: 'Имя', sortable: false },
  { field: 'avg', headerName: 'Среднее' },
]
