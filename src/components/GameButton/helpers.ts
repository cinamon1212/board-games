import {
  BooleanResultValue,
  NumericResultValue,
  Player,
  PlayersById,
} from '@/types'

import { getPlayerName, Row } from './row'

/**
 * Превращает строки формы в числовой результат для сохранения.
 * Бросает Error с человекочитаемым сообщением при любой ошибке валидации.
 */
export const buildNumericResults = (
  rows: Row[],
  playersById: PlayersById,
): NumericResultValue => {
  if (!rows.length) throw new Error('Добавьте хотя бы одного игрока.')

  return rows.reduce<NumericResultValue>((acc, { player, score }) => {
    if (!player) throw new Error('Выберите игрока для каждой строки.')
    if (!score?.trim())
      throw new Error(
        `Укажите результат для игрока "${getPlayerName(player, playersById)}".`,
      )

    const parsed = Number(score)
    if (!Number.isFinite(parsed))
      throw new Error(
        `Некорректный результат для игрока "${getPlayerName(player, playersById)}".`,
      )
    if (player in acc) throw new Error('Игрок не может быть добавлен дважды.')

    acc[player] = parsed
    return acc
  }, {})
}

/**
 * Превращает строки формы в булевый результат (победитель/проигравшие).
 * Бросает Error с человекочитаемым сообщением при любой ошибке валидации.
 */
export const buildBooleanResults = (
  rows: Row[],
  winner: Player | '',
): BooleanResultValue => {
  if (!rows.length) throw new Error('Добавьте хотя бы одного игрока.')
  if (!winner) throw new Error('Выберите победителя.')

  const players: Player[] = []
  for (const { player } of rows) {
    if (!player) throw new Error('Выберите игрока для каждой строки.')
    if (players.includes(player))
      throw new Error('Игрок не может быть добавлен дважды.')
    players.push(player)
  }

  return players.reduce<BooleanResultValue>((acc, player) => {
    acc[player] = player === winner
    return acc
  }, {})
}

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : 'Не удалось отправить результат.'
