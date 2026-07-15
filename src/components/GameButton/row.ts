import { Player, PlayersById } from '@/types'

/**
 * Строка формы ввода результата.
 * `player` — пустая строка, пока игрок не выбран из списка.
 * `score` присутствует только в числовых играх.
 */
export type Row = {
  id: string
  player: Player | ''
  score?: string
}

export const createId = () =>
  globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`

export const createRow = (isNumeric: boolean): Row => ({
  id: createId(),
  player: '' as const,
  ...(isNumeric ? { score: '' } : {}),
})

export const getPlayerName = (playerId: Player, playersById: PlayersById) =>
  playersById[playerId].name

export const getSelectedPlayers = (rows: Row[]): Player[] =>
  rows.map(({ player }) => player).filter(Boolean)
