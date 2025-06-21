import { PersonsMap, Player, SingleGameResult, TableDataArr } from '@/types'

export const transformDataForTable = (personsMap: PersonsMap<SingleGameResult>, flag: 'avg' | 'winRate') => {
  const tableDataArr: TableDataArr = []

  for (const person in personsMap) {
    const name = person as Player

    tableDataArr.push({ name, ...personsMap[name] })
  }

  return tableDataArr.sort((firstItem, secondItem) => {
    const firstAvg = firstItem[flag]
    const secondAvg = secondItem[flag]

    let res = 0

    if (firstAvg && secondAvg) {
      if (firstAvg < secondAvg) res = 1
      else res = -1
    }

    return res
  })
}
