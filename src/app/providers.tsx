'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'
import { ReactNode } from 'react'
import { Toast } from '../components/Toast/Toast'
import { AuthInitializer } from './auth-initializer'
import { ResultsInitializer } from './results-initializer'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <AuthInitializer />
      <ResultsInitializer />
      <Toast />
      {children}
    </Provider>
  )
}
