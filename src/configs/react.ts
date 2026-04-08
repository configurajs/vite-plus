import type { LintConfigContribution, OxlintOverride } from '../types'

export function createReactConfig(): LintConfigContribution {
  const reactOverride: OxlintOverride = {
    files: ['**/*.?([cm])[jt]s?(x)'],
    rules: {
      'react/exhaustive-deps': 'warn',
      'react/forward-ref-uses-ref': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-no-undef': 'error',
      'react/jsx-props-no-spread-multi': 'error',
      'react/jsx-uses-vars': 'warn',
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-script-url': 'warn',
      'react/jsx-boolean-value': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'warn',
      'react/no-children-prop': 'error',
      'react/no-danger': 'warn',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      'react/no-did-mount-set-state': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-unsafe': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-will-update-set-state': 'error',
      'react/void-dom-elements-no-children': 'warn',
      'react/button-has-type': 'warn',
      'react/iframe-missing-sandbox': 'warn',
      'react/rules-of-hooks': 'error',
    },
  }

  return {
    plugins: ['react'],
    overrides: [reactOverride],
  }
}
