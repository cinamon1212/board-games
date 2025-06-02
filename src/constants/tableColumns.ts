import { TableColumns } from '@/types'

export const TABLE_COLUMNS: TableColumns = [
  {
    headerName: 'Имя',
    field: 'name'
  },
  {
    headerName: 'Винрейт',
    field: 'winRate'
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
