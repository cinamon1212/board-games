'use client'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { RootState } from '@/store'
import { AuthGuardStyles } from './styles'
import { Loader } from '../Loader'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  const initialized = useSelector((state: RootState) => state.auth.initialized)

  const router = useRouter()

  useEffect(() => {
    if (!initialized) return

    if (!isAuth) {
      router.replace('/registration?message=auth')
    }
  }, [initialized, isAuth, router])

  if (!initialized) return <Loader />
  if (!isAuth) return null

  return <AuthGuardStyles>{children}</AuthGuardStyles>
}
