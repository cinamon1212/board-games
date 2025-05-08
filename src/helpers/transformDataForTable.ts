import { PersonsMap, Player, TableDataArr } from "@/types";

export const transformDataForTable = (personsMap: PersonsMap<number>) => {
  const tableDataArr: TableDataArr = []

  for (const person in personsMap) {
    const name = person as Player

    tableDataArr.push({ name, ...personsMap[name] })
  }

  return tableDataArr
}