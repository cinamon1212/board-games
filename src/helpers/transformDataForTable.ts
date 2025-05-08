import { PersonsMap, Player, TableDataArr } from '@/types'

export const transformDataForTable = (personsMap: PersonsMap<number>) => {
  const tableDataArr: TableDataArr = []

  for (const person in personsMap) {
    const name = person as Player

    tableDataArr.push({ name, ...personsMap[name] })
  }

  return tableDataArr.sort((firstItem, secondItem) => {
    const firstAvg = firstItem.avg
    const secondAvg = secondItem.avg

    let res = 0

    if (firstAvg && secondAvg) {
      if (firstAvg < secondAvg) res = 1
      else res = -1
    }

    return res
  })
}
