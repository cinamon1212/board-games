export const PASSWORD_MIN_LENGTH = 6 as const

export const AUTH_ATTEMPTS_LIMIT = 3 as const

/** Коды ответа API (Firebase и прочие) → сообщения для пользователя */
export const AUTH_ERROR_CODES = {
  invalidLoginCredentials: 'Неверный логин или пароль.',
  INVALID_LOGIN_CREDENTIALS: 'Неверный логин или пароль.',
  'auth/invalid-credential': 'Неверный логин или пароль.',
  'auth/invalid-login-credentials': 'Неверный логин или пароль.',
  'auth/email-already-in-use': 'Пользователь с таким email уже существует.',
  'auth/weak-password': 'Пароль слишком слабый.',
  'auth/invalid-email': 'Введите корректный email.',
  'auth/too-many-requests': 'Слишком много попыток. Попробуйте позже.',
  auth: 'Пожалуйста, авторизуйтесь.',
} as const

/** Сообщения валидации формы входа и регистрации (yup) */
export const AUTH_FORM_VALIDATION = {
  emailRequired: 'Email обязателен',
  emailInvalid: 'Введите корректный email',
  passwordRequired: 'Пароль обязателен',
} as const

/** Минимальная длина пароля в тексте ошибки */
export const getAuthPasswordMinLengthMessage = (min: number): string =>
  `Минимум ${min} символов`

/** Ошибки запросов и общие сбои при входе и регистрации */
export const AUTH_REQUEST_ERRORS = {
  generic: 'Произошла ошибка',
  registrationFailed: 'Ошибка регистрации',
  networkError: 'Ошибка сети',
  loginFailed: 'Ошибка входа',
  unknown: 'Неизвестная ошибка',
} as const

export const TOKEN_KEY = 'jwt-token' as const
export const AUTH_SESSION_KEY = 'auth-session' as const
