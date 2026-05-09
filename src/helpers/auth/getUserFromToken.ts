import { User } from '../../types'

type FirebaseTokenPayload = {
  user_id?: string
  email?: string
}

const decodeBase64Url = (value: string) => {
  if (typeof atob !== 'function') {
    return null
  }

  const normalizedValue = value.replace(/-/g, '+').replace(/_/g, '/')
  const paddedValue = normalizedValue.padEnd(
    Math.ceil(normalizedValue.length / 4) * 4,
    '=',
  )

  try {
    return atob(paddedValue)
  } catch {
    return null
  }
}

export const getUserFromToken = (token: string | null): User | null => {
  if (!token) return null

  const payload = token.split('.')[1]

  if (!payload) return null

  const decodedPayload = decodeBase64Url(payload)

  if (!decodedPayload) return null

  try {
    const parsedPayload = JSON.parse(decodedPayload) as FirebaseTokenPayload

    if (!parsedPayload.user_id) {
      return null
    }

    return {
      uid: parsedPayload.user_id ?? null,
      email: parsedPayload.email ?? null,
    }
  } catch {
    return null
  }
}
