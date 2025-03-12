import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', '@next/next', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  }),
]

export default eslintConfig
