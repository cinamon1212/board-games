'use client'

import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { clearMessage } from '../../store/slices/messageSlice'
import { AlertMessage, AlertTitle, AlertWrapper, CloseButton } from './styles'

export const Toast: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const message = useSelector((state: RootState) => state.ui.message)

  const TITLE_MAP: Record<string, string> = {
    danger: 'Ошибка!',
    success: 'Успешно!',
    info: 'Внимание!',
  }

  const title = useMemo(
    () => (message ? TITLE_MAP[message.type] || '' : ''),
    [message, TITLE_MAP],
  )

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
