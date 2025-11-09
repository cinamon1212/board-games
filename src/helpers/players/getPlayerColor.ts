import { PLAYERS_BY_NAME } from '@/data'
import { Player } from '@/types'

/**
 * Получает цвет игрока или комбинацию цветов для команды.
 * Если игрок одиночный, возвращает его цвет.
 * Если это команда (формат "Игрок1 & Игрок2"), возвращает цвета через запятую.
 *
 * @param name - Имя игрока или команды
 * @returns Цвет или строка с цветами через запятую для команды
 */
export const getPlayerColor = (name: Player): string => {
  const splitted = name.split(' & ') as Array<Player>

  const notSinglePlayer = splitted.length !== 1

  if (notSinglePlayer) {
    const colors: Array<string> = []

    splitted.forEach((singleName) => {
      colors.push(PLAYERS_BY_NAME[singleName].color)
    })

    return colors.join(', ')
  }

  return PLAYERS_BY_NAME[name].color
}

