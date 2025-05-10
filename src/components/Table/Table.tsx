import React from 'react'

import { TableProps } from './types'
import { TABLE_COLUMNS } from '@/data'
import { TableCell, TableStyled, TableWrapper } from './styles'

export const Table = ({ tableDataArr }: TableProps) => {
  return (
    <TableWrapper>
      <TableStyled>
        <thead>
          <tr>
            {TABLE_COLUMNS.map((col, index) => (
              <TableCell key={index} as={'th'} style={{ backgroundColor: '#261e16', fontWeight: 400 }}>
                {col.headerName}
              </TableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableDataArr.map((row, rowIndex) => (
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
