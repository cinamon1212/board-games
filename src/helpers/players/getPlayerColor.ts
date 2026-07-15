import { PlayerId, PlayersById } from '@/types'

/**
 * Получает цвет игрока или комбинацию цветов для команды.
 * Если игрок одиночный, возвращает его цвет.
 * Если это команда (формат "Игрок1 & Игрок2"), возвращает цвета через запятую.
 *
 * @param playerIds - Список ID игроков команды
 * @param playersById - Словарь профилей игроков
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

  return playerIds.map((id) => playersById[id].color).join(', ')
}
