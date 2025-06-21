import { PlayerScores } from '@/types'

import { getPersonsMap } from './getPersonsMap'
import { getPersonsMapGames } from './getPersonsMapGames'
import { createDataForPie } from './createDataForPie'
import { transformDataForBooleanTops } from './transformDataForBooleanTops'


export const getTransformedDataFromBoolGames = (boolGames: PlayerScores<boolean>) => {
  const map = getPersonsMapGames<boolean>(boolGames)
  
  const { personsMap } = getPersonsMap<boolean>(map)

  const data = createDataForPie(personsMap)
  const tops = transformDataForBooleanTops(personsMap)
  return { data, tops }

}
