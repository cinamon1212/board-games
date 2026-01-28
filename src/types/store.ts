export type User = {
  id: number
  email: string
}

export type AuthState = {
  isAuth: boolean
  user: User | null
  token: string | null
  loading: boolean
  initialized: boolean
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

export type Message = {
  value: string
  type: 'danger' | 'success' | 'info'
} | null

export type UIState = {
  message: Message
  sidebar: boolean
}

export type AuthMode = 'login' | 'registration'
