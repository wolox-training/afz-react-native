module.exports = {
  root: true,
  extends: ['wolox-react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    complexity: 'off',
    'no-nested-ternary': 'off',
    'no-magic-numbers': 'off',
    'new-cap': 'off',
    'comma-dangle': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        paths: ['src'],
        settings: {
          'import/resolver': {
            node: {
              paths: ['src'],
              extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json']
            }
          }
        }
      }
    }
  }
};
