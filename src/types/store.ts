export type User = {
  uid: string
  email: string | null
}

export type AuthState = {
  isAuth: boolean
  user: User | null
  isAdmin: boolean
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
