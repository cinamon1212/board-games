import { PLAYERS_BY_NAME } from '@/data'
import { Player } from '@/types'

// формирует цвет или сумму цветов
export const getPlayerColor = (name: Player): string => {
  const splitted = name.split(' ')

  const notSinglePlayer = splitted.length !== 1

  if (notSinglePlayer) {
    const firstName = splitted[0] as Player
    const secondName = splitted[2] as Player

    const firstColor = PLAYERS_BY_NAME[firstName].color
    const secondColor = PLAYERS_BY_NAME[secondName].color

    return firstColor + ', ' + secondColor
  }

  return PLAYERS_BY_NAME[name].color
}
