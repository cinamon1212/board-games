import { PersonsMap, Player, TopsBooleanDataArr } from '@/types'

export const transformDataForBooleanTops = (personsMap: PersonsMap<boolean>) => {
  const tableDataArr: TopsBooleanDataArr = Object.entries(personsMap).map(([name, data]) => ({
    name: name as Player,
    ...data,
  }))

  return tableDataArr.sort((firstItem, secondItem) => {
    const firstWinrate = firstItem.winRate
    const secondWinrate = secondItem.winRate
    let res = 0

    if (firstWinrate && secondWinrate) {
      if (firstWinrate > secondWinrate) res -= 1
      if (firstWinrate < secondWinrate) res = 1
    }
    return res
  })
}
