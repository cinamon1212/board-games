import { PlayerScores } from '@/types'
import { getGamesByPersonsMap } from './getGamesByPersonsMap'
import { getPersonBoolGamesStatistics } from './getPersonBoolGamesStatistics'

export const getTransformedDataFromBoolGames = (boolGames: PlayerScores<boolean>) => {
  const map = getGamesByPersonsMap<boolean>(boolGames)

  const boolGamesStatisticMap = getPersonBoolGamesStatistics(map)

  return boolGamesStatisticMap
}
