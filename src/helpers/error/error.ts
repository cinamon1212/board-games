const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: 'Неверный логин или пароль.',
  'auth/invalid-credential': 'Неверный логин или пароль.',
  'auth/invalid-login-credentials': 'Неверный логин или пароль.',
  'auth/email-already-in-use': 'Пользователь с таким email уже существует.',
  'auth/weak-password': 'Пароль слишком слабый.',
  'auth/invalid-email': 'Введите корректный email.',
  'auth/too-many-requests': 'Слишком много попыток. Попробуйте позже.',
  auth: 'Пожалуйста, авторизуйтесь.',
}

type ErrorCode = keyof typeof ERROR_CODES

export function error(code: ErrorCode | string): string {
  return ERROR_CODES[code as ErrorCode] || 'Неизвестная ошибка'
}
