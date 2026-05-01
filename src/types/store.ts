export type User = {
  id: number
  email: string
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
