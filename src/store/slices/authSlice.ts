import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { AUTH_REQUEST_ERRORS } from '../../constants'
import type { AuthSession, AuthState, AuthUser, Message } from '../../types'

import {
  getFirebaseAuth,
  saveAuthSession,
  clearStoredAuthSession,
  createAuthSessionFromFirebaseUser,
  getStoredAuthSession,
  getAuthError,
} from '../../helpers'

const initialState: AuthState = {
  token: null,
  isAuth: false,
  user: null,
  isAdmin: false,
  loading: false,
  initialized: false,
  message: null,
}

export const initAuth = createAsyncThunk('auth/init', async () => {
  if (typeof window === 'undefined') return null

  return getStoredAuthSession()
})

export const registration = createAsyncThunk<
  AuthSession,
  AuthUser,
  { rejectValue: string }
>('auth/registration', async (user, { dispatch, rejectWithValue }) => {
  try {
    const firebaseAuth = getFirebaseAuth()
    const credentials = await createUserWithEmailAndPassword(
      firebaseAuth,
      user.email,
      user.password,
    )

    const firebaseUser = firebaseAuth.currentUser ?? credentials.user

    if (!firebaseUser) {
      return rejectWithValue(AUTH_REQUEST_ERRORS.registrationFailed)
    }

    const session = await createAuthSessionFromFirebaseUser(firebaseUser)

    saveAuthSession(session)
    dispatch(clearMessage())

    return session
  } catch (err) {
    const message = getAuthError(err)

    dispatch(
      setMessage({
        value: message,
        type: 'danger',
      }),
    )

    return rejectWithValue(message)
  }
})

export const login = createAsyncThunk<
  AuthSession,
  AuthUser,
  { rejectValue: string }
>('auth/login', async (user, { dispatch, rejectWithValue }) => {
  try {
    const firebaseAuth = getFirebaseAuth()
    const credentials = await signInWithEmailAndPassword(
      firebaseAuth,
      user.email,
      user.password,
    )

    const firebaseUser = firebaseAuth.currentUser ?? credentials.user

    if (!firebaseUser) {
      return rejectWithValue(AUTH_REQUEST_ERRORS.loginFailed)
    }

    const session = await createAuthSessionFromFirebaseUser(firebaseUser)

    saveAuthSession(session)
    dispatch(clearMessage())

    return session
  } catch (err) {
    const message = getAuthError(err)

    dispatch(
      setMessage({
        value: message,
        type: 'danger',
      }),
    )

    return rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  if (typeof window !== 'undefined') {
    clearStoredAuthSession()
  }

  await signOut(getFirebaseAuth())
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
          state.token = action.payload.token
          state.user = action.payload.user
          state.isAdmin = action.payload.isAdmin
          state.isAuth = true
        }
      })
      .addCase(registration.pending, (state) => {
        state.loading = true
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
        state.user = action.payload.user
        state.isAdmin = action.payload.isAdmin
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
        state.token = action.payload.token
        state.user = action.payload.user
        state.isAdmin = action.payload.isAdmin
        state.isAuth = true
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null
        state.isAuth = false
        state.user = null
        state.isAdmin = false
      })
  },
})

export const { setMessage, clearMessage } = authSlice.actions
