import { AgGridReact } from 'ag-grid-react'

import React, { memo } from 'react'

import { TABLE_COLUMNS } from '@/data'
import { THEME } from './constants'

import { TableData } from '../../types'
import { TableProps } from './types'

export const Table = memo(({ tableDataArr, onGridReady }: TableProps) => {
  const height = tableDataArr.length * 42 + 49

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
})
