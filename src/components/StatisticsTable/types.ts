import { GridReadyEvent } from 'ag-grid-community';
import { TableData, TableDataArr } from '../../types';

export type StatisticsTableProps = {
  tableDataArr: TableDataArr
}

export type TableProps = {
  tableDataArr: TableDataArr
  onGridReady: (params: GridReadyEvent<TableData, unknown>) => void
}