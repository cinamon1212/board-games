'use client'

import { FormEvent, memo, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'

import { useAdmin } from '@/hooks'

import {
  BooleanResultValue,
  GameTitles,
  NumericResultValue,
  Player,
  PlayersById,
} from '@/types'

import {
  useAppDispatch,
  setMessage,
  saveGameResult,
  selectPlayersById,
} from '@/store'

import {
  AddPlayerButton,
  ButtonDescription,
  CloseButton,
  Field,
  FieldGroup,
  FieldLabel,
  FormActions,
  FormContent,
  FormHeader,
  FormSubtitle,
  FormTitle,
  ModalCard,
  ModalOverlay,
  PlayerRow,
  RemovePlayerButton,
} from './styles'

import { ButtonPrimary } from '@/app/styles'

import { Select } from '../Select'
import { BooleanInput } from '../BooleanInput'
import { NumericInput } from '../NumericInput'

type GameButtonProps = {
  title: GameTitles
  slug: string
  isBoolean?: boolean
}

type Row = {
  id: string
  player: Player | ''
  score?: string
}

const createId = () =>
  globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`

const createRow = (isNumeric: boolean): Row => ({
  id: createId(),
  player: '' as const,
  ...(isNumeric ? { score: '' } : {}),
})

const getPlayerName = (playerId: Player, playersById: PlayersById) =>
  playersById[playerId]?.name ?? playerId

const buildNumericResults = (
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

const buildBooleanResults = (
  rows: Row[],
  winner: Player,
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

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : 'Не удалось отправить результат.'

const getSelectedPlayers = (rows: Row[]): Player[] =>
  rows.map(({ player }) => player).filter(Boolean) as Player[]

type PlayerFormRowProps = {
  row: Row
  title: GameTitles
  isBoolean: boolean | undefined
  isSubmitting: boolean
  winner: Player | ''
  playersById: PlayersById
  selectedPlayers: Player[]
  onUpdatePlayer: (id: string, value: string) => void
  onUpdateScore: (id: string, score: string) => void
  onRemove: (id: string) => void
  onSetWinner: (value: Player) => void
}

/**
 * Мемоизированная строка формы.
 *
 * `options` для `<Select>` стабилен, пока не изменились
 * `playersById` (стабильная ссылка из Redux) или `selectedPlayers` —
 * это убирает «прыжки» react-select при перерендере формы.
 */
const PlayerFormRow = memo(function PlayerFormRow({
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

export const GameButton = ({ title, slug, isBoolean }: GameButtonProps) => {
  const dispatch = useAppDispatch()
  const { isAdmin, isLoading, user } = useAdmin()
  const playersById = useSelector(selectPlayersById)

  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rows, setRows] = useState<Row[]>(() => [createRow(!isBoolean)])
  const [winner, setWinner] = useState<Player | ''>('')

  // Стабильная ссылка между rerender'ами одной и той же конфигурации строк —
  // иначе useMemo внутри PlayerFormRow пересчитывал бы options на каждый ввод символа.
  const selectedPlayers = useMemo(() => getSelectedPlayers(rows), [rows])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isSubmitting) setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, isSubmitting])

  const closeModal = () => {
    if (isSubmitting) return
    setIsOpen(false)
  }

  const resetForm = () => {
    setWinner('')
    setRows([createRow(!isBoolean)])
  }

  const addRow = () => setRows((prev) => [...prev, createRow(!isBoolean)])

  const removeRow = (id: string) => {
    setRows((prev) => {
      if (prev.length === 1) return [createRow(!isBoolean)]

      const removed = prev.find((r) => r.id === id)
      if (removed?.player === winner) setWinner('' as const)

      return prev.filter((r) => r.id !== id)
    })
  }

  const updatePlayer = (id: string, value: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, player: value as Player | '' } : row,
      ),
    )
  }

  const updateScore = (id: string, score: string) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, score } : row)),
    )
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!user) return

    setIsSubmitting(true)
    try {
      const results = isBoolean
        ? buildBooleanResults(rows, winner as Player)
        : buildNumericResults(rows, playersById)

      await dispatch(
        saveGameResult({
          title,
          slug,
          isBoolean: !!isBoolean,
          results,
        }),
      ).unwrap()

      dispatch(
        setMessage({
          type: 'success',
          value: 'Результат игры успешно отправлен.',
        }),
      )

      resetForm()
      setIsOpen(false)
    } catch (error) {
      dispatch(
        setMessage({
          type: 'danger',
          value: getErrorMessage(error),
        }),
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading || !user || !isAdmin) return null

  return (
    <>
      <ButtonPrimary
        type='button'
        onClick={() => setIsOpen(true)}
        aria-haspopup='dialog'
        aria-expanded={isOpen}
      >
        Добавить результат
      </ButtonPrimary>

      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <ModalOverlay onClick={closeModal}>
            <ModalCard onClick={(e) => e.stopPropagation()}>
              <FormHeader>
                <div>
                  <FormTitle>{title}</FormTitle>
                  <FormSubtitle>
                    {isBoolean
                      ? 'Добавьте игроков и выберите одного победителя.'
                      : 'Добавьте игроков и укажите их числовые результаты.'}
                  </FormSubtitle>
                </div>

                <CloseButton
                  type='button'
                  onClick={closeModal}
                  disabled={isSubmitting}
                  aria-label='Закрыть окно'
                >
                  ×
                </CloseButton>
              </FormHeader>

              <FormContent onSubmit={handleSubmit}>
                <FieldGroup>
                  {rows.map((row) => (
                    <PlayerFormRow
                      key={row.id}
                      row={row}
                      title={title}
                      isBoolean={isBoolean}
                      isSubmitting={isSubmitting}
                      winner={winner}
                      playersById={playersById}
                      selectedPlayers={selectedPlayers}
                      onUpdatePlayer={updatePlayer}
                      onUpdateScore={updateScore}
                      onRemove={removeRow}
                      onSetWinner={setWinner}
                    />
                  ))}

                  <AddPlayerButton
                    type='button'
                    onClick={addRow}
                    disabled={isSubmitting}
                  >
                    Добавить игрока
                  </AddPlayerButton>

                  <ButtonDescription>
                    Игроки берутся из узла players, повторения отключены.
                    {isBoolean &&
                      ' Выберите одного победителя из добавленных игроков.'}
                  </ButtonDescription>
                </FieldGroup>

                <FormActions>
                  <ButtonPrimary type='submit' disabled={isSubmitting}>
                    {isSubmitting ? 'Сохраняем...' : 'Добавить результат'}
                  </ButtonPrimary>
                </FormActions>
              </FormContent>
            </ModalCard>
          </ModalOverlay>,
          document.body,
        )}
    </>
  )
}
