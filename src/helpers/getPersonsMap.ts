import { PersonsMap, PersonsMapGames, Player } from "@/types"

import { SingleGameResult } from '../types';

import { getArithmeticMean } from "./getArithmeticMean";

export const getPersonsMap = <T extends SingleGameResult>(map: PersonsMapGames<T>) => {
    const personsMap: PersonsMap<T> = {}
    let idx = 0
  
    for (const person in map) {
      const name = person as Player
  
      if (map[name]) {
        const {scores, winCount, ...fields} = map[name]
        const isBoolean = typeof scores[0] === 'boolean'
        const numScores = scores as Array<number>
  
        personsMap[name] = {
          scores,
          scoresCount: scores.length,
          avg: isBoolean ? undefined : getArithmeticMean(numScores),
          minScore: isBoolean ? undefined : Math.min(...numScores),
          maxScore: isBoolean ? undefined : Math.max(...numScores),
          winRate: `${Math.ceil((winCount / scores.length) * 100)}%`,
          ...fields
        }
      }
  
      idx++
    }

    return personsMap
}