'use client'

import React from 'react'
import { AuthForm } from '../../components/AuthForm'
import Link from 'next/link'
import { LinkWrapper } from '../globals'

// Динамический рендеринг для избежания ошибки инициализации
export const dynamic = 'force-dynamic'

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
