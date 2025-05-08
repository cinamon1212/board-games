import { TableColumns } from '@/types'

export const TABLE_COLUMNS: TableColumns = [
  {
    headerName: 'Имя',
    field: 'name'
  },
  {
    headerName: 'Среднее',
    field: 'avg'
  },
  {
    headerName: 'Мин',
    field: 'minScore'
  },
  {
    headerName: 'Макс',
    field: 'maxScore'
  },
  {
    headerName: 'Кол-во игр',
    field: 'scoresCount'
  },
]
