import { AUTH_ERROR_CODES, AUTH_REQUEST_ERRORS } from '@/constants'

type ErrorCode = keyof typeof AUTH_ERROR_CODES

/** Текст ошибки по коду из API или запасной вариант */
export function getAuthError(code: ErrorCode | string): string {
  return AUTH_ERROR_CODES[code as ErrorCode] ?? AUTH_REQUEST_ERRORS.unknown
}
