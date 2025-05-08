import { TableData } from '@/types'
import { ColDef } from 'ag-grid-community'

const cellStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' }

export const TABLE_COLUMNS: ColDef<TableData>[] = [
  {
    field: 'id',
    headerName: 'ID',
    sortable: false,
    cellStyle
  },
  {
    field: 'name',
    headerName: 'Имя',
    sortable: false,
    cellStyle
  },
  {
    field: 'avg',
    headerName: 'Среднее',
    cellStyle
  },
  {
    field: 'minScore',
    headerName: 'Мин',
    cellStyle
  },
  {
    field: 'maxScore',
    headerName: 'Макс',
    cellStyle
  },
  {
    field: 'scoresCount',
    headerName: 'Кол-во игр',
    cellStyle
  }
]
