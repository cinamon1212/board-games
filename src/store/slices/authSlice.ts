import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import type { AuthState, AuthUser, Message } from '../../types'
import { AUTH_REQUEST_ERRORS } from '@/constants'
import { getAuthError, isTokenExpired } from '../../helpers'

const TOKEN_KEY = 'jwt-token'
const API_KEY = process.env.NEXT_PUBLIC_FB_KEY
const FIREBASE_AUTH_URL = 'https://identitytoolkit.googleapis.com/v1/accounts'

const initialState: AuthState = {
  token: null,
  isAuth: false,
  user: null,
  loading: false,
  initialized: false,
  message: null,
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
>('auth/registration', async (user, { rejectWithValue }) => {
  try {
    const res = await fetch(`${FIREBASE_AUTH_URL}:signUp?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...user,
        returnSecureToken: true,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      const message = data?.error?.message
      if (message) {
        return rejectWithValue(getAuthError(message))
      }
      return rejectWithValue(AUTH_REQUEST_ERRORS.registrationFailed)
    }

    localStorage.setItem(TOKEN_KEY, data.idToken)

    return data.idToken
  } catch {
    return rejectWithValue(AUTH_REQUEST_ERRORS.networkError)
  }
})

export const login = createAsyncThunk<
  string,
  AuthUser,
  { rejectValue: string }
>('auth/login', async (user, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `${FIREBASE_AUTH_URL}:signInWithPassword?key=${API_KEY}`,
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
        return rejectWithValue(getAuthError(message))
      }
      return rejectWithValue(AUTH_REQUEST_ERRORS.loginFailed)
    }

    localStorage.setItem(TOKEN_KEY, data.idToken)

    return data.idToken
  } catch {
    return rejectWithValue(AUTH_REQUEST_ERRORS.networkError)
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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<NonNullable<Message>>) {
      state.message = action.payload
    },
    clearMessage(state) {
      state.message = null
    },
  },
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
        state.message = null
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
        state.isAuth = true
        state.message = null
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.message = { value: action.payload, type: 'danger' }
        }
      })
      .addCase(login.pending, (state) => {
        state.loading = true
        state.message = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
        state.isAuth = true
        state.message = null
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.message = { value: action.payload, type: 'danger' }
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null
        state.isAuth = false
        state.user = null
        state.message = null
      })
  },
})

export const { setMessage, clearMessage } = authSlice.actions
