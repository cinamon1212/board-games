import { DataSets, PersonsMap, Player } from "@/types"

export const createDatasets = (map: PersonsMap<number>) => {
    const datasets: DataSets = []
  
    let personCount = 0
  
    for (const person in map) {
      const name = person as Player
      const currentItem = map[name]
  
      if (currentItem) {
        datasets.push({
          label: name,
          data: currentItem.scores || [],
          fill: false,
          tension: 0.3,
          borderColor: currentItem.color,
        })
    
        personCount++
      }
    }
  
  return datasets
}