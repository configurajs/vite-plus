import type { LintConfigContribution } from '../types'

export function createJsConfig(): LintConfigContribution {
  return {
    plugins: ['eslint', 'oxc', 'unicorn', 'import'],
    categories: {
      correctness: 'error',
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    rules: {
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true,
        },
      ],
      'no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
        },
      ],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      curly: 'error',
      yoda: 'error',
      'default-param-last': 'error',
      'no-caller': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'require-await': 'error',
      'symbol-description': 'error',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-self-import': 'error',
    },
  }
}
