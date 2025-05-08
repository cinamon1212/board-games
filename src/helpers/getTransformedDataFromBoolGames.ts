import { PlayerScores } from '@/types'

import { getPersonsMap } from './getPersonsMap'
import { getPersonsMapGames } from './getPersonsMapGames'

export const getTransformedDataFromBoolGames = (boolGames: PlayerScores<boolean>) => {
  const map = getPersonsMapGames<boolean>(boolGames)
  const personsMap = getPersonsMap<boolean>(map)

  return personsMap
}
