'use client'

import React from 'react'
import { AuthForm } from '../../components/AuthForm'
import Link from 'next/link'
import { LinkWrapper } from '../styles'

export default function LoginPage() {
  return (
    <AuthForm
      mode='login'
      title='Войти в систему'
      submitText='Войти'
      limitText='Вы превысили количество попыток входа. Попробуйте позже.'
    >
      <LinkWrapper>
        Еще не зарегистрированы? <Link href='/registration'>Регистрация</Link>
      </LinkWrapper>
    </AuthForm>
  )
}
