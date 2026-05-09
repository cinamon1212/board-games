import type { User as FirebaseUser } from 'firebase/auth'

import { TOKEN_KEY, AUTH_SESSION_KEY } from '@/constants'
import type { AuthSession } from '@/types'

import { getUserFromToken } from './getUserFromToken'
import { isTokenExpired } from './isTokenExpired'

/** Сохраняет токен и полную сессию в localStorage */
export const saveAuthSession = (session: AuthSession) => {
  localStorage.setItem(TOKEN_KEY, session.token)
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session))
}

/** Удаляет сохранённые токен и сессию */
export const clearStoredAuthSession = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(AUTH_SESSION_KEY)
}

/** Собирает сессию из JWT и опционального флага админа */
export const createAuthSession = (
  token: string | null,
  isAdmin = false,
): AuthSession | null => {
  const user = getUserFromToken(token)

  if (!token || !user) {
    return null
  }

  return {
    token,
    user,
    isAdmin,
  }
}

/** Строит сессию из Firebase User (токен + claims.admin) */
export const createAuthSessionFromFirebaseUser = async (
  firebaseUser: FirebaseUser,
): Promise<AuthSession> => {
  const tokenResult = await firebaseUser.getIdTokenResult(true)
  const token = await firebaseUser.getIdToken()

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
  }
}

/** Читает сессию из storage; мигрирует старый формат только с токеном */
export const getStoredAuthSession = (): AuthSession | null => {
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
