import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { AuthState, AuthUser } from '../../types/store'
import { setMessage, clearMessage } from './messageSlice'
import { isTokenExpired, error } from '../../helpers'

const TOKEN_KEY = 'jwt-token'
const API_KEY = process.env.NEXT_PUBLIC_FB_KEY

const initialState: AuthState = {
  token: null,
  isAuth: false,
  user: null,
  loading: false,
  initialized: false,
}

export const initAuth = createAsyncThunk('auth/init', async () => {
  if (typeof window === 'undefined') return null

  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return null

  if (isTokenExpired(token)) {
    localStorage.removeItem(TOKEN_KEY)
    return null
  }

  return token
})

export const registration = createAsyncThunk<
  string,
  AuthUser,
  { rejectValue: string }
>('auth/registration', async (user, { dispatch, rejectWithValue }) => {
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...user,
          returnSecureToken: true,
        }),
      },
    )

    const data = await res.json()

    if (!res.ok) {
      const message = data?.error?.message
      if (message) {
        dispatch(
          setMessage({
            value: error(message),
            type: 'danger',
          }),
        )
      }
      return rejectWithValue('Registration failed')
    }

    localStorage.setItem(TOKEN_KEY, data.idToken)
    dispatch(clearMessage())

    return data.idToken
  } catch {
    return rejectWithValue('Network error')
  }
})

export const login = createAsyncThunk<
  string,
  AuthUser,
  { rejectValue: string }
>('auth/login', async (user, { dispatch, rejectWithValue }) => {
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...user,
          returnSecureToken: true,
        }),
      },
    )

    const data = await res.json()

    if (!res.ok) {
      const message = data?.error?.message
      if (message) {
        dispatch(
          setMessage({
            value: error(message),
            type: 'danger',
          }),
        )
      }
      return rejectWithValue('Login failed')
    }

    localStorage.setItem(TOKEN_KEY, data.idToken)
    dispatch(clearMessage())

    return data.idToken
  } catch {
    return rejectWithValue('Network error')
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY)
  }
})

export const selectToken = (state: { auth: AuthState }) => state.auth.token
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  Boolean(state.auth.token)
export const selectAuthLoading = (state: { auth: AuthState }) =>
  state.auth.loading
export const selectAuthInitialized = (state: { auth: AuthState }) =>
  state.auth.initialized

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initAuth.fulfilled, (state, action) => {
        state.initialized = true

        if (action.payload) {
          state.token = action.payload
          state.isAuth = true
        }
      })
      .addCase(registration.pending, (state) => {
        state.loading = true
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
        state.isAuth = true
      })
      .addCase(registration.rejected, (state) => {
        state.loading = false
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
        state.isAuth = true
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null
        state.isAuth = false
        state.user = null
      })
  },
})

export default authSlice.reducer
