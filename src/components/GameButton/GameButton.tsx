'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'

import { useAdmin } from '@/hooks'
import { BooleanResultValue, GameTitles, NumericResultValue } from '@/types'
import {
  useAppDispatch,
  setMessage,
  saveGameResult,
  selectPlayersById,
} from '@/store'
import { ButtonPrimary } from '@/app/styles'

import {
  buildBooleanResults,
  buildNumericResults,
  getErrorMessage,
} from './helpers'
import { PlayerFormRow } from './PlayerFormRow'
import { getSelectedPlayers } from './row'
import {
  AddPlayerButton,
  ButtonDescription,
  CloseButton,
  FieldGroup,
  FormActions,
  FormContent,
  FormHeader,
  FormSubtitle,
  FormTitle,
  ModalCard,
  ModalOverlay,
} from './styles'
import { useGameResultForm } from './useGameResultForm'

type GameButtonProps = {
  title: GameTitles
  slug: string
  isBoolean?: boolean
}

export const GameButton = ({ title, slug, isBoolean }: GameButtonProps) => {
  const dispatch = useAppDispatch()
  const { isAdmin, isLoading, user } = useAdmin()
  const playersById = useSelector(selectPlayersById)

  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useGameResultForm(isBoolean)

  // Стабильная ссылка между rerender'ами одной и той же конфигурации строк —
  // иначе useMemo внутри PlayerFormRow пересчитывал бы options на каждый ввод символа.
  const selectedPlayers = useMemo(
    () => getSelectedPlayers(form.rows),
    [form.rows],
  )

  // Блокируем скролл и закрываем по Esc, пока модалка открыта
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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!user) return

    setIsSubmitting(true)
    try {
      const results: NumericResultValue | BooleanResultValue = isBoolean
        ? buildBooleanResults(form.rows, form.winner)
        : buildNumericResults(form.rows, playersById)

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

      form.resetForm()
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
                  {form.rows.map((row) => (
                    <PlayerFormRow
                      key={row.id}
                      row={row}
                      title={title}
                      isBoolean={isBoolean}
                      isSubmitting={isSubmitting}
                      winner={form.winner}
                      playersById={playersById}
                      selectedPlayers={selectedPlayers}
                      onUpdatePlayer={form.updatePlayer}
                      onUpdateScore={form.updateScore}
                      onRemove={form.removeRow}
                      onSetWinner={form.setWinner}
                    />
                  ))}

                  <AddPlayerButton
                    type='button'
                    onClick={form.addRow}
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
