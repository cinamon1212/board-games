import { CSSProperties } from 'styled-components';
import { TableDataArr } from '../../types';

export type TableProps = {
  tableDataArr: TableDataArr
}

export type TableColumn = {
  headerName: string,
  cellStyle: CSSProperties,
  headerStyle: CSSProperties,
}

export type TableColumns = Array<TableColumn>