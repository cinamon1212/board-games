'use client'

import React from 'react'
import { AuthForm } from '../../components/AuthForm'
import Link from 'next/link'
import { LinkWrapper } from '../styles'

export default function RegistrationPage() {
  return (
    <AuthForm
      mode='registration'
      title='Регистрация'
      submitText='Зарегистрироваться'
      limitText='Вы превысили количество попыток. Попробуйте позже.'
    >
      <LinkWrapper>
        Уже зарегистрирован? <Link href='/login'>Войти</Link>
      </LinkWrapper>
    </AuthForm>
  )
}
