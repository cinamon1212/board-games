export const PASSWORD_MIN_LENGTH = 6 as const

export const AUTH_ATTEMPTS_LIMIT = 3 as const

/** Коды ответа API (Firebase) → сообщения для пользователя */
export const AUTH_ERROR_CODES = {
  invalidLoginCredentials: 'Неверный логин или пароль.',
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
