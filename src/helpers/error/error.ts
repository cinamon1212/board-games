const ERROR_CODES = {
  INVALID_LOGIN_CREDENTIALS: 'Неверный логин или пароль.',
  auth: 'Пожалуйста, авторизуйтесь.',
}

type ErrorCode = keyof typeof ERROR_CODES

export function error(code: ErrorCode | string): string {
  return ERROR_CODES[code as ErrorCode] || 'Неизвестная ошибка'
}
