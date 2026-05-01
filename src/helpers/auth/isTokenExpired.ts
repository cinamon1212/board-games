export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const exp = payload.exp * 2000 // срок жизни токена 2 часа
    return Date.now() >= exp
  } catch {
    return true
  }
}
