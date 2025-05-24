import { PersonsMap, Player } from '@/types'
import { ChartData } from 'chart.js'

export const createDataForPie = (personsMap: PersonsMap<boolean>) => {
  const data: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  }

  const winRates: Array<number> = []
  const backgroundColor: Array<string> = []

  for (const person in personsMap) {
    const name = person as Player
    const current = personsMap[name]

    data.labels?.push(name)
    winRates.push(Number(current?.winRate.slice(0, -1)))
    if (current?.color) backgroundColor.push(current?.color)
  } 
  
  data.datasets.push({
    data: winRates,
    backgroundColor,
    borderWidth: 0
  })

  return data
}
