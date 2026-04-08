import type { LintConfigContribution, LintOverride } from '../types'

export function createReactConfig(): LintConfigContribution {
  const reactOverride: LintOverride = {
    files: ['**/*.?([cm])[jt]s?(x)'],
    rules: {
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-key': 'error',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-script-url': 'warn',
      'react/jsx-boolean-value': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'warn',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-string-refs': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-render-return-value': 'error',
      'react/no-danger': 'warn',
      'react/no-danger-with-children': 'error',
      'react/void-dom-elements-no-children': 'warn',
      'react/button-has-type': 'warn',
      'react/iframe-missing-sandbox': 'warn',
      'react/rules-of-hooks': 'error',
      'react/exhaustive-deps': 'warn',
    },
  }

  return {
    plugins: ['react'],
    overrides: [reactOverride],
  }
}
