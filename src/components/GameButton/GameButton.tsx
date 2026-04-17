'use client'

import { FormEvent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { PLAYERS_LIST } from '@/data'
import { useAdmin } from '@/hooks'
import {
  BooleanResultValue,
  GameTitles,
  NumericResultValue,
  Player,
} from '@/types'
import { useAppDispatch } from '@/store'
import { showMessage } from '@/store/slices/messageSlice'
import { saveGameResult } from '@/store/slices/gamesSlice'

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
import { ButtonPrimary } from '@/app/globals'

import { Select } from '../Select'
import { BooleanInput } from '../BooleanInput'
import { NumericInput } from '../NumericInput/NumericInput'

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

const buildNumericResults = (rows: Row[]): NumericResultValue => {
  if (!rows.length) throw new Error('Добавьте хотя бы одного игрока.')

  return rows.reduce<NumericResultValue>((acc, { player, score }) => {
    if (!player) throw new Error('Выберите игрока для каждой строки.')
    if (!score?.trim())
      throw new Error(`Укажите результат для игрока "${player}".`)

    const parsed = Number(score)
    if (!Number.isFinite(parsed))
      throw new Error(`Некорректный результат для игрока "${player}".`)
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

export const GameButton = ({ title, slug, isBoolean }: GameButtonProps) => {
  const dispatch = useAppDispatch()
  const { isAdmin, isLoading, user } = useAdmin()

  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rows, setRows] = useState<Row[]>(() => [createRow(!isBoolean)])
  const [winner, setWinner] = useState<Player | ''>('')

  const selectedPlayers = getSelectedPlayers(rows)

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
        : buildNumericResults(rows)

      await dispatch(
        saveGameResult({
          title,
          slug,
          isBoolean: !!isBoolean,
          results,
        }),
      ).unwrap()

      dispatch(
        showMessage({
          type: 'success',
          value: 'Результат игры успешно отправлен.',
        }),
      )

      resetForm()
      setIsOpen(false)
    } catch (error) {
      dispatch(
        showMessage({
          type: 'danger',
          value: getErrorMessage(error),
        }),
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading || !user || !isAdmin) return null

  const availablePlayers = (current: Player | '') =>
    PLAYERS_LIST.filter(
      ({ name }) => name === current || !selectedPlayers.includes(name),
    )

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
                    <PlayerRow key={row.id}>
                      <Field>
                        <FieldLabel htmlFor={`player-${row.id}`}>
                          Игрок
                        </FieldLabel>

                        <Select
                          value={row.player}
                          onChange={(value) => updatePlayer(row.id, value)}
                          isDisabled={isSubmitting}
                          options={availablePlayers(row.player).map(
                            ({ name }) => ({
                              value: name,
                              label: name,
                            }),
                          )}
                        />
                      </Field>

                      {isBoolean ? (
                        <Field>
                          <FieldLabel>Победитель</FieldLabel>
                          <BooleanInput
                            name={`winner-${title}`}
                            value={row.player}
                            checked={winner === row.player}
                            onChange={(value) => setWinner(value)}
                            disabled={isSubmitting || !row.player}
                          />
                        </Field>
                      ) : (
                        <Field>
                          <FieldLabel htmlFor={`score-${row.id}`}>
                            Результат
                          </FieldLabel>

                          <NumericInput
                            id={`score-${row.id}`}
                            type='number'
                            inputMode='numeric'
                            placeholder='0'
                            value={row.score ?? ''}
                            onChange={(e) =>
                              updateScore(row.id, e.target.value)
                            }
                            disabled={isSubmitting}
                          />
                        </Field>
                      )}
                      <RemovePlayerButton
                        type='button'
                        onClick={() => removeRow(row.id)}
                        disabled={isSubmitting}
                      >
                        Удалить
                      </RemovePlayerButton>
                    </PlayerRow>
                  ))}

                  <AddPlayerButton
                    type='button'
                    onClick={addRow}
                    disabled={isSubmitting}
                  >
                    Добавить игрока
                  </AddPlayerButton>

                  <ButtonDescription>
                    Игроки берутся из списка players.ts, повторения отключены.
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
