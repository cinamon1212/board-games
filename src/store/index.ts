import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import authReducer from './slices/authSlice'
import messageReducer from './slices/messageSlice'
import gamesReducer from './slices/gamesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: messageReducer,
    games: gamesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
