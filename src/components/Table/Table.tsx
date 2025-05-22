import React, { useState } from 'react'

import { TableProps, TableSortConfig } from './types'
import { TABLE_COLUMNS, TABLE_SORT_STATES } from '@/data'
import { TableCell, TableStyled, TableWrapper } from './styles'
import { TableData } from '@/types'
import { getNextSortState } from '@/helpers'

export const Table = ({ tableDataArr }: TableProps) => {
  const { none, asc, desc } = TABLE_SORT_STATES

  const [sortConfig, setSortConfig] = useState<TableSortConfig>({ key: null, direction: none })

  const { direction, key: configKey } = sortConfig

  const handleSort = (key: keyof TableData) => {
    const newDirection = configKey === key ? getNextSortState(direction) : asc

    setSortConfig({ key, direction: newDirection })
  }

  const sortedData = [...tableDataArr].sort((a, b) => {
    if (direction === none || !configKey) return 0

    const valueA = a[configKey]
    const valueB = b[configKey]

    if (valueA && valueB) {
      if (valueA < valueB) return direction === asc ? -1 : 1
      if (valueA > valueB) return direction === asc ? 1 : -1
    }
    return 0
  })

  const renderSortIcon = (key: keyof TableData) => {
    if (configKey !== key) return '↕'
    if (direction === asc) return '↑'
    if (direction === desc) return '↓'
    return '↕'
  }

  return (
    <TableWrapper>
      <TableStyled>
        <thead>
          <tr>
            {TABLE_COLUMNS.map(({ field, headerName }, index) => (
              <TableCell
                key={index}
                as={'th'}
                style={{ backgroundColor: '#261e16', fontWeight: 400 }}
                onClick={() => handleSort(field)}
              >
                {headerName} {renderSortIcon(field)}
              </TableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {TABLE_COLUMNS.map(({ field }, index) => (
                <TableCell key={index} color={field === 'name' ? row.color : 'white'}>
                  {row[field]}
                </TableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </TableWrapper>
  )
}
