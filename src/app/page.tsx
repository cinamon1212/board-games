'use client'

import React, { useState } from 'react'

import { GamesList, NotFound, SearchInput } from '@/components'

import { HomeWrapper } from './styles'
import { GAMES_LIST } from '@/data'
import { filterGamesByItsCount, filterGamesByRegExp } from '@/helpers'

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  const filteredGamesByItsCount = filterGamesByItsCount(GAMES_LIST)
  const games = filterGamesByRegExp(filteredGamesByItsCount, inputValue)

  return (
    <HomeWrapper>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      {games.length ? <GamesList games={games} /> : <NotFound />}
    </HomeWrapper>
  )
}

export default Home
