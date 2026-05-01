'use client'

import React, { useState } from 'react'

import {
  GamesList,
  NotFound,
  HomeCarousel,
  Header,
  AuthGuard,
} from '@/components'

import { RadialBackground } from './styles'
import { GAMES_LIST } from '@/data'
import { filterGamesByItsCount, filterGamesByRegExp } from '@/helpers'
import { useDebounce } from '@/hooks'

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  const debouncedValue = useDebounce<string>(inputValue, 300)

  const filteredGamesByItsCount = filterGamesByItsCount(GAMES_LIST)
  const games = filterGamesByRegExp(filteredGamesByItsCount, debouncedValue)

  return (
    <AuthGuard>
      <RadialBackground $top={'-50px'} $left={'-30%'} />

      <HomeCarousel games={games} />

      <Header inputValue={inputValue} setInputValue={setInputValue} />

      {games.length ? <GamesList games={games} /> : <NotFound />}

      <RadialBackground $bottom={'-50px'} $right={'-30%'} />
    </AuthGuard>
  )
}

export default Home
