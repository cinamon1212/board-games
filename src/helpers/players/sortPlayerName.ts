import { PlayerId } from '@/types'

/**
 * Сортирует имена игроков в команде по алфавиту.
 * Если это команда (содержит " & "), сортирует имена по первой букве.
 * Если это одиночный игрок, возвращает имя без изменений.
 *
 * @param name - Имя игрока или команды
 * @returns Отсортированное имя команды или исходное имя одиночного игрока
 */
export const sortPlayerName = (playerIds: Array<PlayerId>): Array<PlayerId> =>
  [...playerIds].sort((firstId, secondId) =>
    firstId < secondId ? -1 : firstId > secondId ? 1 : 0,
  )
