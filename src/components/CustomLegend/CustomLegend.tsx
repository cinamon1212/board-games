import React from 'react'
import { CustomLegendProps } from './types'
import { LegendList, Name } from './style'

export const CustomLegend = ({ tableDataArr }: CustomLegendProps) => {
  return (
    <LegendList>
      {tableDataArr.map(({ color, name }) => (
        <Name color={color} key={name}>
          {name}
        </Name>
      ))}
    </LegendList>
  )
}
