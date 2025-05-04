import React, { useState } from 'react'

import { AgGridReact } from 'ag-grid-react'

import { ColDef, ModuleRegistry, ValidationModule, ClientSideRowModelModule } from 'ag-grid-community'

import { THEME } from './constants'

// Регистрация модулей
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule])

interface RowData {
  id: number
  name: string
  age: number
  country: string
}

export const StatisticsTable: React.FC = () => {
  const [rowData] = useState<RowData[]>([
    { id: 1, name: 'Alice', age: 30, country: 'USA' },
    { id: 2, name: 'Bob', age: 25, country: 'Canada' },
    { id: 3, name: 'Charlie', age: 35, country: 'UK' },
  ])

  const [columnDefs] = useState<ColDef<RowData>[]>([
    { field: 'id', headerName: 'ID', sortable: true },
    { field: 'name', headerName: 'Name', sortable: true },
    { field: 'age', headerName: 'Age', sortable: true },
    { field: 'country', headerName: 'Country', sortable: true },
  ])

  const height = rowData.length * 43 + 50
  const width = columnDefs.length * 200

  return (
    <div style={{ height, width, margin: '0 auto' }}>
      <AgGridReact<RowData>
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={false}
        rowModelType='clientSide'
        theme={THEME}
      />
    </div>
  )
}
