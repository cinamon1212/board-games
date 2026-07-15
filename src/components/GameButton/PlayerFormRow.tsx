'use client'

import { memo, useMemo } from 'react'

import { GameTitles, Player, PlayersById } from '@/types'

import { Select } from '../Select'
import { BooleanInput } from '../BooleanInput'
import { NumericInput } from '../NumericInput'

import { Row } from './row'
import { Field, FieldLabel, PlayerRow, RemovePlayerButton } from './styles'

type PlayerFormRowProps = {
  row: Row
  title: GameTitles
  isBoolean: boolean | undefined
  isSubmitting: boolean
  winner: Player | ''
  playersById: PlayersById
  selectedPlayers: Player[]
  onUpdatePlayer: (id: string, value: Player | '') => void
  onUpdateScore: (id: string, score: string) => void
  onRemove: (id: string) => void
  onSetWinner: (value: Player | '') => void
}

/**
 * Мемоизированная строка формы.
 *
 * `options` для `<Select>` стабилен, пока не изменились
 * `playersById` (стабильная ссылка из Redux) или `selectedPlayers` —
 * это убирает «прыжки» react-select при перерендере формы.
 */
export const PlayerFormRow = memo(function PlayerFormRow({
  row,
  title,
  isBoolean,
  isSubmitting,
  winner,
  playersById,
  selectedPlayers,
  onUpdatePlayer,
  onUpdateScore,
  onRemove,
  onSetWinner,
}: PlayerFormRowProps) {
  const options = useMemo(() => {
    const taken = new Set(selectedPlayers)
    return Object.values(playersById)
      .filter(({ id }) => id === row.player || !taken.has(id))
      .map(({ id, name }) => ({ value: id, label: name }))
  }, [playersById, selectedPlayers, row.player])

  return (
    <PlayerRow>
      <Field>
        <FieldLabel htmlFor={`player-${row.id}`}>Игрок</FieldLabel>

        <Select
          value={row.player}
          onChange={(value) => onUpdatePlayer(row.id, value)}
          isDisabled={isSubmitting}
          options={options}
        />
      </Field>

      {isBoolean ? (
        <Field>
          <FieldLabel>Победитель</FieldLabel>
          <BooleanInput
            name={`winner-${title}`}
            value={row.player}
            checked={winner === row.player}
            onChange={(value) => onSetWinner(value)}
            disabled={isSubmitting || !row.player}
          />
        </Field>
      ) : (
        <Field>
          <FieldLabel htmlFor={`score-${row.id}`}>Результат</FieldLabel>

          <NumericInput
            id={`score-${row.id}`}
            type='number'
            inputMode='numeric'
            placeholder='0'
            value={row.score ?? ''}
            onChange={(e) => onUpdateScore(row.id, e.target.value)}
            disabled={isSubmitting}
          />
        </Field>
      )}

      <RemovePlayerButton
        type='button'
        onClick={() => onRemove(row.id)}
        disabled={isSubmitting}
      >
        Удалить
      </RemovePlayerButton>
    </PlayerRow>
  )
})
