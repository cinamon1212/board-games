import { AUTH_ERROR_CODES, AUTH_REQUEST_ERRORS } from '@/constants'

type ErrorCode = keyof typeof AUTH_ERROR_CODES

/**
 * Сообщение для UI: код строкой, объект ошибки с полем code (Firebase) или неизвестное значение.
 */
export function getAuthError(errorOrCode: unknown): string {
  let code: string | null = null

  if (typeof errorOrCode === 'string') {
    code = errorOrCode
  } else if (
    errorOrCode &&
    typeof errorOrCode === 'object' &&
    'code' in errorOrCode
  ) {
    const raw = (errorOrCode as { code: unknown }).code
    if (typeof raw === 'string') {
      code = raw
    }
  }

  if (code !== null) {
    return AUTH_ERROR_CODES[code as ErrorCode] ?? AUTH_REQUEST_ERRORS.unknown
  }

  return AUTH_REQUEST_ERRORS.networkError
}
