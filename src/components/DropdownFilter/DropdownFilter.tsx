'use client'

import { memo, useCallback, useMemo, useState } from 'react'

import { GameParams, PlayerScores, SingleGameResult } from '@/types'

import {
  DropdownButton,
  DropdownItem,
  DropdownList,
  DropdownWrapper,
} from './styles'

type DropdownFilterProps<T extends SingleGameResult> = {
  games: PlayerScores<T>
  params?: GameParams
  onFilterChange: (filteredGames: PlayerScores<T>) => void
}

const DropdownFilterComponent = <T extends SingleGameResult>({
  games,
  params,
  onFilterChange,
}: DropdownFilterProps<T>) => {
  const [activeDropdownKeys, setActiveDropdownKeys] = useState<Array<string>>(
    [],
  )
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({})

  const filteredGames = useMemo(() => {
    const selectedEntries = Object.entries(selectedFilters)

    if (selectedEntries.length === 0) {
      return games
    }

    return games.filter((game) => {
      const gameParams = game.params

      if (!gameParams || gameParams.length === 0) {
        return false
      }

      return selectedEntries.every(([filterKey, filterValue]) => {
        const gameParam = gameParams.find((p) => p.key === filterKey)

        if (!gameParam) {
          return false
        }

        return gameParam.values.includes(filterValue)
      })
    })
  }, [games, selectedFilters])

  useMemo(() => {
    onFilterChange(filteredGames)
  }, [filteredGames, onFilterChange])

  const onButtonClick = useCallback((key: string) => {
    setActiveDropdownKeys((prev) => {
      if (prev.includes(key)) {
        return prev.filter((activeKey) => activeKey !== key)
      }
      return [...prev, key]
    })
  }, [])

  const onDropdownItemClick = useCallback((key: string, value: string) => {
    setSelectedFilters((prev) => {
      if (prev[key] === value) {
        const { [key]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [key]: value }
    })
  }, [])

  if (!params || params.length === 0) {
    return null
  }

  return (
    <>
      {params.map(({ key, values }) => {
        const selectedValue = selectedFilters[key]
        const isOpen = activeDropdownKeys.includes(key)

        return (
          <DropdownWrapper key={key}>
            <DropdownButton
              onClick={() => onButtonClick(key)}
              data-active={isOpen}
              data-has-selection={!!selectedValue}
            >
              {selectedValue ? `${key}: ${selectedValue}` : key}
            </DropdownButton>
            {isOpen && (
              <DropdownList>
                {values.map((value) => {
                  const isSelected = selectedValue === value

                  return (
                    <DropdownItem
                      key={value}
                      onClick={() => onDropdownItemClick(key, value)}
                      data-selected={isSelected}
                    >
                      {value}
                    </DropdownItem>
                  )
                })}
              </DropdownList>
            )}
          </DropdownWrapper>
        )
      })}
    </>
  )
}

export const DropdownFilter = memo(DropdownFilterComponent) as <
  T extends SingleGameResult,
>(
  props: DropdownFilterProps<T>,
) => ReturnType<typeof DropdownFilterComponent>
