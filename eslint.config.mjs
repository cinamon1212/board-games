import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import path from 'path'
import { readFileSync } from 'fs'
import prettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const prettierConfig = JSON.parse(
  readFileSync(path.join(__dirname, '.prettierrc'), 'utf-8'),
)

const eslintConfig = [
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', '@next/next'],
  }),
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
]

export default eslintConfig
