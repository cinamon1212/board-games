import { Player } from '@/types'

/**
 * Сортирует имена игроков в команде по алфавиту.
 * Если это команда (содержит " & "), сортирует имена по первой букве.
 * Если это одиночный игрок, возвращает имя без изменений.
 *
 * @param name - Имя игрока или команды
 * @returns Отсортированное имя команды или исходное имя одиночного игрока
 */
export const sortPlayerName = (name: Player): Player => {
  if (name.includes(' & '))
    return name
      .split(' & ')
      .sort((firstName, secondName) => (firstName[0] < secondName[0] ? -1 : 1))
      .join(' & ') as Player
  else return name
}
