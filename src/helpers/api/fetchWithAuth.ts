import { logout } from '@/store/slices/authSlice'
import { store } from '@/store'

export async function fetchWithAuth(
  input: RequestInfo,
  init: RequestInit = {},
) {
  const token = localStorage.getItem('jwt-token')

  const res = await fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  })

  if (res.status === 401) {
    store.dispatch(logout())
    window.location.href = '/login?message=auth'
    throw new Error('Unauthorized')
  }

  return res
}
