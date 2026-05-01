'use client'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useState, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { AppDispatch, login, registration, setMessage } from '@/store'
import { AuthUser, AuthMode } from '../types'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  AUTH_ATTEMPTS_LIMIT,
  AUTH_FORM_VALIDATION,
  AUTH_REQUEST_ERRORS,
  getAuthPasswordMinLengthMessage,
  PASSWORD_MIN_LENGTH,
} from '@/constants'

const schema = yup.object({
  email: yup
    .string()
    .required(AUTH_FORM_VALIDATION.emailRequired)
    .email(AUTH_FORM_VALIDATION.emailInvalid),
  password: yup
    .string()
    .required(AUTH_FORM_VALIDATION.passwordRequired)
    .min(
      PASSWORD_MIN_LENGTH,
      getAuthPasswordMinLengthMessage(PASSWORD_MIN_LENGTH),
    ),
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
  const isTooManyAttempts = useMemo(
    () => submitCount >= AUTH_ATTEMPTS_LIMIT,
    [submitCount],
  )

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
      let message: string = AUTH_REQUEST_ERRORS.generic

      if (err instanceof Error) {
        message = err.message
      }

      dispatch(
        setMessage({
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
