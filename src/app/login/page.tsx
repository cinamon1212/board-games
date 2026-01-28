'use client'

import React from 'react'
import { AuthForm } from '../../components/AuthForm'

export default function LoginPage() {
  return (
    <AuthForm
      mode='login'
      title='Войти в систему'
      submitText='Войти'
      limitText='Вы превысили количество попыток входа. Попробуйте позже.'
    />
  )
}
