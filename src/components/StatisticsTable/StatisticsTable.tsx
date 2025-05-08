import React from 'react'

import { AgGridReact } from 'ag-grid-react'

import { ModuleRegistry, ValidationModule, ClientSideRowModelModule } from 'ag-grid-community'

import { THEME } from './constants'
import { StatisticsTableProps } from './types'

import { TableData } from '@/types'
import { TABLE_COLUMNS } from '@/data'

// Регистрация модулей
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule])

export const StatisticsTable = ({ tableDataArr }: StatisticsTableProps) => {
  const height = tableDataArr.length * 43 + 50
  const width = TABLE_COLUMNS.length * 200

  return (
    <div style={{ height, width, margin: '0 auto' }}>
      <AgGridReact<TableData>
        rowData={tableDataArr}
        columnDefs={TABLE_COLUMNS}
        pagination={false}
        rowModelType='clientSide'
        theme={THEME}
      />
    </div>
  )
}
