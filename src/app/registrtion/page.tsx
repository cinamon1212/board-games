'use client'

import React from 'react'
import { AuthForm } from '../../components/AuthForm'

export default function RegistrationPage() {
  return (
    <AuthForm
      mode='registration'
      title='Регистрация'
      submitText='Зарегистрироваться'
      limitText='Вы превысили количество попыток. Попробуйте позже.'
    />
  )
}
