import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth'

import type { AuthState, AuthUser } from '../../types/store'
import { setMessage, clearMessage } from './messageSlice'
import { isTokenExpired, error } from '../../helpers'
import { auth } from '../../helpers/auth/firebaseClient'
import { getUserFromToken } from '../../helpers/auth/getUserFromToken'

const TOKEN_KEY = 'jwt-token'
const AUTH_SESSION_KEY = 'auth-session'

type AuthSession = {
  token: string
  user: NonNullable<AuthState['user']>
  isAdmin: boolean
}

const saveAuthSession = (session: AuthSession) => {
  localStorage.setItem(TOKEN_KEY, session.token)
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session))
}

const clearStoredAuthSession = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(AUTH_SESSION_KEY)
}

const createAuthSession = (token: string | null, isAdmin = false) => {
  const user = getUserFromToken(token)

  if (!token || !user) {
    return null
  }

  return {
    token,
    user,
    isAdmin,
  } satisfies AuthSession
}

const createAuthSessionFromFirebaseUser = async (
  firebaseUser: FirebaseUser,
) => {
  const tokenResult = await firebaseUser.getIdTokenResult(true)
  const token = await firebaseUser.getIdToken()

  // 👇 DEV ONLY LOG
  if (process.env.NODE_ENV === 'development') {
    console.log('[AUTH] UID:', firebaseUser.uid)
    console.log('[AUTH] CLAIMS:', tokenResult.claims)
  }

  return {
    token,
    user: {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
    },
    isAdmin: tokenResult.claims.admin === true,
  } satisfies AuthSession
}

const getStoredAuthSession = () => {
  const rawSession = localStorage.getItem(AUTH_SESSION_KEY)

  if (rawSession) {
    try {
      const parsedSession = JSON.parse(rawSession) as AuthSession

      if (!isTokenExpired(parsedSession.token)) {
        return parsedSession
      }
    } catch {
      clearStoredAuthSession()
    }
  }

  const legacyToken = localStorage.getItem(TOKEN_KEY)

  if (!legacyToken || isTokenExpired(legacyToken)) {
    clearStoredAuthSession()
    return null
  }

  const legacySession = createAuthSession(legacyToken)

  if (!legacySession) {
    clearStoredAuthSession()
    return null
  }

  saveAuthSession(legacySession)

  return legacySession
}

const getAuthErrorMessage = (errorValue: unknown) => {
  if (
    errorValue &&
    typeof errorValue === 'object' &&
    'code' in errorValue &&
    typeof errorValue.code === 'string'
  ) {
    return error(errorValue.code)
  }

  return 'Network error'
}

const initialState: AuthState = {
  token: null,
  isAuth: false,
  user: null,
  isAdmin: false,
  loading: false,
  initialized: false,
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
    const credentials = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    )

    const firebaseUser = auth.currentUser ?? credentials.user

    if (!firebaseUser) {
      return rejectWithValue('Registration failed')
    }

    const session = await createAuthSessionFromFirebaseUser(firebaseUser)

    saveAuthSession(session)
    dispatch(clearMessage())

    return session
  } catch (err) {
    const message = getAuthErrorMessage(err)

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
    const credentials = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    )

    const firebaseUser = auth.currentUser ?? credentials.user

    if (!firebaseUser) {
      return rejectWithValue('Login failed')
    }

    const session = await createAuthSessionFromFirebaseUser(firebaseUser)

    saveAuthSession(session)
    dispatch(clearMessage())

    return session
  } catch (err) {
    const message = getAuthErrorMessage(err)

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

  await signOut(auth)
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

export default authSlice.reducer
