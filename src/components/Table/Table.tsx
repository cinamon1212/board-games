import React, { useState } from 'react'

import { TableProps, TableSortConfig } from './types'
import { SortIcon, TableCell, TableRow, TableStyled, TableWrapper } from './styles'

import { TableData } from '@/types'
import { getColorOrGradient, getNextSortState } from '@/helpers'
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
          <TableRow $hoverBgColor='#32281d'>
            {TABLE_COLUMNS.map(({ field, headerName }, index) => (
              <TableCell
                key={index}
                as={'th'}
                style={headCellStyle}
                onClick={() => handleSort(field)}
                $bgColor={'#261e16'}
              >
                {headerName}
                <SortIcon>{renderSortIcon(field)}</SortIcon>
              </TableCell>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <TableRow key={rowIndex} $hoverBgColor='#32281d'>
              {TABLE_COLUMNS.map(({ field }, index) => {
                const { color: colorOrGradient, isGradient } = getColorOrGradient(row.color)

                return (
                  <TableCell
                    key={index}
                    $color={field === 'name' ? colorOrGradient : undefined}
                    $isGradient={isGradient}
                  >
                    {row[field]}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </tbody>
      </TableStyled>
    </TableWrapper>
  )
}
