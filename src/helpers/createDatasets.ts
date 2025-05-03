import { COLORS } from "@/data"
import { DataSets, GamesByPersonsMap, Player } from "@/types"

export const createDatasets = (map: GamesByPersonsMap<Array<number>>) => {
    const datasets: DataSets = []
  
    let personCount = 0
  
    for (const person in map) {
      const name = person as Player
  
      datasets.push({
        label: name,
        data: map[name] || [],
        fill: false,
        tension: 0.3,
        borderColor: COLORS[personCount],
      })
  
      personCount++
    }
  
  return datasets
}