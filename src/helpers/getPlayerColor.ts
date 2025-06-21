import { PLAYERS_BY_NAME } from '@/data'
import { Player } from '@/types'

// формирует цвет или сумму цветов
export const getPlayerColor = (name: Player): string => {
  const splitted = name.split(' & ') as Array<Player>

  const notSinglePlayer = splitted.length !== 1

  if (notSinglePlayer) {
    const colors: Array<string> = []

    splitted.forEach((singleName) => {
      colors.push(PLAYERS_BY_NAME[singleName].color)
    });

    return colors.join(', ')
  }

  return PLAYERS_BY_NAME[name].color
}
