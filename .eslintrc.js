module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomic: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off'
  }
}
