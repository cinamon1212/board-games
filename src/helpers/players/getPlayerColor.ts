import { PlayerId, PlayersById } from '@/types'

/**
 * Получает цвет игрока или комбинацию цветов для команды.
 * Если игрок одиночный, возвращает его цвет.
 * Если это команда (формат "Игрок1 & Игрок2"), возвращает цвета через запятую.
 *
 * @param name - Имя игрока или команды
 * @returns Цвет или строка с цветами через запятую для команды
 */
export const getPlayerColor = (
  playerIds: Array<PlayerId>,
  playersById: PlayersById,
): string => {
  if (!playerIds.length) {
    console.warn('[getPlayerColor] empty playerIds')
    return '#999'
  }

  const colors: string[] = []

  for (const playerId of playerIds) {
    const player = playersById[playerId]

    if (!player) {
      console.warn('[getPlayerColor] unknown player:', playerId)
      colors.push('#999')
      continue
    }

    colors.push(player.color)
  }

  return colors.join(', ')
}
