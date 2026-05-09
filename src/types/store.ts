export type User = {
  uid: string | null
  email: string | null
}

export type MessageType = 'danger' | 'success' | 'info'

export type Message = {
  value: string
  type: MessageType
} | null

export type AuthState = {
  isAuth: boolean
  user: User | null
  token: string | null
  loading: boolean
  initialized: boolean
  message: Message
  isAdmin: boolean
}

export type AuthUser = {
  email: string
  password: string
}

export type FirebaseAuthResponse = {
  idToken: string
  refreshToken: string
  expiresIn: string
  localId: string
}

export type AuthMode = 'login' | 'registration'

/** Данные сессии: токен, пользователь и флаг админа (custom claims) */
export type AuthSession = {
  token: string
  user: User
  isAdmin: boolean
}
