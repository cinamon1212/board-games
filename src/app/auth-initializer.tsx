'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/store'
import { initAuth } from '@/store/slices/authSlice'

export function AuthInitializer() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initAuth())
  }, [dispatch])

  return null
}
