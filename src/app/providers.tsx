'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'
import { ReactNode } from 'react'
import { AuthInitializer } from './auth-initializer'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <AuthInitializer />
      {children}
    </Provider>
  )
}
