module.exports = {
  extends: ['next/core-web-vitals', '@rocketseat/eslint-config/next'],
  rules: { '@typescript-eslint/no-namespace': 'off' },
  globals: {
    JSX: 'readonly',
  },
}
