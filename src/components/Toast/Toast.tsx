'use client'

import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch, clearMessage } from '@/store'
import { AlertMessage, AlertTitle, AlertWrapper, CloseButton } from './styles'

const TOAST_AUTO_HIDE_MS = 5000

export const Toast: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const message = useSelector((state: RootState) => state.auth.message)

  useEffect(() => {
    if (!message) return

    const timeoutId = window.setTimeout(() => {
      dispatch(clearMessage())
    }, TOAST_AUTO_HIDE_MS)

    return () => window.clearTimeout(timeoutId)
  }, [message, dispatch])

  const TITLE_MAP: Record<string, string> = {
    danger: 'Ошибка!',
    success: 'Успешно!',
    info: 'Внимание!',
  }

  const title = message ? TITLE_MAP[message.type] || '' : ''

  if (!message) return null

  return (
    <AlertWrapper type={message.type}>
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertMessage>{message.value}</AlertMessage>
      <CloseButton onClick={() => dispatch(clearMessage())}>
        &times;
      </CloseButton>
    </AlertWrapper>
  )
}
