'use client'

import React from 'react'
import { useAuthForm } from '@/hooks/useAuthForm'
import { FormCard, FormControl, FormTitle, LimitText } from './styles'
import { ButtonPrimary, Input } from '@/app/styles'
import { AuthMode } from '@/types'

interface AuthFormProps {
  title: string
  submitText: string
  limitText: string
  mode: AuthMode
  children?: React.ReactNode
}

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  submitText,
  limitText,
  mode,
  children,
}) => {
  const { register, errors, onSubmit, isSubmitting, isTooManyAttempts } =
    useAuthForm(mode)

  return (
    <FormCard onSubmit={onSubmit}>
      <FormTitle>{title}</FormTitle>

      <FormControl $invalid={!!errors.email}>
        <label>Email</label>
        <Input type='email' placeholder='Email' {...register('email')} />
        {errors.email && <small>{errors.email.message}</small>}
      </FormControl>

      <FormControl $invalid={!!errors.password}>
        <label>Пароль</label>
        <Input type='password' placeholder='Пароль' {...register('password')} />
        {errors.password && <small>{errors.password.message}</small>}
      </FormControl>

      <ButtonPrimary type='submit' disabled={isSubmitting || isTooManyAttempts}>
        {submitText}
      </ButtonPrimary>

      {children}

      {isTooManyAttempts && <LimitText>{limitText}</LimitText>}
    </FormCard>
  )
}
