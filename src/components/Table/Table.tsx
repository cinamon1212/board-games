import React, { useState } from 'react'

import { TableProps, TableSortConfig } from './types'
import { SortIcon, TableCell, TableStyled, TableWrapper } from './styles'

import { TableData } from '@/types'
import { getNextSortState } from '@/helpers'
import { TABLE_COLUMNS, TABLE_SORT_STATES } from '@/constants'

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

  const renderSortIcon = (key: keyof TableData): string => {
    if (configKey !== key) return ''
    if (direction === asc) return '↑'
    if (direction === desc) return '↓'
    return ''
  }

  const headCellStyle = { fontWeight: 400, cursor: 'pointer' }

  return (
    <TableWrapper>
      <TableStyled>
        <thead>
          <tr>
            {TABLE_COLUMNS.map(({ field, headerName }, index) => (
              <TableCell
                key={index}
                as={'th'}
                style={headCellStyle}
                onClick={() => handleSort(field)}
                $bgColor={'#261e16'}
                $hoverBgColor={'#32281d'}
              >
                {headerName}
                <SortIcon>{renderSortIcon(field)}</SortIcon>
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
