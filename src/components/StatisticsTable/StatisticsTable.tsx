import React from 'react'

import { AgGridReact } from 'ag-grid-react'

import {
  ModuleRegistry,
  ValidationModule,
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  GridReadyEvent,
  CellStyleModule,
} from 'ag-grid-community'

import { THEME } from './constants'
import { StatisticsTableProps } from './types'

import { TableData } from '@/types'
import { TABLE_COLUMNS } from '@/data'

// Регистрация модулей
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, ColumnAutoSizeModule, CellStyleModule])

export const StatisticsTable = ({ tableDataArr }: StatisticsTableProps) => {
  const height = tableDataArr.length * 42 + 49

  const onGridReady = (params: GridReadyEvent<TableData, unknown>) => {
    params.api.sizeColumnsToFit()

    window.addEventListener('resize', () => {
      params.api.sizeColumnsToFit()
    })
  }

  return (
    <div style={{ height, width: '100%', margin: '0 auto' }}>
      <AgGridReact<TableData>
        rowData={tableDataArr}
        columnDefs={TABLE_COLUMNS}
        pagination={false}
        rowModelType='clientSide'
        theme={THEME}
        onGridReady={onGridReady}
      />
    </div>
  )
}
