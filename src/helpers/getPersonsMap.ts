import { PersonsMap, PersonsMapGames, Player } from "@/types"

import { SingleGameResult } from '../types';
import { COLORS } from "@/data";

import { getArithmeticMean } from "./getArithmeticMean";

export const getPersonsMap = <T extends SingleGameResult>(map: PersonsMapGames<T>) => {
    const personsMap: PersonsMap<T> = {}
    let idx = 0
  
    for (const person in map) {
      const name = person as Player
  
      if (map[name]) {
        const scores = map[name]
        const color = COLORS[idx]
        const isBoolean = typeof scores[0] === 'boolean'
        const numScores = scores.slice(1) as Array<number>
  
        personsMap[name] = {
          scores,
          color,
          id: idx,
          scoresCount: scores.length,
          avg: isBoolean ? undefined : getArithmeticMean(numScores),
          minScore: isBoolean ? undefined : Math.min(...numScores),
          maxScore: isBoolean ? undefined : Math.max(...numScores)
        }
      }
  
      idx++
    }
  
    return personsMap
}