'use client'

import { useCallback, useState } from 'react'

import { Player } from '@/types'

import { createRow, Row } from './row'

type GameResultForm = {
  rows: Row[]
  winner: Player | ''
  addRow: () => void
  removeRow: (id: string) => void
  updatePlayer: (id: string, value: Player | '') => void
  updateScore: (id: string, score: string) => void
  setWinner: (value: Player | '') => void
  resetForm: () => void
}

/**
 * Инкапсулирует состояние формы ввода результата:
 * - строки игроков (rows) с их id/player/score;
 * - выбранного победителя (winner, только для булевых игр);
 * - все мутации строк и валидационные правила сброса.
 *
 * `GameButton` не знает, как устроены строки — он работает с этим hook'ом.
 */
export const useGameResultForm = (
  isBoolean: boolean | undefined,
): GameResultForm => {
  const [rows, setRows] = useState<Row[]>(() => [createRow(!isBoolean)])
  const [winner, setWinner] = useState<Player | ''>('')

  const isNumeric = !isBoolean

  const addRow = useCallback(
    () => setRows((prev) => [...prev, createRow(isNumeric)]),
    [isNumeric],
  )

  const removeRow = useCallback(
    (id: string) => {
      setRows((prev) => {
        if (prev.length === 1) return [createRow(isNumeric)]

        const removed = prev.find((r) => r.id === id)
        if (removed?.player === winner) setWinner('')

        return prev.filter((r) => r.id !== id)
      })
    },
    [isNumeric, winner],
  )

  const updatePlayer = useCallback((id: string, value: Player | '') => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, player: value } : row)),
    )
  }, [])

  const updateScore = useCallback((id: string, score: string) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, score } : row)),
    )
  }, [])

  const resetForm = useCallback(() => {
    setWinner('')
    setRows([createRow(isNumeric)])
  }, [isNumeric])

  return {
    rows,
    winner,
    addRow,
    removeRow,
    updatePlayer,
    updateScore,
    setWinner,
    resetForm,
  }
}
