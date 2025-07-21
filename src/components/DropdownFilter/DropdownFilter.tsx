import { memo, useState } from 'react'

import { GameParams, PlayerScores } from '@/types'

import { getGameParams } from './getGameParams'

import { DropdownButton, DropdownItem, DropdownList, DropdownWrapper } from './styles'

type DropdownFilterProps = {
  games: PlayerScores<number | boolean>
  params?: GameParams
}

const DropdownFilterComponent = ({ games, params }: DropdownFilterProps) => {
  const [activeDropdownKeys, setActiveDropdownKeys] = useState<Array<string>>([])
  const [activeDropdownValues, setActiveDropdownValues] = useState<Array<string>>([])

  const gameParams = getGameParams(games)

  const onButtonClick = (key: string) =>
    setActiveDropdownKeys((prev) => {
      const copy = [...prev]

      if (prev.includes(key)) {
        return copy.filter((activeKey) => (activeKey === key ? false : true))
      } else return [...prev, key]
    })

  const onDropdownItemClick = (value: string) => setActiveDropdownValues((prev) => [...prev, value])

  return (
    gameParams?.length &&
    params?.map(({ key, values }) => {
      return (
        <DropdownWrapper key={key}>
          <DropdownButton onClick={() => onButtonClick(key)}>{key}</DropdownButton>
          {activeDropdownKeys.includes(key) ? (
            <DropdownList>
              {values.map((value) => {
                return (
                  <DropdownItem key={value} onClick={() => onDropdownItemClick(value)}>
                    {value}
                  </DropdownItem>
                )
              })}
            </DropdownList>
          ) : null}
        </DropdownWrapper>
      )
    })
  )
}

export const DropdownFilter = memo(DropdownFilterComponent)
