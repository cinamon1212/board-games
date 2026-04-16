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
export const getPlayerColor = (name: string): string => {
  if (!name) {
    console.warn('[getPlayerColor] empty name')
    return '#999'
  }

  const splitted = name.split('&').map((n) => n.trim())

  const colors: string[] = []

  for (const singleName of splitted) {
    const player = PLAYERS_BY_NAME[singleName as Player]

    if (!player) {
      console.warn('[getPlayerColor] unknown player:', singleName)
      colors.push('#999')
      continue
    }

    colors.push(player.color)
  }

  return colors.join(', ')
}
