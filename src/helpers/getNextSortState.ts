import { TABLE_SORT_STATES } from '@/constants'

export const getNextSortState = (current: keyof typeof TABLE_SORT_STATES) => {
  const { asc, desc, none } = TABLE_SORT_STATES

  switch (current) {
    case none:
      return asc
    case asc:
      return desc
    case desc:
      return none
    default:
      return none
  }
}
