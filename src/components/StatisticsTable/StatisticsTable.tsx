import React, { useCallback, useState } from 'react'

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
import { Table } from './Table'

// Регистрация модулей
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, ColumnAutoSizeModule, CellStyleModule])

export const StatisticsTable = ({ tableDataArr }: StatisticsTableProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const onGridReady = useCallback((params: GridReadyEvent<TableData, unknown>) => {
    params.api.sizeColumnsToFit()

    window.addEventListener('resize', () => {
      params.api.sizeColumnsToFit()
      setWindowWidth(window.innerWidth)
    })
  }, [])

  return (
    <Table onGridReady={onGridReady} tableDataArr={tableDataArr} />
  )
}
