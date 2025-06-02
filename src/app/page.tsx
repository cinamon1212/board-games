'use client'

import React, { useState } from 'react'

import { GamesList, NotFound, SearchInput } from '@/components'

import { Header, HomeWrapper, RadialBackground, Title } from './styles'
import { GAMES_LIST } from '@/data'
import { filterGamesByItsCount, filterGamesByRegExp } from '@/helpers'

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  const filteredGamesByItsCount = filterGamesByItsCount(GAMES_LIST)
  const games = filterGamesByRegExp(filteredGamesByItsCount, inputValue)

  return (
    <HomeWrapper>
      <RadialBackground top={'-5%'} left={'-30%'} />

      <Header>
        <Title>Найдите нужную игру</Title>
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      </Header>

      {games.length ? <GamesList games={games} /> : <NotFound />}

      <RadialBackground bottom={'-5%'} right={'-30%'}/>
    </HomeWrapper>
  )
}

export default Home
