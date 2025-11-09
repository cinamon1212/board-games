'use client'

import React, { useState } from 'react'

import { GamesList, NotFound, HomeCarusel, Header } from '@/components'

import { HomeWrapper, RadialBackground } from './styles'
import { GAMES_LIST } from '@/data'
import { filterGamesByItsCount, filterGamesByRegExp } from '@/helpers'
import { useDebounce } from '@/hooks'

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  const debouncedValue = useDebounce<string>(inputValue, 300)

  const filteredGamesByItsCount = filterGamesByItsCount(GAMES_LIST)
  const games = filterGamesByRegExp(filteredGamesByItsCount, debouncedValue)

  return (
    <HomeWrapper>
      <RadialBackground $top={'-50px'} $left={'-30%'} />

      <HomeCarusel games={games} />

      <Header inputValue={inputValue} setInputValue={setInputValue} />

      {games.length ? <GamesList games={games} /> : <NotFound />}

      <RadialBackground $bottom={'-50px'} $right={'-30%'} />
    </HomeWrapper>
  )
}

export default Home
