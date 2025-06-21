import { Player } from '@/types'

export const sortPlayerName = (name: Player): Player => {
  if (name.includes(' & '))
    return name
      .split(' & ')
      .sort((firstName, secondName) => (firstName[0] < secondName[0] ? -1 : 1))
      .join(' & ') as Player
  else return name
}
