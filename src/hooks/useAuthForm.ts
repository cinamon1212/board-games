'use client'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useState, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { AppDispatch } from '@/store'
import { login, registration } from '@/store/slices/authSlice'
import { showMessage } from '@/store/slices/messageSlice'
import { AuthUser, AuthMode } from '../types/store'
import { yupResolver } from '@hookform/resolvers/yup'

const PASSWORD_MIN_LENGTH = 6

const schema = yup.object({
  email: yup
    .string()
    .required('Email обязателен')
    .email('Введите корректный email'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(PASSWORD_MIN_LENGTH, `Минимум ${PASSWORD_MIN_LENGTH} символов`),
})

export const useAuthForm = (mode: AuthMode = 'login') => {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const [submitCount, setSubmitCount] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AuthUser>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  // Ограничение по количеству попыток
  const isTooManyAttempts = useMemo(() => submitCount >= 3, [submitCount])

  useEffect(() => {
    if (isTooManyAttempts) {
      const timer = setTimeout(() => setSubmitCount(0), 3000)
      return () => clearTimeout(timer)
    }
  }, [isTooManyAttempts])

  const onSubmit = handleSubmit(async (values: AuthUser) => {
    try {
      setSubmitCount((prev) => prev + 1)

      if (mode === 'login') {
        await dispatch(login(values)).unwrap()
      } else {
        await dispatch(registration(values)).unwrap()
      }

      reset()
      router.push('/')
    } catch (err: unknown) {
      let message = 'Произошла ошибка'

      if (err instanceof Error) {
        message = err.message
      } else if (typeof err === 'string') {
        message = err
      }

      dispatch(
        showMessage({
          value: message,
          type: 'danger',
        }),
      )
    }
  })

  return {
    register,
    errors,
    onSubmit,
    isSubmitting,
    isTooManyAttempts,
  }
}
